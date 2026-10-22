import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '5492241527357';
  const defaultMessage = '¡Hola ROLΦ! Estoy interesado en el Sistema de Gestión Integral con Catálogo Web. Me gustaría coordinar una demostración personalizada para mi comercio.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip / Speech bubble */}
      {showTooltip && (
        <div className="mb-2 relative bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center space-x-2 max-w-xs animate-fade-in backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <p className="font-medium text-[11px] leading-tight">
            ¿Querés ver una <strong className="text-emerald-400">demo en vivo</strong>? Chateá con nosotros.
          </p>
          <button 
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full transition ml-1"
            title="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-emerald-500/40 transform rotate-45"></div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Contactar a ROLΦ por WhatsApp (2241527357)"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 blur animate-pulse"></span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
      </a>
    </div>
  );
}
