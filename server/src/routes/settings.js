import express from 'express';
import { client } from '../config/db.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

// GET /api/settings/public (Public settings for catalog and general navigation)
router.get('/public', async (req, res) => {
  try {
    const result = await client.execute('SELECT key, value FROM system_settings');
    const settings = {
      store_name: 'Mi Comercio',
      store_subtitle: 'Catálogo Online & Gestión Comercial',
      store_logo: '/assets/logo.svg',
      catalog_whatsapp: '5493416123456',
      currency_symbol: '$'
    };

    result.rows.forEach(r => {
      if (r && r.key) {
        settings[r.key] = r.value;
      }
    });

    return res.json(settings);
  } catch (err) {
    console.error('Error fetching public settings:', err);
    return res.status(500).json({ error: 'Error al obtener configuración pública.' });
  }
});

// GET /api/settings (Admin/SuperAdmin)
router.get('/', authenticateToken, requireRole('ADMIN', 'SUPERADMIN'), async (req, res) => {
  try {
    const result = await client.execute('SELECT key, value FROM system_settings');
    const settings = {
      store_name: 'Mi Comercio',
      store_subtitle: 'Catálogo Online & Gestión Comercial',
      store_logo: '/assets/logo.svg',
      catalog_whatsapp: '5493416123456',
      currency_symbol: '$'
    };

    result.rows.forEach(r => {
      if (r && r.key) {
        settings[r.key] = r.value;
      }
    });

    return res.json(settings);
  } catch (err) {
    console.error('Error fetching settings:', err);
    return res.status(500).json({ error: 'Error al obtener configuraciones.' });
  }
});

// PUT /api/settings (Admin/SuperAdmin)
router.put('/', authenticateToken, requireRole('ADMIN', 'SUPERADMIN'), async (req, res) => {
  try {
    const allowedKeys = ['catalog_whatsapp', 'store_name', 'store_subtitle', 'store_logo', 'currency_symbol'];

    for (const key of allowedKeys) {
      if (req.body[key] !== undefined) {
        let val = req.body[key];
        if (key === 'catalog_whatsapp') {
          val = String(val).replace(/[^\d+]/g, '');
        }
        await client.execute({
          sql: `INSERT INTO system_settings (key, value) VALUES (?, ?)
                ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
          args: [key, String(val)]
        });
      }
    }

    return res.json({ message: 'Configuración actualizada exitosamente.' });
  } catch (err) {
    console.error('Error updating settings:', err);
    return res.status(500).json({ error: 'Error al actualizar configuración.' });
  }
});

export default router;
