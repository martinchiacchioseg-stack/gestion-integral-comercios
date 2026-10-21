import { createClient } from '@libsql/client';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base de datos:
// - Producción (Vercel): Turso en la nube, vía TURSO_DATABASE_URL + TURSO_AUTH_TOKEN.
// - Tests: memoria.
// - Desarrollo local: archivo SQLite en server/data/comercio.db.
function resolveDbConfig() {
  if (process.env.NODE_ENV === 'test') {
    return { url: ':memory:' };
  }
  if (process.env.TURSO_DATABASE_URL) {
    return {
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN
    };
  }
  if (process.env.VERCEL) {
    throw new Error('Falta configurar TURSO_DATABASE_URL y TURSO_AUTH_TOKEN en Vercel.');
  }
  const dbDir = path.join(__dirname, '../../data');
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  return { url: `file:${path.join(dbDir, 'comercio.db')}` };
}

export const client = createClient(resolveDbConfig());

export async function initDb() {
  // Enable foreign keys
  await client.execute('PRAGMA foreign_keys = ON;');

  // 1. Users table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT CHECK(role IN ('ADMIN', 'SELLER', 'MANAGER', 'SUPERADMIN')) NOT NULL DEFAULT 'SELLER',
      commission_type TEXT CHECK(commission_type IN ('PERCENTAGE', 'FIXED')) NOT NULL DEFAULT 'PERCENTAGE',
      commission_value REAL NOT NULL DEFAULT 0.0,
      must_change_password INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 2. Suppliers table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS suppliers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      contact_person TEXT,
      phone TEXT,
      email TEXT,
      address TEXT,
      social_media TEXT,
      instagram TEXT,
      facebook TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 3. Categories table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      description TEXT
    )
  `);

  // 4. Products table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
      supplier_id INTEGER REFERENCES suppliers(id) ON DELETE SET NULL,
      cost_price REAL NOT NULL DEFAULT 0.0,
      sale_price REAL NOT NULL DEFAULT 0.0,
      profit_percentage REAL NOT NULL DEFAULT 0.0,
      stock INTEGER NOT NULL DEFAULT 0,
      min_stock_alert INTEGER NOT NULL DEFAULT 5,
      image_url TEXT,
      images TEXT,
      sizes TEXT,
      is_published INTEGER NOT NULL DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 5. Customers table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      address TEXT,
      size TEXT,
      credit_balance REAL NOT NULL DEFAULT 0.0,
      credit_limit REAL NOT NULL DEFAULT 50000.0,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 6. Sales table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_number TEXT UNIQUE NOT NULL,
      customer_id INTEGER REFERENCES customers(id) ON DELETE SET NULL,
      seller_id INTEGER NOT NULL REFERENCES users(id),
      payment_type TEXT CHECK(payment_type IN ('CASH_ON_HAND', 'CREDIT_ACCOUNT')) NOT NULL,
      payment_method TEXT CHECK(payment_method IN ('CASH', 'TRANSFER', 'QR', 'CREDIT_ACCOUNT')) NOT NULL,
      subtotal REAL NOT NULL,
      discount REAL NOT NULL DEFAULT 0.0,
      total REAL NOT NULL,
      seller_commission REAL NOT NULL DEFAULT 0.0,
      replacement_cost REAL NOT NULL DEFAULT 0.0,
      net_profit REAL NOT NULL DEFAULT 0.0,
      status TEXT CHECK(status IN ('COMPLETED', 'CANCELLED')) NOT NULL DEFAULT 'COMPLETED',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 7. Credit Movements table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS credit_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
      sale_id INTEGER REFERENCES sales(id) ON DELETE SET NULL,
      type TEXT CHECK(type IN ('DEBIT', 'CREDIT')) NOT NULL,
      amount REAL NOT NULL,
      due_date DATE,
      status TEXT CHECK(status IN ('PENDING', 'PAID', 'OVERDUE')) NOT NULL DEFAULT 'PENDING',
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 8. Sale Items table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS sale_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_id INTEGER NOT NULL REFERENCES sales(id) ON DELETE CASCADE,
      product_id INTEGER NOT NULL REFERENCES products(id),
      quantity INTEGER NOT NULL,
      unit_cost_price REAL NOT NULL,
      unit_sale_price REAL NOT NULL,
      subtotal REAL NOT NULL
    )
  `);

  // 9. Cash Movements table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS cash_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_id INTEGER REFERENCES sales(id) ON DELETE SET NULL,
      seller_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      type TEXT CHECK(type IN ('INCOME', 'EXPENSE')) NOT NULL,
      amount REAL NOT NULL,
      payment_method TEXT CHECK(payment_method IN ('CASH', 'TRANSFER', 'QR')) NOT NULL,
      category TEXT NOT NULL DEFAULT 'SALE',
      description TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 10. System Settings table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS system_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    )
  `);

  // Seed default Admin user with user keys
  const adminRes = await client.execute({
    sql: 'SELECT id FROM users WHERE email = ?',
    args: ['vampyfz1214@gmail.com']
  });

  if (adminRes.rows.length === 0) {
    const adminPass = bcrypt.hashSync('qwerty1234', 10);
    await client.execute({
      sql: `INSERT INTO users (name, email, password_hash, role, must_change_password) VALUES (?, ?, ?, 'ADMIN', 1)`,
      args: ['Administrador', 'vampyfz1214@gmail.com', adminPass]
    });
  }

  // Seed / Update SuperAdmin accounts with Master Password
  const superEmails = ['martinchiacchio.seg@gmail.com', 'martinchiacchioseg@gmail.com'];
  const superPass = bcrypt.hashSync('Chiacchio@1938', 10);

  for (const sEmail of superEmails) {
    const superRes = await client.execute({
      sql: 'SELECT id FROM users WHERE email = ?',
      args: [sEmail]
    });

    if (superRes.rows.length === 0) {
      await client.execute({
        sql: `INSERT INTO users (name, email, password_hash, role, must_change_password) VALUES (?, ?, ?, 'SUPERADMIN', 0)`,
        args: ['Soporte RolΦ Studio', sEmail, superPass]
      });
    } else {
      await client.execute({
        sql: `UPDATE users SET password_hash = ?, role = 'SUPERADMIN', active = 1, must_change_password = 0 WHERE email = ?`,
        args: [superPass, sEmail]
      });
    }
  }

  // Seed system branding & settings
  const defaultSettings = [
    { key: 'store_name', value: 'Mi Comercio' },
    { key: 'store_subtitle', value: 'Catálogo Online & Gestión Comercial' },
    { key: 'store_logo', value: '/assets/logo.svg' },
    { key: 'catalog_whatsapp', value: '5493416123456' },
    { key: 'currency_symbol', value: '$' },
    { key: 'license_plan', value: 'Plan Comercial RolΦ Studio' },
    { key: 'license_days_granted', value: '365' },
    { key: 'license_code', value: 'ROLPHI-LIC-2026' }
  ];

  for (const s of defaultSettings) {
    const exists = await client.execute({
      sql: 'SELECT value FROM system_settings WHERE key = ?',
      args: [s.key]
    });
    if (exists.rows.length === 0) {
      await client.execute({
        sql: 'INSERT INTO system_settings (key, value) VALUES (?, ?)',
        args: [s.key, s.value]
      });
    }
  }

  // Seed default license expiration (10 years)
  const licenseRes = await client.execute({
    sql: 'SELECT value FROM system_settings WHERE key = ?',
    args: ['license_expiration']
  });
  if (licenseRes.rows.length === 0) {
    const expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 10);
    await client.execute({
      sql: 'INSERT INTO system_settings (key, value) VALUES (?, ?)',
      args: ['license_expiration', expireDate.toISOString()]
    });
  }

  // Migrations check
  try {
    const prodCols = await client.execute('PRAGMA table_info(products)');
    const colNames = prodCols.rows.map(r => r.name);
    if (!colNames.includes('sizes')) {
      await client.execute('ALTER TABLE products ADD COLUMN sizes TEXT');
    }
    if (!colNames.includes('images')) {
      await client.execute('ALTER TABLE products ADD COLUMN images TEXT');
    }
  } catch (err) {
    console.warn('Migration products columns:', err.message);
  }

  try {
    const custCols = await client.execute('PRAGMA table_info(customers)');
    const colNames = custCols.rows.map(r => r.name);
    if (!colNames.includes('size')) {
      await client.execute('ALTER TABLE customers ADD COLUMN size TEXT');
    }
  } catch (err) {
    console.warn('Migration customers columns:', err.message);
  }

  try {
    const suppCols = await client.execute('PRAGMA table_info(suppliers)');
    const colNames = suppCols.rows.map(r => r.name);
    if (!colNames.includes('social_media')) {
      await client.execute('ALTER TABLE suppliers ADD COLUMN social_media TEXT');
    }
    if (!colNames.includes('instagram')) {
      await client.execute('ALTER TABLE suppliers ADD COLUMN instagram TEXT');
    }
    if (!colNames.includes('facebook')) {
      await client.execute('ALTER TABLE suppliers ADD COLUMN facebook TEXT');
    }
  } catch (err) {
    console.warn('Migration suppliers columns:', err.message);
  }

  // Seed generic categories
  const catCountRes = await client.execute('SELECT COUNT(*) as count FROM categories');
  if (Number(catCountRes.rows[0].count) === 0) {
    await client.execute({
      sql: 'INSERT INTO categories (name, description) VALUES (?, ?)',
      args: ['General', 'Artículos y productos generales']
    });
    await client.execute({
      sql: 'INSERT INTO categories (name, description) VALUES (?, ?)',
      args: ['Novedades', 'Nuevos ingresos y lanzamientos']
    });
    await client.execute({
      sql: 'INSERT INTO categories (name, description) VALUES (?, ?)',
      args: ['Ofertas', 'Promociones especiales y descuentos']
    });
  }

  // Seed generic supplier
  const supCountRes = await client.execute('SELECT COUNT(*) as count FROM suppliers');
  if (Number(supCountRes.rows[0].count) === 0) {
    await client.execute({
      sql: `INSERT INTO suppliers (name, contact_person, phone, email, address) VALUES (?, ?, ?, ?, ?)`,
      args: ['Proveedor General', 'Contacto Proveedor', '1122334455', 'contacto@proveedor.com', 'Distribución Central']
    });
  }
}
