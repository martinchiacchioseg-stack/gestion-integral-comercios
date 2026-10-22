import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Store, 
  Package, 
  Users, 
  Wallet, 
  BarChart3, 
  FileText, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  Laptop, 
  Zap, 
  ChevronRight, 
  Truck, 
  Printer, 
  Boxes, 
  Code2, 
  Play, 
  Pause, 
  RotateCcw, 
  Plus, 
  Minus, 
  Check, 
  ShoppingBag, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  HelpCircle,
  ExternalLink 
} from 'lucide-react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function LandingDemo() {
  const phoneNumber = '5492241527357';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    '¡Hola ROLΦ! Vi la demostración interactiva en la web y me interesa el sistema para mi comercio o consultar por un desarrollo a medida.'
  )}`;

  // Auto-tour state
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Screen 1: Interactive POS State
  const [posProducts, setPosProducts] = useState([
    { id: 1, name: 'Buzo Oversize Premium', code: 'ART-101', price: 38000, stock: 14, inCart: 1 },
    { id: 2, name: 'Remera Algodón Peinado', code: 'ART-205', price: 16500, stock: 25, inCart: 1 },
    { id: 3, name: 'Gorra Urban Snapback', code: 'ART-312', price: 12000, stock: 8, inCart: 0 }
  ]);
  const [posPaymentMethod, setPosPaymentMethod] = useState('EFECTIVO');
  const [posSaleSuccess, setPosSaleSuccess] = useState(false);

  // Screen 2: Interactive Mobile Catalog State
  const [catalogSelectedProduct, setCatalogSelectedProduct] = useState({
    name: 'Chaqueta Abrigada Urban',
    code: 'ART-901',
    price: 64000,
    size: 'M'
  });
  const [catalogSentMessage, setCatalogSentMessage] = useState(false);

  // Screen 3: Interactive Supplier Purchase State
  const [purchaseReceived, setPurchaseReceived] = useState(false);
  const [stockCount, setStockCount] = useState(15);

  // Screen 4: Interactive Metrics Period State
  const [metricsPeriod, setMetricsPeriod] = useState('mes');

  // Auto-tour timer
  useEffect(() => {
    let interval = null;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveScreenIndex(prev => (prev + 1) % 5);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const screens = [
    { id: 'pos', name: '1. Mostrador POS', subtitle: 'Cobro de alta velocidad' },
    { id: 'catalog', name: '2. Catálogo Web', subtitle: 'Pedidos a WhatsApp' },
    { id: 'supplier', name: '3. Compras & Stock', subtitle: 'Ingreso automático' },
    { id: 'cash', name: '4. Arqueo de Caja', subtitle: 'Cero faltantes' },
    { id: 'metrics', name: '5. Ganancia Real', subtitle: 'Métricas de rentabilidad' }
  ];

  // Helper for POS Cart calculation
  const posCartItems = posProducts.filter(p => p.inCart > 0);
  const posTotal = posCartItems.reduce((acc, p) => acc + p.price * p.inCart, 0);

  const handlePosAdd = (id) => {
    setPosProducts(prev => prev.map(p => p.id === id ? { ...p, inCart: p.inCart + 1 } : p));
    setPosSaleSuccess(false);
  };

  const handlePosRemove = (id) => {
    setPosProducts(prev => prev.map(p => p.id === id ? { ...p, inCart: Math.max(0, p.inCart - 1) } : p));
    setPosSaleSuccess(false);
  };

  const handlePosCheckout = () => {
    setPosSaleSuccess(true);
    // Decrease stock dynamically
    setPosProducts(prev => prev.map(p => ({
      ...p,
      stock: Math.max(0, p.stock - p.inCart),
      inCart: 0
    })));
  };

  const handlePosReset = () => {
    setPosProducts([
      { id: 1, name: 'Buzo Oversize Premium', code: 'ART-101', price: 38000, stock: 14, inCart: 1 },
      { id: 2, name: 'Remera Algodón Peinado', code: 'ART-205', price: 16500, stock: 25, inCart: 1 },
      { id: 3, name: 'Gorra Urban Snapback', code: 'ART-312', price: 12000, stock: 8, inCart: 0 }
    ]);
    setPosSaleSuccess(false);
  };

  const handleReceivePurchase = () => {
    setPurchaseReceived(true);
    setStockCount(prev => prev + 50);
  };

  const handleResetPurchase = () => {
    setPurchaseReceived(false);
    setStockCount(15);
  };

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. TOP CORPORATE HEADER */}
      <header className="sticky top-0 z-40 bg-[#060911]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* ROLPHI Brand */}
          <div className="flex items-center space-x-3.5">
            <img 
              src="/assets/rolphi.jpg" 
              alt="RolΦ Studio" 
              className="h-12 w-auto object-contain rounded-xl border border-cyan-500/40 shadow-lg shadow-cyan-950/60"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black tracking-wider text-white">ROL<span className="text-cyan-400">Φ</span></span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-cyan-950 text-cyan-300 border border-cyan-800/80 px-2 py-0.5 rounded-full">
                  STUDIO
                </span>
              </div>
              <p className="text-[10.5px] text-slate-400 font-medium tracking-tight">
                Pequeñas herramientas para <strong className="text-cyan-400 font-bold">grandes ideas</strong>
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-3">
            <Link
              to="/catalogo"
              target="_blank"
              className="hidden sm:inline-flex items-center px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition shadow"
            >
              <Store className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Ver Catálogo Demo
            </Link>

            <Link
              to="/login"
              className="hidden md:inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-slate-850 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition shadow"
            >
              Ingreso Clientes
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:opacity-95 rounded-xl transition shadow-lg shadow-cyan-500/25"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 fill-current" />
              <span>Contactar a ROLΦ</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION CON EFECTOS MODERNOS */}
      <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(6,182,212,0.18),rgba(255,255,255,0))] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PLATAFORMA COMERCIAL &amp; CATÁLOGO DIGITAL • DESARROLLADO POR ROLΦ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
            El software que acelera tu negocio con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              pantallas vivas en tiempo real.
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sin planillas manuales ni pérdidas de stock. Controlá mostrador, ventas por WhatsApp, compras a proveedores y caja diaria desde una interfaz fluida e intuitiva.
          </p>

          {/* Slogan Badge ROLPHI */}
          <div className="mt-6 inline-flex items-center space-x-2 bg-slate-900/90 border border-cyan-500/30 px-4 py-2 rounded-2xl text-xs text-slate-300 shadow-md">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>
              <strong className="text-white">ROLΦ Studio:</strong> Pequeñas herramientas para <strong className="text-cyan-300 font-bold">grandes ideas</strong> • Desarrollamos todo tipo de aplicaciones a medida.
            </span>
          </div>

          {/* Quick CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-sm font-extrabold rounded-2xl transition shadow-xl shadow-emerald-500/25 flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              <span>Coordinar Demo al 2241-527357</span>
            </a>

            <a
              href="#demoviva"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-850 text-white text-sm font-bold rounded-2xl transition border border-slate-700/80 flex items-center justify-center shadow"
            >
              <Play className="w-4 h-4 mr-2 text-cyan-400 fill-current" />
              <span>Ver Pantallas en Vivo</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. SHOWCASE ULTRA INTERACTIVO: EL MONITOR EN VIVO CON PANTALLAS REALES */}
      <section id="demoviva" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-800/80">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              DEMOSTRACIÓN INTERACTIVA EN VIVO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Tocá y probá el software directamente en pantalla
            </h2>
          </div>

          {/* Auto play toggle */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center px-4 py-2 rounded-xl text-xs font-bold transition shadow ${
              isAutoPlaying 
                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/30' 
                : 'bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-700'
            }`}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 mr-1.5 fill-current" /> : <Play className="w-3.5 h-3.5 mr-1.5 fill-current" />}
            <span>{isAutoPlaying ? 'Pausar Tour Automático' : 'Reproducir Tour Automático'}</span>
          </button>
        </div>

        {/* Screen Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
          {screens.map((scr, idx) => {
            const isCurrent = activeScreenIndex === idx;
            return (
              <button
                key={scr.id}
                type="button"
                onClick={() => {
                  setActiveScreenIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`p-3 rounded-2xl text-left border transition-all duration-200 ${
                  isCurrent 
                    ? 'bg-gradient-to-r from-cyan-950 to-slate-900 border-cyan-400 text-white shadow-lg shadow-cyan-950 scale-[1.02]' 
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`text-xs font-extrabold block truncate ${isCurrent ? 'text-cyan-300' : 'text-slate-200'}`}>
                  {scr.name}
                </span>
                <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                  {scr.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* MOCKUP CONTAINER CON MARCO TIPO APLICACIÓN / LAPTOP */}
        <div className="bg-[#0b101c] border-2 border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative">
          
          {/* Top Window Bar */}
          <div className="h-10 bg-[#080d17] border-b border-slate-800 flex items-center justify-between px-4 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">ROLΦ Studio • Entorno Oficial</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 px-3 py-0.5 rounded-lg text-[10px] text-cyan-400 font-bold hidden sm:block">
              https://app.rolphi.com/sistema/{screens[activeScreenIndex].id}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold">● SISTEMA ONLINE</span>
          </div>

          {/* SCREEN CONTENT AREA */}
          <div className="p-5 sm:p-8 min-h-[440px] flex flex-col justify-center">

            {/* SCREEN 1: POS MOSTRADOR */}
            {activeScreenIndex === 0 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2 text-cyan-400" />
                      Punto de Venta en Mostrador
                    </h3>
                    <p className="text-xs text-slate-400">Agregá o quitá artículos con los botones + y - para ver el cobro en vivo.</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={handlePosReset}
                      className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center transition"
                    >
                      <RotateCcw className="w-3 h-3 mr-1" />
                      Restablecer
                    </button>
                    <span className="px-2.5 py-1 text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-lg font-bold">
                      Caja #01 Lista
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Product list */}
                  <div className="lg:col-span-7 space-y-2.5">
                    {posProducts.map(p => (
                      <div key={p.id} className="bg-slate-900 p-3 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white block">{p.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Cód: {p.code} • Stock actual: <strong className={p.stock < 10 ? 'text-rose-400' : 'text-emerald-400'}>{p.stock} u.</strong>
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-black text-cyan-300">${p.price.toLocaleString('es-AR')}</span>
                          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-0.5">
                            <button
                              type="button"
                              onClick={() => handlePosRemove(p.id)}
                              className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white rounded"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center font-bold text-white text-xs">{p.inCart}</span>
                            <button
                              type="button"
                              onClick={() => handlePosAdd(p.id)}
                              className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white rounded"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary & Checkout */}
                  <div className="lg:col-span-5 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div className="space-y-3">
                      <span className="text-xs uppercase font-mono text-cyan-400 font-bold block pb-1 border-b border-slate-800">
                        Liquidación de Venta
                      </span>

                      {/* Payment buttons */}
                      <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold">
                        {['EFECTIVO', 'QR / TRANSF', 'CTA CTE'].map(m => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setPosPaymentMethod(m)}
                            className={`py-1.5 rounded-lg border transition ${
                              posPaymentMethod === m 
                                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black' 
                                : 'bg-slate-900 text-slate-400 border-slate-800'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>

                      <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                        <span className="text-xs text-slate-400">Total a Cobrar:</span>
                        <span className="text-2xl font-black text-emerald-400">${posTotal.toLocaleString('es-AR')}</span>
                      </div>

                      {posSaleSuccess ? (
                        <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 rounded-xl text-center space-y-1 animate-fade-in">
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                          <span className="text-xs font-bold text-emerald-200 block">¡Venta Registrada Exitosamente!</span>
                          <span className="text-[10px] text-slate-300 block">Stock descontado y ticket #008492 emitido.</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={handlePosCheckout}
                          disabled={posTotal === 0}
                          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/20 disabled:opacity-40"
                        >
                          Confirmar Venta en Mostrador
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 2: CATÁLOGO WEB INTERACTIVO EN CELULAR */}
            {activeScreenIndex === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-cyan-400" />
                      Catálogo Web Móvil con Pedidos a WhatsApp
                    </h3>
                    <p className="text-xs text-slate-400">Así lo ve tu cliente en su teléfono celular. Hacé clic para elegir un talle y simular el pedido.</p>
                  </div>
                  <Link
                    to="/catalogo"
                    target="_blank"
                    className="px-3 py-1.5 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 text-xs font-bold rounded-xl flex items-center transition"
                  >
                    <span>Abrir en Pestaña Nueva</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Smartphone View Mockup */}
                  <div className="max-w-[280px] mx-auto bg-black border-4 border-slate-800 rounded-[36px] p-3 shadow-2xl space-y-3">
                    <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto"></div>
                    
                    <div className="bg-slate-900 rounded-2xl p-3 border border-slate-800 space-y-2">
                      <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs font-bold relative overflow-hidden">
                        <ShoppingBag className="w-10 h-10 opacity-30 text-cyan-400" />
                        <span className="absolute bottom-2 right-2 bg-emerald-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full">
                          DISPONIBLE
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-cyan-400 font-mono font-bold block">{catalogSelectedProduct.code}</span>
                        <span className="text-xs font-bold text-white block">{catalogSelectedProduct.name}</span>
                        <span className="text-sm font-black text-emerald-400">${catalogSelectedProduct.price.toLocaleString('es-AR')}</span>
                      </div>

                      {/* Sizes */}
                      <div>
                        <span className="text-[9px] text-slate-400 block mb-1">Elegí tu talle:</span>
                        <div className="flex gap-1">
                          {['S', 'M', 'L', 'XL'].map(sz => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => setCatalogSelectedProduct(prev => ({ ...prev, size: sz }))}
                              className={`w-7 h-7 rounded-lg text-xs font-bold border transition ${
                                catalogSelectedProduct.size === sz 
                                  ? 'bg-cyan-500 text-slate-950 border-cyan-400' 
                                  : 'bg-slate-800 text-slate-300 border-slate-700'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCatalogSentMessage(true)}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center shadow transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5 mr-1" />
                        Consultar por WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp Message Preview */}
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <span className="text-xs uppercase font-mono text-emerald-400 font-bold block">
                      Mensaje recibido en tu WhatsApp
                    </span>
                    <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-xs text-slate-200 leading-relaxed font-mono">
                      "¡Hola! Quería consultar por el producto <strong className="text-white">"{catalogSelectedProduct.name}"</strong> (Código: {catalogSelectedProduct.code}) en talle <strong className="text-emerald-300">{catalogSelectedProduct.size}</strong> de ${catalogSelectedProduct.price.toLocaleString('es-AR')}. ¿Tienen stock disponible?"
                    </div>
                    {catalogSentMessage && (
                      <div className="p-2.5 bg-emerald-900/40 border border-emerald-600 text-emerald-300 rounded-xl text-xs font-bold text-center">
                        ✓ El cliente no pierde tiempo buscando y vos recibís la venta servida.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: COMPRAS A PROVEEDORES E INGRESO DE STOCK */}
            {activeScreenIndex === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center">
                      <Truck className="w-5 h-5 mr-2 text-cyan-400" />
                      Agenda de Compras &amp; Ingreso Automático de Stock
                    </h3>
                    <p className="text-xs text-slate-400">
                      Cargá el costo de la mercadería y acreditá las cantidades al inventario en 1 solo clic al recibir la entrega.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetPurchase}
                    className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center transition"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Reiniciar Demo
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Purchase order */}
                  <div className="md:col-span-7 bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-xs">
                      <div>
                        <span className="font-bold text-white block">Orden de Compra: #COM-00941</span>
                        <span className="text-[10px] text-cyan-400 font-mono">Proveedor: Distribuidora Central Textil</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        purchaseReceived 
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' 
                          : 'bg-amber-950 text-amber-300 border border-amber-700'
                      }`}>
                        {purchaseReceived ? 'RECIBIDO EN STOCK' : 'PENDIENTE DE ENTREGA'}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="bg-slate-850 p-2.5 rounded-xl border border-slate-700 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-white block">Buzo Oversize Premium</span>
                          <span className="text-[10px] text-slate-400 font-mono">50 unidades compradas • Costo: $18.000 c/u</span>
                        </div>
                        <span className="font-bold text-cyan-300">$900.000</span>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-300">Valor Total de Inversión / Compra:</span>
                      <span className="text-base font-black text-cyan-400">$900.000</span>
                    </div>

                    {!purchaseReceived ? (
                      <button
                        type="button"
                        onClick={handleReceivePurchase}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/20"
                      >
                        Confirmar Recepción de Mercadería
                      </button>
                    ) : (
                      <div className="p-3 bg-emerald-950/70 border border-emerald-500/60 rounded-xl text-center text-emerald-300 text-xs font-bold">
                        ✓ Compra confirmada. Se sumaron 50 unidades al stock automáticamente.
                      </div>
                    )}
                  </div>

                  {/* Stock impact widget */}
                  <div className="md:col-span-5 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center text-center space-y-3">
                    <span className="text-xs uppercase font-mono text-slate-400 font-bold">
                      Impacto Directo en Inventario
                    </span>
                    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                      <span className="text-xs text-slate-400 block mb-1">Stock de "Buzo Oversize"</span>
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight transition-all duration-500">
                        {stockCount} <span className="text-xs text-slate-400 font-sans">unidades</span>
                      </span>
                      {purchaseReceived && (
                        <span className="inline-block mt-2 text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-700 animate-bounce">
                          +50 ingresadas recién
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Sin cargar artículo por artículo a mano. Toda la compra ingresa al inventario en un instante.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: ARQUEO DE CAJA DIARIA */}
            {activeScreenIndex === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-black text-white flex items-center">
                    <Wallet className="w-5 h-5 mr-2 text-cyan-400" />
                    Caja Diaria &amp; Rendición de Turnos
                  </h3>
                  <p className="text-xs text-slate-400">Arqueo ciego para evitar diferencias entre turnos de mañana y tarde.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px]">Efectivo en Cajón:</span>
                    <span className="text-2xl font-black text-white block">$142.300</span>
                    <span className="text-[10px] text-emerald-400">● Cuadrado al centavo</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px]">Transferencias / QR:</span>
                    <span className="text-2xl font-black text-cyan-300 block">$98.600</span>
                    <span className="text-[10px] text-slate-400">14 cobros digitales</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px]">Gastos / Retiros:</span>
                    <span className="text-2xl font-black text-rose-400 block">-$15.000</span>
                    <span className="text-[10px] text-slate-400">Pago flete insumos</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-sm font-bold text-white block">Balance Neto del Turno</span>
                    <span className="text-[10px] text-slate-400">Auditoría con firma de encargado</span>
                  </div>
                  <span className="text-2xl font-black text-emerald-400">$225.900</span>
                </div>
              </div>
            )}

            {/* SCREEN 5: GANANCIA REAL & MÉTRICAS */}
            {activeScreenIndex === 4 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                      Métricas Ejecutivas &amp; Rentabilidad Real
                    </h3>
                    <p className="text-xs text-slate-400">Seleccioná el período para ver cómo cambian los números de tu negocio.</p>
                  </div>
                  <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
                    {['hoy', 'semana', 'mes'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setMetricsPeriod(p)}
                        className={`px-3 py-1 rounded-lg uppercase transition ${
                          metricsPeriod === p ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Ventas Brutas:</span>
                    <span className="text-xl sm:text-2xl font-black text-white block">
                      {metricsPeriod === 'hoy' ? '$185.000' : metricsPeriod === 'semana' ? '$1.420.000' : '$5.850.000'}
                    </span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Costo de Mercadería:</span>
                    <span className="text-xl sm:text-2xl font-mono text-slate-300 block">
                      {metricsPeriod === 'hoy' ? '-$92.000' : metricsPeriod === 'semana' ? '-$710.000' : '-$2.920.000'}
                    </span>
                  </div>
                  <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/40 space-y-1">
                    <span className="text-emerald-300 font-bold">Ganancia Neta Limpia:</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                      {metricsPeriod === 'hoy' ? '+$93.000' : metricsPeriod === 'semana' ? '+$710.000' : '+$2.930.000'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center text-xs text-slate-400">
                  Sabés exactamente cuánta plata ganás todos los días sin esperar al balance de fin de mes.
                </div>
              </div>
            )}

          </div>

          {/* Bottom Control Pill */}
          <div className="h-12 bg-[#080d17] border-t border-slate-800 flex items-center justify-between px-6 text-xs text-slate-400">
            <span>Demostración oficial ROLΦ Studio</span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-cyan-400 font-bold">Llamanos o chateá: 2241-527357</span>
            </div>
          </div>

        </div>

      </section>

      {/* 4. ROLPHI: DESARROLLO DE TODO TIPO DE APLICACIONES A MEDIDA */}
      <section className="py-20 bg-gradient-to-b from-[#060911] via-slate-900/60 to-[#060911] border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold mb-3">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>INGENIERÍA DE SOFTWARE &amp; DESARROLLO A MEDIDA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Desarrollamos todo tipo de aplicaciones a medida
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              En <strong className="text-white font-bold">ROLΦ Studio</strong> diseñamos y programamos soluciones exclusivas. No nos limitamos a un solo rubro: creamos herramientas digitales adaptadas a las ideas y procesos específicos de tu empresa.
            </p>
          </div>

          {/* Grid of Custom Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: 'Aplicaciones Móviles (Android & iOS)',
                desc: 'Apps nativas e híbridas para clientes, repartidores o personal de campo, conectadas a tu base de datos central.'
              },
              {
                icon: Laptop,
                title: 'Sistemas Web & Plataformas a Medida',
                desc: 'Portales de autogestión, intranets corporativas, sistemas de reservas y tableros de control diseñados desde cero.'
              },
              {
                icon: QrCode,
                title: 'Integración con Pasarelas de Pago & QR',
                desc: 'Conexión con Mercado Pago, billeteras virtuales y lectores de tarjetas para cobro sin fricción.'
              },
              {
                icon: Boxes,
                title: 'Sistemas Multi-Sucursal & Logística',
                desc: 'Interconexión de locales físicos, transferencias entre depósitos y seguimiento de stock en tiempo real.'
              },
              {
                icon: Printer,
                title: 'Hardware & Control de Mostrador',
                desc: 'Integración con impresoras térmicas de comandas, lectores láser de código de barras y periféricos.'
              },
              {
                icon: Zap,
                title: 'Automatizaciones & Bots de Comunicación',
                desc: 'Bots de WhatsApp y notificaciones automáticas para confirmación de pedidos, alertas de cobro y presupuestos.'
              }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i} 
                  className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Special Custom Development Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/40 text-center max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-xl font-extrabold text-white mb-2">
              ¿Tenés una idea o proceso que querés sistematizar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6">
              En <strong className="text-cyan-300">ROLΦ Studio</strong> hacemos <em>"pequeñas herramientas para grandes ideas"</em>. Analizamos tu proyecto y te presupuestamos una solución profesional, rápida y con soporte garantizado.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:opacity-95 text-slate-950 text-xs font-black rounded-xl transition shadow-lg shadow-cyan-500/30"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              <span>Cotizar un Desarrollo a Medida con ROLΦ</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. ABOUT ROLPHI STUDIO & GUARANTEE */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <img 
            src="/assets/rolphi.jpg" 
            alt="RolΦ Studio" 
            className="w-24 sm:w-32 h-auto object-contain rounded-2xl border border-cyan-500/30 shadow-xl flex-shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
              AUTORÍA DIRECTA &amp; SUPERVISIÓN TÉCNICA
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ROLΦ Studio • Software con Respaldo Real
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sin intermediarios ni licencias de terceros. Tenés contacto directo con quienes diseñamos y programamos el software para resolver dudas, capacitar a tu personal o incorporar nuevas funciones a medida.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 justify-center sm:justify-start text-xs text-slate-400 font-mono">
              <span>● WhatsApp: <strong>2241-527357</strong></span>
              <span>● Email: <strong>martinchiacchio.seg@gmail.com</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          Llevá tu negocio al estándar de gestión que merece
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Contactanos hoy mismo para coordinar una prueba guiada sin costo ni compromiso en tu computadora o celular.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black rounded-2xl transition shadow-xl shadow-emerald-500/30 flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2 fill-current" />
            <span>Chatear por WhatsApp (2241-527357)</span>
          </a>

          <Link
            to="/catalogo"
            target="_blank"
            className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-850 text-white text-sm font-bold rounded-2xl transition border border-slate-700 flex items-center justify-center"
          >
            <Store className="w-4 h-4 mr-2 text-cyan-400" />
            <span>Ver Vidriera Web de Ejemplo</span>
          </Link>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="mt-auto bg-[#060911] py-10 border-t border-slate-800 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center space-x-3">
            <img src="/assets/rolphi.jpg" alt="RolΦ" className="h-8 w-auto rounded border border-slate-800" />
            <div>
              <span className="font-bold text-white block">ROLΦ Studio</span>
              <span className="text-[10px]">Pequeñas herramientas para grandes ideas</span>
            </div>
          </div>

          <div className="space-x-4">
            <Link to="/login" className="hover:text-cyan-400 transition">Ingreso al Sistema</Link>
            <Link to="/catalogo" className="hover:text-cyan-400 transition">Catálogo Web</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Soporte WhatsApp</a>
          </div>

          <p className="text-[10px]">
            © {new Date().getFullYear()} ROLΦ Studio. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* 8. FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />

    </div>
  );
}
