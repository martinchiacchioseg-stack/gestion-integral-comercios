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
  ExternalLink,
  QrCode,
  Search,
  Calculator,
  Building2,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function LandingDemo() {
  const phoneNumber = '5492241527357';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    '¡Hola ROLΦ! Vi la demostración interactiva en la web y me interesa el sistema para mi comercio o consultar por un desarrollo a medida.'
  )}`;

  // Store Sector Switcher (Regalería, Indumentaria, Minimarket, Bazar)
  const [selectedSector, setSelectedSector] = useState('regaleria');

  // Sector Data for high interactivity
  const sectorPresets = {
    regaleria: {
      name: 'Regalería & Deco',
      tagline: 'Control de cientos de artículos chicos, fragancias, bazar y regalables',
      bgImage: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1920&q=80',
      products: [
        { id: 1, name: 'Difusor Aromático Varillas 250ml', code: 'REG-101', price: 12500, cost: 5200, stock: 24, inCart: 1 },
        { id: 2, name: 'Vela de Soja Cuenco Madera Nórdico', code: 'REG-204', price: 9800, cost: 4100, stock: 18, inCart: 1 },
        { id: 3, name: 'Set Matero Cerámica + Bombilla Inox', code: 'REG-315', price: 24500, cost: 11000, stock: 9, inCart: 0 },
        { id: 4, name: 'Taza Cerámica Artesanal con Relieve', code: 'REG-402', price: 7400, cost: 2900, stock: 32, inCart: 0 }
      ]
    },
    indumentaria: {
      name: 'Indumentaria & Calzado',
      tagline: 'Gestión por curva de talles, colores y control de probador',
      bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80',
      products: [
        { id: 1, name: 'Buzo Hoodie Algodón Pesado', code: 'IND-101', price: 42000, cost: 19500, stock: 14, inCart: 1 },
        { id: 2, name: 'Remera Boxy Fit Estampada', code: 'IND-205', price: 18500, cost: 7800, stock: 28, inCart: 1 },
        { id: 3, name: 'Pantalón Cargo Gabardina Premium', code: 'IND-312', price: 49000, cost: 23000, stock: 11, inCart: 0 },
        { id: 4, name: 'Zapatillas Urbanas Cuero Sintético', code: 'CAL-501', price: 65000, cost: 31000, stock: 8, inCart: 0 }
      ]
    },
    bazar: {
      name: 'Bazar & Hogar',
      tagline: 'Rotación rápida de vajilla, organizadores y artículos de cocina',
      bgImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1920&q=80',
      products: [
        { id: 1, name: 'Organizador Giratorio Acrílico 360°', code: 'BAZ-108', price: 16800, cost: 7400, stock: 19, inCart: 1 },
        { id: 2, name: 'Hermético de Vidrio Borosilicato 1L', code: 'BAZ-219', price: 11200, cost: 4800, stock: 22, inCart: 1 },
        { id: 3, name: 'Tabla Corte Bambú con Bandeja', code: 'BAZ-340', price: 21500, cost: 9500, stock: 13, inCart: 0 },
        { id: 4, name: 'Dispensador Jabón Líquido Cerámica', code: 'BAZ-455', price: 8900, cost: 3600, stock: 16, inCart: 0 }
      ]
    }
  };

  // Active Screen in Monitor
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Screen 1: POS state
  const [posProducts, setPosProducts] = useState(sectorPresets.regaleria.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [posPaymentMethod, setPosPaymentMethod] = useState('EFECTIVO');
  const [posSaleSuccess, setPosSaleSuccess] = useState(false);

  // Whenever user changes sector, update products
  const handleSelectSector = (sectorKey) => {
    setSelectedSector(sectorKey);
    setPosProducts(sectorPresets[sectorKey].products);
    setPosSaleSuccess(false);
    setSearchTerm('');
  };

  // Screen 2: Mobile catalog preview state
  const [catalogSelectedProduct, setCatalogSelectedProduct] = useState({
    name: 'Vela de Soja Cuenco Madera Nórdico',
    code: 'REG-204',
    price: 9800,
    option: 'Madera Natural'
  });
  const [catalogSentMessage, setCatalogSentMessage] = useState(false);

  // Screen 3: Supplier purchases state
  const [purchaseReceived, setPurchaseReceived] = useState(false);
  const [stockCount, setStockCount] = useState(24);

  // Screen 4: Cash register audit state
  const [cashCashCount, setCashCashCount] = useState(142500);

  // Screen 5: Metrics period state
  const [metricsPeriod, setMetricsPeriod] = useState('mes');

  // ROI Calculator State
  const [calcDailySales, setCalcDailySales] = useState(25);
  const [calcAverageTicket, setCalcAverageTicket] = useState(14000);

  // Auto-tour timer
  useEffect(() => {
    let interval = null;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveScreenIndex(prev => (prev + 1) % 5);
      }, 5500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const screens = [
    { id: 'pos', name: '1. Mostrador POS', subtitle: 'Cobro de alta velocidad' },
    { id: 'catalog', name: '2. Catálogo Web', subtitle: 'Ventas por WhatsApp' },
    { id: 'supplier', name: '3. Compras & Stock', subtitle: 'Ingreso directo al inventario' },
    { id: 'cash', name: '4. Arqueo de Caja', subtitle: 'Control ciego de turnos' },
    { id: 'metrics', name: '5. Ganancia Real', subtitle: 'Métricas de rentabilidad' }
  ];

  // Helper for POS Cart calculation
  const filteredPosProducts = posProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
    setPosProducts(prev => prev.map(p => ({
      ...p,
      stock: Math.max(0, p.stock - p.inCart),
      inCart: 0
    })));
  };

  const handlePosReset = () => {
    setPosProducts(sectorPresets[selectedSector].products);
    setPosSaleSuccess(false);
  };

  const handleReceivePurchase = () => {
    setPurchaseReceived(true);
    setStockCount(prev => prev + 50);
  };

  const handleResetPurchase = () => {
    setPurchaseReceived(false);
    setStockCount(24);
  };

  // ROI calculations
  const monthlyBillingEst = calcDailySales * calcAverageTicket * 26;
  const hoursSavedEst = Math.round(calcDailySales * 0.08 * 26);
  const recoveredSalesEst = Math.round(monthlyBillingEst * 0.06);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 flex flex-col font-sans selection:bg-slate-700 selection:text-white">
      
      {/* 1. TOP CORPORATE HEADER */}
      <header className="sticky top-0 z-40 bg-[#080d19]/95 backdrop-blur-md border-b border-slate-800/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* ROLPHI Brand */}
          <div className="flex items-center space-x-3.5">
            <img 
              src="/assets/rolphi.jpg" 
              alt="RolΦ Studio" 
              className="h-10 sm:h-12 w-auto object-contain rounded-xl border border-slate-700 shadow-md bg-slate-900"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-black tracking-wider text-white">ROL<span className="text-cyan-400">Φ</span></span>
                <span className="text-[9.5px] font-bold uppercase tracking-widest bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded-full">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                Pequeñas herramientas para <strong className="text-slate-200 font-bold">grandes ideas</strong>
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link
              to="/catalogo"
              target="_blank"
              className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded-lg transition shadow-sm"
            >
              <Store className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Ver Catálogo Demo
            </Link>

            <Link
              to="/login"
              className="hidden md:inline-flex items-center px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded-lg transition shadow-sm"
            >
              Ingreso Clientes
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/80 rounded-lg transition shadow-md shadow-emerald-950/40"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 fill-current" />
              <span>Contactar a ROLΦ</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION CON FOTOS REALISTAS DE FONDO (REGALERÍA / COMERCIO) */}
      <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden border-b border-slate-800/80">
        
        {/* Realistic Workplace Photo Background with Deep Executive Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sectorPresets[selectedSector].bgImage} 
            alt="Local comercial de trabajo real" 
            className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15] scale-105 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/90 via-[#080d19]/95 to-[#070b14] backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/25 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Executive Tag */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-[11px] font-semibold mb-5 backdrop-blur-md shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>SISTEMA DE GESTIÓN INTEGRAL PARA COMERCIOS &amp; CATÁLOGO EN LÍNEA</span>
          </div>

          {/* Controlled Professional Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto">
            El sistema operativo confiable para tu mostrador, ventas por catálogo, proveedores y caja diaria.
          </h1>

          <p className="mt-3.5 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Diseñado especialmente para regalerías, bazares, indumentaria y comercios minoristas. Eliminá faltantes de inventario y agilizá cada ticket con tecnología modular desarrollada por <strong className="text-white">ROLΦ Studio</strong>.
          </p>

          {/* SECTOR SWITCHER (INTERACTIVE) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-slate-400 font-semibold mr-1">Rubro del local:</span>
            {Object.keys(sectorPresets).map(secKey => {
              const active = selectedSector === secKey;
              return (
                <button
                  key={secKey}
                  type="button"
                  onClick={() => handleSelectSector(secKey)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition border ${
                    active 
                      ? 'bg-slate-800 text-white border-cyan-500/80 shadow-md shadow-cyan-950/40' 
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {sectorPresets[secKey].name}
                </button>
              );
            })}
          </div>

          {/* Slogan Badge ROLPHI */}
          <div className="mt-5 inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-xl text-[11px] text-slate-400 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              <strong className="text-slate-200">ROLΦ Studio:</strong> Pequeñas herramientas para <strong className="text-slate-200 font-bold">grandes ideas</strong> • Desarrollamos todo tipo de aplicaciones a medida.
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-950/50 flex items-center justify-center border border-emerald-500/60"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              <span>Solicitar Asesoramiento al 2241-527357</span>
            </a>

            <a
              href="#demoviva"
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-200 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center shadow"
            >
              <Play className="w-3.5 h-3.5 mr-1.5 text-cyan-400 fill-current" />
              <span>Probar Simulador Interactivo</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. SHOWCASE INTERACTIVO: EL MONITOR EN VIVO CON PANTALLAS REALES */}
      <section id="demoviva" className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-800/80">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-[10.5px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-0.5">
              ENTORNO INTERACTIVO EN TIEMPO REAL
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Demostración operativa de funciones clave
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Probá los botones, agregá artículos y cambiá de módulos para experimentar la velocidad de trabajo.
            </p>
          </div>

          {/* Auto play toggle */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold transition border ${
              isAutoPlaying 
                ? 'bg-slate-850 text-white border-cyan-400 shadow-sm' 
                : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
            }`}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 mr-1.5 fill-current text-cyan-400" /> : <Play className="w-3.5 h-3.5 mr-1.5 fill-current text-slate-400" />}
            <span>{isAutoPlaying ? 'Pausar Tour Automático' : 'Reproducir Recorrido Automático'}</span>
          </button>
        </div>

        {/* Screen Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
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
                className={`p-2.5 rounded-xl text-left border transition-all duration-150 ${
                  isCurrent 
                    ? 'bg-slate-850 border-cyan-500 text-white shadow-md' 
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`text-xs font-bold block truncate ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
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
        <div className="bg-[#0a0f1d] border border-slate-800 rounded-2xl shadow-xl overflow-hidden relative">
          
          {/* Top Window Bar */}
          <div className="h-9 bg-[#070b14] border-b border-slate-800 flex items-center justify-between px-4 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-[10.5px] text-slate-400 hidden sm:inline">ROLΦ Studio • Entorno Comercial</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded text-[10px] text-slate-400 hidden sm:block">
              sistema.rolphi.com/modulo/{screens[activeScreenIndex].id}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold">● TERMINAL ACTIVA</span>
          </div>

          {/* SCREEN CONTENT AREA (Tighter padding & controlled fonts) */}
          <div className="p-4 sm:p-6 min-h-[420px] flex flex-col justify-center">

            {/* SCREEN 1: POS MOSTRADOR */}
            {activeScreenIndex === 0 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-800/80 pb-2.5">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-1.5 text-cyan-400" />
                      Punto de Venta de Mostrador ({sectorPresets[selectedSector].name})
                    </h3>
                    <p className="text-[11px] text-slate-400">Modificá cantidades o buscá artículos por nombre/código para liquidar la venta.</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={handlePosReset}
                      className="px-2 py-1 text-[10.5px] bg-slate-850 hover:bg-slate-800 text-slate-300 rounded border border-slate-700 flex items-center transition"
                    >
                      <RotateCcw className="w-3 h-3 mr-1" />
                      Reiniciar
                    </button>
                    <span className="px-2 py-0.5 text-[10.5px] bg-slate-850 text-slate-300 border border-slate-700 rounded font-semibold">
                      Caja #01 Operativa
                    </span>
                  </div>
                </div>

                {/* POS Search Bar */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Filtrar por nombre de artículo o código..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Product list */}
                  <div className="lg:col-span-7 space-y-2">
                    {filteredPosProducts.map(p => (
                      <div key={p.id} className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/90 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-white block">{p.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Cód: {p.code} • Stock: <strong className={p.stock < 10 ? 'text-amber-400' : 'text-slate-300'}>{p.stock} u.</strong>
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-slate-200">${p.price.toLocaleString('es-AR')}</span>
                          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5">
                            <button
                              type="button"
                              onClick={() => handlePosRemove(p.id)}
                              className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white rounded"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="w-5 text-center font-bold text-white text-xs">{p.inCart}</span>
                            <button
                              type="button"
                              onClick={() => handlePosAdd(p.id)}
                              className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white rounded"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredPosProducts.length === 0 && (
                      <div className="p-4 text-center text-xs text-slate-500 bg-slate-900/50 rounded-xl">
                        No se encontraron productos con ese filtro.
                      </div>
                    )}
                  </div>

                  {/* Summary & Checkout */}
                  <div className="lg:col-span-5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <span className="text-[11px] uppercase font-mono text-slate-400 font-bold block pb-1 border-b border-slate-800">
                        Liquidación de Venta
                      </span>

                      {/* Payment buttons */}
                      <div className="grid grid-cols-3 gap-1 text-[10px] font-semibold">
                        {['EFECTIVO', 'QR / TRANSF', 'CTA CTE'].map(m => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setPosPaymentMethod(m)}
                            className={`py-1.5 rounded border transition ${
                              posPaymentMethod === m 
                                ? 'bg-slate-800 text-white border-cyan-500/80 font-bold' 
                                : 'bg-slate-900 text-slate-400 border-slate-800'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>

                      <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                        <span className="text-xs text-slate-400">Total a Cobrar:</span>
                        <span className="text-xl font-extrabold text-emerald-400">${posTotal.toLocaleString('es-AR')}</span>
                      </div>

                      {posSaleSuccess ? (
                        <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/60 rounded-lg text-center space-y-1 animate-fade-in">
                          <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                          <span className="text-xs font-bold text-emerald-200 block">Venta Asentada Correctamente</span>
                          <span className="text-[10px] text-slate-400 block">Stock descontado en base de datos. Comprobante generado.</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={handlePosCheckout}
                          disabled={posTotal === 0}
                          className="w-full py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-600 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition shadow disabled:opacity-40"
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
              <div className="space-y-3.5 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                      <Smartphone className="w-4 h-4 mr-1.5 text-cyan-400" />
                      Catálogo Web Móvil con Pedidos a WhatsApp
                    </h3>
                    <p className="text-[11px] text-slate-400">Tus clientes eligen productos y te llega el pedido detallado sin errores.</p>
                  </div>
                  <Link
                    to="/catalogo"
                    target="_blank"
                    className="px-2.5 py-1 bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-semibold rounded-lg flex items-center transition"
                  >
                    <span>Abrir Catálogo Real</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {/* Smartphone View Mockup */}
                  <div className="max-w-[260px] mx-auto bg-black border-2 border-slate-800 rounded-[28px] p-2.5 shadow-xl space-y-2">
                    <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto"></div>
                    
                    <div className="bg-slate-900 rounded-xl p-2.5 border border-slate-800 space-y-2">
                      <div className="h-28 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold relative overflow-hidden">
                        <ShoppingBag className="w-8 h-8 opacity-40 text-slate-400" />
                        <span className="absolute bottom-1.5 right-1.5 bg-slate-800 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/40">
                          EN STOCK
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-mono block">{catalogSelectedProduct.code}</span>
                        <span className="text-xs font-semibold text-white block">{catalogSelectedProduct.name}</span>
                        <span className="text-xs font-extrabold text-emerald-400">${catalogSelectedProduct.price.toLocaleString('es-AR')}</span>
                      </div>

                      {/* Options */}
                      <div>
                        <span className="text-[9px] text-slate-400 block mb-1">Variante / Opción:</span>
                        <div className="flex gap-1 text-[10px]">
                          {['Opción A', 'Opción B', 'Opción C'].map((op, i) => (
                            <button
                              key={op}
                              type="button"
                              onClick={() => setCatalogSelectedProduct(prev => ({ ...prev, option: op }))}
                              className={`px-1.5 py-0.5 rounded border text-[10px] transition ${
                                catalogSelectedProduct.option === op 
                                  ? 'bg-slate-800 text-white border-cyan-400' 
                                  : 'bg-slate-855 text-slate-400 border-slate-700'
                              }`}
                            >
                              Var #{i+1}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCatalogSentMessage(true)}
                        className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[11px] font-semibold flex items-center justify-center shadow transition"
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Consultar por WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp Message Preview */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
                    <span className="text-[11px] uppercase font-mono text-slate-400 font-bold block">
                      Mensaje directo recibido en tu teléfono
                    </span>
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs text-slate-300 leading-relaxed font-mono">
                      "Hola, quería consultar por <strong className="text-white">"{catalogSelectedProduct.name}"</strong> (Cód: {catalogSelectedProduct.code}) de ${catalogSelectedProduct.price.toLocaleString('es-AR')}. ¿Tienen disponibilidad para entrega?"
                    </div>
                    {catalogSentMessage && (
                      <div className="p-2 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg text-[11px] font-semibold text-center">
                        ✓ El cliente no pierde tiempo buscando y el comercio recibe la consulta lista para cerrar.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: COMPRAS A PROVEEDORES E INGRESO DE STOCK */}
            {activeScreenIndex === 2 && (
              <div className="space-y-3.5 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                      <Truck className="w-4 h-4 mr-1.5 text-cyan-400" />
                      Compras a Proveedores &amp; Valor de la Mercadería
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Cargá el costo de la mercadería y acreditá las cantidades al inventario en 1 solo clic.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetPurchase}
                    className="px-2 py-1 text-[10.5px] bg-slate-850 hover:bg-slate-800 text-slate-300 rounded border border-slate-700 flex items-center transition"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Restablecer
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Purchase order */}
                  <div className="md:col-span-7 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-xs">
                      <div>
                        <span className="font-semibold text-white block">Orden de Compra: #COM-00892</span>
                        <span className="text-[10px] text-slate-400 font-mono">Proveedor: Mayorista Central de Bazar &amp; Deco</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        purchaseReceived 
                          ? 'bg-slate-800 text-emerald-400 border border-emerald-600' 
                          : 'bg-slate-850 text-amber-400 border border-amber-700'
                      }`}>
                        {purchaseReceived ? 'INGRESADO EN STOCK' : 'PENDIENTE DE RECEPCIÓN'}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="bg-slate-850 p-2 rounded-lg border border-slate-700/80 flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-white block">Difusores Aromáticos 250ml</span>
                          <span className="text-[10px] text-slate-400 font-mono">50 unidades • Costo mayorista: $5.200 c/u</span>
                        </div>
                        <span className="font-bold text-slate-200">$260.000</span>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-400">Total de Factura de Compra:</span>
                      <span className="text-sm font-bold text-slate-200">$260.000</span>
                    </div>

                    {!purchaseReceived ? (
                      <button
                        type="button"
                        onClick={handleReceivePurchase}
                        className="w-full py-2 bg-slate-800 hover:bg-slate-750 border border-slate-600 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition"
                      >
                        Confirmar Ingreso al Stock Físico
                      </button>
                    ) : (
                      <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg text-center text-emerald-400 text-xs font-semibold">
                        ✓ Mercadería acreditada. Se sumaron 50 unidades al stock disponible.
                      </div>
                    )}
                  </div>

                  {/* Stock impact widget */}
                  <div className="md:col-span-5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-center text-center space-y-2">
                    <span className="text-[10.5px] uppercase font-mono text-slate-400 font-bold">
                      Control Inmediato de Inventario
                    </span>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block mb-0.5">Stock de "Difusor Aromático"</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight transition-all duration-300">
                        {stockCount} <span className="text-xs text-slate-400 font-sans">u.</span>
                      </span>
                      {purchaseReceived && (
                        <span className="inline-block mt-1 text-[10px] bg-slate-800 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-600">
                          +50 ingresadas recién
                        </span>
                      )}
                    </div>
                    <p className="text-[10.5px] text-slate-400">
                      Evitá cargar artículo por artículo a mano. Todo el pedido impacta en stock al instante.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: ARQUEO DE CAJA DIARIA */}
            {activeScreenIndex === 3 && (
              <div className="space-y-3.5 animate-fade-in">
                <div className="border-b border-slate-800/80 pb-2.5">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                    <Wallet className="w-4 h-4 mr-1.5 text-cyan-400" />
                    Caja Diaria &amp; Rendición de Turnos
                  </h3>
                  <p className="text-[11px] text-slate-400">Auditoría clara de entradas, salidas, retiros y medios de pago.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10.5px]">Efectivo en Cajón:</span>
                    <span className="text-xl font-bold text-white block">${cashCashCount.toLocaleString('es-AR')}</span>
                    <span className="text-[10px] text-emerald-400">● Cuadrado según ventas</span>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10.5px]">Transferencias / QR:</span>
                    <span className="text-xl font-bold text-slate-200 block">$98.600</span>
                    <span className="text-[10px] text-slate-400">14 cobros bancarios</span>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10.5px]">Retiros / Gastos:</span>
                    <span className="text-xl font-bold text-slate-400 block">-$15.000</span>
                    <span className="text-[10px] text-slate-500">Comprobante de flete</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-xs font-bold text-white block">Total Neto Turno Tarde</span>
                    <span className="text-[10px] text-slate-400">Sin diferencias ni faltantes ocultos</span>
                  </div>
                  <span className="text-xl font-extrabold text-emerald-400">${(cashCashCount + 98600 - 15000).toLocaleString('es-AR')}</span>
                </div>
              </div>
            )}

            {/* SCREEN 5: GANANCIA REAL & MÉTRICAS */}
            {activeScreenIndex === 4 && (
              <div className="space-y-3.5 animate-fade-in">
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                      <BarChart3 className="w-4 h-4 mr-1.5 text-cyan-400" />
                      Rentabilidad &amp; Ganancia Neta Real
                    </h3>
                    <p className="text-[11px] text-slate-400">Filtrá por período para conocer el rendimiento comercial neto.</p>
                  </div>
                  <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10.5px] font-semibold">
                    {['hoy', 'semana', 'mes'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setMetricsPeriod(p)}
                        className={`px-2.5 py-1 rounded uppercase transition ${
                          metricsPeriod === p ? 'bg-slate-800 text-white font-bold' : 'text-slate-400'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10.5px]">Ventas Facturadas:</span>
                    <span className="text-lg font-bold text-white block">
                      {metricsPeriod === 'hoy' ? '$185.000' : metricsPeriod === 'semana' ? '$1.420.000' : '$5.850.000'}
                    </span>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10.5px]">Costo de Reposición:</span>
                    <span className="text-lg font-mono text-slate-400 block">
                      {metricsPeriod === 'hoy' ? '-$92.000' : metricsPeriod === 'semana' ? '-$710.000' : '-$2.920.000'}
                    </span>
                  </div>
                  <div className="bg-slate-850 p-3 rounded-xl border border-slate-700 space-y-1">
                    <span className="text-emerald-400 font-bold text-[10.5px]">Ganancia Limpia:</span>
                    <span className="text-lg font-bold text-emerald-400 block">
                      {metricsPeriod === 'hoy' ? '+$93.000' : metricsPeriod === 'semana' ? '+$710.000' : '+$2.930.000'}
                    </span>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-center text-xs text-slate-400">
                  El sistema descuenta automáticamente el costo cargado en cada proveedor para darte números reales.
                </div>
              </div>
            )}

          </div>

          {/* Bottom Control Bar */}
          <div className="h-10 bg-[#070b14] border-t border-slate-800 flex items-center justify-between px-4 text-xs text-slate-400">
            <span>Demostración oficial ROLΦ Studio</span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-300 font-medium">Consultas comerciales: <strong>2241-527357</strong></span>
            </div>
          </div>

        </div>

      </section>

      {/* 4. SECCIÓN INTERACTIVA ADICIONAL: CALCULADORA DE TIEMPO Y GANANCIA */}
      <section className="py-12 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10.5px] font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
              ESTIMACIÓN FINANCIERA
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ¿Cuánto tiempo y dinero recuperás con un sistema ordenado?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Ajustá los valores de tu local para ver la proyección mensual estimada.
            </p>
          </div>

          <div className="bg-[#0a0f1d] border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Sliders */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Ventas promedio por día:</span>
                  <span className="font-bold text-white">{calcDailySales} operaciones/día</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  step="5"
                  value={calcDailySales}
                  onChange={(e) => setCalcDailySales(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Ticket promedio estimado:</span>
                  <span className="font-bold text-white">${calcAverageTicket.toLocaleString('es-AR')}</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="60000" 
                  step="1000"
                  value={calcAverageTicket}
                  onChange={(e) => setCalcAverageTicket(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              <p className="text-[11px] text-slate-500 leading-normal">
                Cálculo basado en 26 días operativos mensuales y reducción de errores de cobranza/stock.
              </p>
            </div>

            {/* Results cards */}
            <div className="md:col-span-6 grid grid-cols-2 gap-3 text-center">
              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                <Clock className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                <span className="text-xl sm:text-2xl font-bold text-white block font-mono">
                  {hoursSavedEst} hs
                </span>
                <span className="text-[10px] text-slate-400">Ahorradas en arqueos y planillas</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                <DollarSign className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="text-xl sm:text-2xl font-bold text-emerald-400 block font-mono">
                  +${recoveredSalesEst.toLocaleString('es-AR')}
                </span>
                <span className="text-[10px] text-slate-400">Recupero est. por ventas no perdidas</span>
              </div>

              <div className="col-span-2 bg-slate-850 border border-slate-700/80 p-3 rounded-xl flex items-center justify-between text-xs px-4">
                <span className="text-slate-300 font-medium">Facturación mensual proyectada:</span>
                <span className="font-bold text-white font-mono text-sm">${monthlyBillingEst.toLocaleString('es-AR')}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. ROLPHI: DESARROLLO DE TODO TIPO DE APLICACIONES A MEDIDA */}
      <section className="py-14 bg-gradient-to-b from-[#070b14] via-slate-900/40 to-[#070b14] border-b border-slate-800/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 text-[11px] font-semibold mb-2.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>INGENIERÍA DE SOFTWARE &amp; DESARROLLO A MEDIDA</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              Desarrollamos todo tipo de aplicaciones a medida
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              En <strong className="text-white font-semibold">ROLΦ Studio</strong> diseñamos y programamos soluciones exclusivas. No nos limitamos a un solo rubro: adaptamos software a los procesos y requerimientos particulares de cada negocio.
            </p>
          </div>

          {/* Grid of Custom Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Smartphone,
                title: 'Aplicaciones Móviles (Android & iOS)',
                desc: 'Apps a medida para clientes, preventistas o logística de entregas vinculadas a tu base de datos.'
              },
              {
                icon: Laptop,
                title: 'Sistemas Web & Plataformas Corporativas',
                desc: 'Portales de autogestión, intranets de sucursales, tableros de control y software administrativo.'
              },
              {
                icon: QrCode,
                title: 'Integración de Cobros Digitales & QR',
                desc: 'Conexión con pasarelas de pago, billeteras virtuales y terminales de cobro.'
              },
              {
                icon: Boxes,
                title: 'Sistemas Multi-Sucursal & Depósitos',
                desc: 'Sincronización en la nube entre locales, transferencias internas y auditoría centralizada.'
              },
              {
                icon: Printer,
                title: 'Integración con Hardware Comercial',
                desc: 'Conexión directa con impresoras térmicas de comandas, lectores ópticos de código de barras y gavetas.'
              },
              {
                icon: Zap,
                title: 'Automatizaciones & Canales WhatsApp',
                desc: 'Mensajería automatizada para confirmación de pedidos, seguimiento de entregas y presupuestos.'
              }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i} 
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-4 sm:p-5 rounded-xl transition shadow"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 mb-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Banner ROLPHI */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center max-w-3xl mx-auto shadow-md">
            <h3 className="text-base font-bold text-white mb-1.5">
              ¿Tenés un proyecto o una necesidad técnica particular?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto mb-4">
              En <strong className="text-slate-100">ROLΦ Studio</strong> aplicamos nuestro principio de <em>"pequeñas herramientas para grandes ideas"</em>. Te asesoramos con seriedad para evaluar la mejor arquitectura técnica.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold rounded-lg border border-slate-600 transition shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 fill-current text-emerald-400" />
              <span>Consultar por un Desarrollo a Medida con ROLΦ</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. RESPALDO Y AUTORÍA DIRECTA */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <img 
            src="/assets/rolphi.jpg" 
            alt="RolΦ Studio" 
            className="w-20 sm:w-24 h-auto object-contain rounded-xl border border-slate-700 bg-slate-950 flex-shrink-0"
          />
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              AUTORÍA DIRECTA &amp; SOPORTE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              ROLΦ Studio • Software con Acompañamiento Profesional
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trato directo con los desarrolladores del sistema. Asistencia técnica, capacitaciones y ampliaciones según los requerimientos de tu negocio.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 justify-center sm:justify-start text-xs text-slate-400 font-mono">
              <span>● WhatsApp: <strong>2241-527357</strong></span>
              <span>● Email: <strong>martinchiacchio.seg@gmail.com</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LLAMADO FINAL */}
      <section className="py-14 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
          Ordená la administración de tu local hoy mismo
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Coordiná una demostración práctica para comprobar cómo se adapta a tus productos y tu dinámica diaria.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-md shadow-emerald-950/40 flex items-center justify-center border border-emerald-500/60"
          >
            <MessageCircle className="w-4 h-4 mr-2 fill-current" />
            <span>Chatear por WhatsApp (2241-527357)</span>
          </a>

          <Link
            to="/catalogo"
            target="_blank"
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-300 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center"
          >
            <Store className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            <span>Ver Catálogo Web de Demostración</span>
          </Link>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="mt-auto bg-[#070b14] py-8 border-t border-slate-800 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center space-x-3">
            <img src="/assets/rolphi.jpg" alt="RolΦ" className="h-7 w-auto rounded border border-slate-800" />
            <div>
              <span className="font-bold text-white block">ROLΦ Studio</span>
              <span className="text-[10px]">Pequeñas herramientas para grandes ideas</span>
            </div>
          </div>

          <div className="space-x-4">
            <Link to="/login" className="hover:text-slate-300 transition">Ingreso al Sistema</Link>
            <Link to="/catalogo" className="hover:text-slate-300 transition">Catálogo Web</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Soporte WhatsApp</a>
          </div>

          <p className="text-[10px]">
            © {new Date().getFullYear()} ROLΦ Studio. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* 9. FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />

    </div>
  );
}
