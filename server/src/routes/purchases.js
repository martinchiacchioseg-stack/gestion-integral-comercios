import express from 'express';
import { client } from '../config/db.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

// GET /api/purchases (List all supplier purchases)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await client.execute(`
      SELECT p.*, s.name as supplier_name, s.phone as supplier_phone
      FROM purchases p
      LEFT JOIN suppliers s ON p.supplier_id = s.id
      ORDER BY p.id DESC
    `);

    // Fetch items for each purchase
    const purchasesWithItems = await Promise.all(
      result.rows.map(async (purchase) => {
        const itemsRes = await client.execute({
          sql: `
            SELECT pi.*, pr.name as product_name, pr.code as product_code
            FROM purchase_items pi
            JOIN products pr ON pi.product_id = pr.id
            WHERE pi.purchase_id = ?
          `,
          args: [purchase.id]
        });
        return {
          ...purchase,
          items: itemsRes.rows
        };
      })
    );

    return res.json(purchasesWithItems);
  } catch (err) {
    console.error('Error al obtener compras a proveedores:', err);
    return res.status(500).json({ error: 'Error al obtener compras a proveedores.' });
  }
});

// POST /api/purchases (Schedule new purchase and optionally receive stock)
router.post('/', authenticateToken, requireRole('ADMIN', 'MANAGER', 'SUPERADMIN'), async (req, res) => {
  try {
    const { supplier_id, scheduled_date, status, payment_status, payment_method, notes, items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Debe incluir al menos un producto en la compra.' });
    }

    const purchaseNumber = `COM-${Date.now().toString().slice(-6)}`;
    const finalStatus = status === 'RECEIVED' ? 'RECEIVED' : 'PENDING';
    const finalPaymentStatus = payment_status || 'PAID';
    const finalPaymentMethod = payment_method || 'TRANSFER';
    const receivedDate = finalStatus === 'RECEIVED' ? new Date().toISOString() : null;

    let totalCost = 0;
    items.forEach(it => {
      totalCost += Number(it.quantity) * Number(it.unit_cost);
    });

    const insertPurchase = await client.execute({
      sql: `
        INSERT INTO purchases (
          purchase_number, supplier_id, status, payment_status, payment_method,
          total_cost, scheduled_date, received_date, notes
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id
      `,
      args: [
        purchaseNumber,
        supplier_id || null,
        finalStatus,
        finalPaymentStatus,
        finalPaymentMethod,
        totalCost,
        scheduled_date || null,
        receivedDate,
        notes || ''
      ]
    });

    const purchaseId = insertPurchase.rows[0].id;

    for (const item of items) {
      const subtotal = Number(item.quantity) * Number(item.unit_cost);
      await client.execute({
        sql: 'INSERT INTO purchase_items (purchase_id, product_id, quantity, unit_cost, subtotal) VALUES (?, ?, ?, ?, ?)',
        args: [purchaseId, item.product_id, Number(item.quantity), Number(item.unit_cost), subtotal]
      });

      // Si la compra ya se recibe, impactar el stock inmediatamente
      if (finalStatus === 'RECEIVED') {
        await client.execute({
          sql: 'UPDATE products SET stock = stock + ?, cost_price = ? WHERE id = ?',
          args: [Number(item.quantity), Number(item.unit_cost), item.product_id]
        });
      }
    }

    return res.status(201).json({
      message: finalStatus === 'RECEIVED' 
        ? 'Compra registrada y stock ingresado al inventario con éxito.' 
        : 'Compra agendada con éxito como pendiente.',
      purchaseId,
      purchaseNumber,
      totalCost
    });
  } catch (err) {
    console.error('Error al registrar compra a proveedor:', err);
    return res.status(500).json({ error: 'Error al registrar compra a proveedor.' });
  }
});

// PUT /api/purchases/:id/receive (Receive a pending purchase and increment stock)
router.put('/:id/receive', authenticateToken, requireRole('ADMIN', 'MANAGER', 'SUPERADMIN'), async (req, res) => {
  try {
    const { id } = req.params;

    const purchaseRes = await client.execute({
      sql: 'SELECT * FROM purchases WHERE id = ?',
      args: [id]
    });

    if (purchaseRes.rows.length === 0) {
      return res.status(404).json({ error: 'Compra no encontrada.' });
    }

    const purchase = purchaseRes.rows[0];
    if (purchase.status === 'RECEIVED') {
      return res.status(400).json({ error: 'Esta compra ya fue ingresada al stock anteriormente.' });
    }

    const itemsRes = await client.execute({
      sql: 'SELECT * FROM purchase_items WHERE purchase_id = ?',
      args: [id]
    });

    // Sumar stock de cada producto
    for (const item of itemsRes.rows) {
      await client.execute({
        sql: 'UPDATE products SET stock = stock + ?, cost_price = ? WHERE id = ?',
        args: [Number(item.quantity), Number(item.unit_cost), item.product_id]
      });
    }

    await client.execute({
      sql: 'UPDATE purchases SET status = "RECEIVED", received_date = CURRENT_TIMESTAMP WHERE id = ?',
      args: [id]
    });

    return res.json({ message: 'Mercadería recibida con éxito. El stock de todos los artículos ha sido actualizado.' });
  } catch (err) {
    console.error('Error al recibir compra:', err);
    return res.status(500).json({ error: 'Error al ingresar mercadería al stock.' });
  }
});

// DELETE /api/purchases/:id
router.delete('/:id', authenticateToken, requireRole('ADMIN', 'SUPERADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    await client.execute({ sql: 'DELETE FROM purchases WHERE id = ?', args: [id] });
    return res.json({ message: 'Compra eliminada.' });
  } catch (err) {
    return res.status(500).json({ error: 'Error al eliminar compra.' });
  }
});

export default router;
