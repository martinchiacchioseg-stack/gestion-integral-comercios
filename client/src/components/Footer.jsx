import React, { useState, useEffect } from 'react';
import SuperAdminModal from './SuperAdminModal';
import api from '../services/api';
import { Heart } from 'lucide-react';

export default function Footer() {
  const [showSuperAdminModal, setShowSuperAdminModal] = useState(false);
  const [storeName, setStoreName] = useState('Mi Comercio');
  const [storeLogo, setStoreLogo] = useState('/assets/logo.svg');

  useEffect(() => {
    api.get('/settings/public')
      .then(res => {
        if (res.data) {
          if (res.data.store_name) setStoreName(res.data.store_name);
          if (res.data.store_logo) setStoreLogo(res.data.store_logo);
        }
      })
      .catch(err => console.warn('Footer settings:', err));

    const handleUpdate = (e) => {
      if (e.detail?.store_name) setStoreName(e.detail.store_name);
      if (e.detail?.store_logo) setStoreLogo(e.detail.store_logo);
    };
    window.addEventListener('store_settings_updated', handleUpdate);
    return () => window.removeEventListener('store_settings_updated', handleUpdate);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Brand info */}
          <div className="flex items-center space-x-3">
            <img 
              src={storeLogo || '/assets/logo.svg'} 
              alt={storeName} 
              className="h-8 w-auto max-w-[120px] object-contain rounded"
              onError={(e) => { e.target.src = '/assets/logo.svg'; }}
            />
            <div>
              <span className="text-white text-sm font-bold block">{storeName}</span>
              <span className="text-slate-400 text-xs block">Sistema de Gestión &amp; Catálogo Web • © {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* RolΦ Studio Producer Attribution & Discreet Superadmin link */}
          <div className="flex items-center space-x-4 text-xs">
            <span className="inline-flex items-center text-slate-400">
              Supervisión técnica por
              <button
                onClick={() => setShowSuperAdminModal(true)}
                className="cursor-pointer transition-opacity hover:opacity-80 focus:outline-none flex items-center ml-2"
                title="Supervisión Técnica RolΦ Studio"
              >
                <img src="/assets/rolphi.jpg" alt="RolΦ Studio" className="h-6 w-auto object-contain rounded" />
              </button>
            </span>
          </div>
        </div>
      </div>

      {showSuperAdminModal && (
        <SuperAdminModal onClose={() => setShowSuperAdminModal(false)} />
      )}
    </footer>
  );
}
