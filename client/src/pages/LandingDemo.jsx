import React, { useState } from 'react';
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
  ChevronDown,
  ChevronUp,
  X,
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
  Award,
  BookOpen
} from 'lucide-react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function LandingDemo() {
  const phoneNumber = '5492241527357';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    '¡Hola ROLΦ! Estuve viendo en detalle las cualidades del programa de gestión en la web y me interesa para mi comercio o consultar por un desarrollo a medida.'
  )}`;

  // Store Sector Switcher (Regalería, Indumentaria, Bazar)
  const [selectedSector, setSelectedSector] = useState('regaleria');

  const sectorPresets = {
    regaleria: {
      name: 'Regalería & Deco',
      tagline: 'Control de cientos de artículos chicos, fragancias, velas y regalables',
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

  // 9 Modules of the Software - ALL CLOSED BY DEFAULT
  const [activeModuleId, setActiveModuleId] = useState(null);

  const modules = [
    {
      id: 'pos',
      number: '01',
      name: 'Mostrador POS & Ventas',
      subtitle: 'Cobro de alta velocidad',
      color: 'blue',
      badgeClass: 'bg-blue-950 text-blue-300 border-blue-700',
      borderClass: 'border-blue-800 hover:border-blue-500',
      buttonClass: 'bg-blue-600 hover:bg-blue-500 text-white',
      accentColor: 'text-blue-400',
      icon: ShoppingCart,
      qualities: [
        'Búsqueda veloz por código de barras o texto predictivo',
        'Múltiples formas de cobro (Efectivo, QR / Transferencia, Cta Cte)',
        'Asignación obligatoria u optativa de vendedor para comisiones',
        'Emisión automática de ticket / remito no fiscal con logo',
        'Descuento instantáneo de stock físico en mostrador'
      ]
    },
    {
      id: 'stock',
      number: '02',
      name: 'Stock & Control de Inventario',
      subtitle: 'Rentabilidad & Alertas',
      color: 'amber',
      badgeClass: 'bg-amber-950 text-amber-300 border-amber-700',
      borderClass: 'border-amber-800/80 hover:border-amber-500',
      buttonClass: 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold',
      accentColor: 'text-amber-400',
      icon: Package,
      qualities: [
        'Alertas visuales de artículos con stock bajo o agotado',
        'Cálculo exacto de costo, precio de venta y margen bruto',
        'Categorías y subcategorías flexibles (Novedades, Ofertas)',
        'Interruptor para publicar u ocultar en el catálogo web en 1 clic',
        'Impresión de etiquetas con código de barras y precios'
      ]
    },
    {
      id: 'supplier',
      number: '03',
      name: 'Compras a Proveedores',
      subtitle: 'Ingreso directo al inventario',
      color: 'purple',
      badgeClass: 'bg-purple-950 text-purple-300 border-purple-700',
      borderClass: 'border-purple-800/80 hover:border-purple-500',
      buttonClass: 'bg-purple-600 hover:bg-purple-500 text-white',
      accentColor: 'text-purple-400',
      icon: Truck,
      qualities: [
        'Agenda y seguimiento de órdenes de compra mayoristas',
        'Control del costo de reposición y valor total de la inversión',
        'Acreditación masiva al inventario físico en 1 solo clic',
        'Directorio completo de proveedores con contactos y teléfonos',
        'Historial de compras para auditar fluctuación de precios'
      ]
    },
    {
      id: 'employees',
      number: '04',
      name: 'Creación de Empleados & Roles',
      subtitle: 'Vendedores & Comisiones',
      color: 'cyan',
      badgeClass: 'bg-cyan-950 text-cyan-300 border-cyan-700',
      borderClass: 'border-cyan-800/80 hover:border-cyan-500',
      buttonClass: 'bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold',
      accentColor: 'text-cyan-400',
      icon: Users,
      qualities: [
        'Creación ilimitada de empleados con claves de acceso propias',
        'Roles jerárquicos: Vendedor, Encargado de Turno y Administrador',
        'Porcentaje de comisión personalizado por vendedor',
        'Acumulador automático de ventas para liquidación mensual',
        'Botón para liquidar y pagar comisiones directo desde caja'
      ]
    },
    {
      id: 'cash',
      number: '05',
      name: 'Arqueo & Cierre de Caja',
      subtitle: 'Turnos mañana y tarde',
      color: 'emerald',
      badgeClass: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      borderClass: 'border-emerald-800/80 hover:border-emerald-500',
      buttonClass: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      accentColor: 'text-emerald-400',
      icon: Wallet,
      qualities: [
        'Arqueo ciego para evitar diferencias entre turnos de personal',
        'Discriminación de cobros en efectivo, QR, transferencias y tarjetas',
        'Registro de gastos y retiros de caja con comprobante y motivo',
        'Rendición ordenada de turnos de mañana y tarde',
        'Cierre definitivo diario con balance neto y auditoría horaria'
      ]
    },
    {
      id: 'reports',
      number: '06',
      name: 'Informes & Ganancia Real',
      subtitle: 'Rentabilidad neta limpia',
      color: 'indigo',
      badgeClass: 'bg-indigo-950 text-indigo-300 border-indigo-700',
      borderClass: 'border-indigo-800/80 hover:border-indigo-500',
      buttonClass: 'bg-indigo-600 hover:bg-indigo-500 text-white',
      accentColor: 'text-indigo-400',
      icon: BarChart3,
      qualities: [
        'Cálculo de ganancia neta real descontando el costo del proveedor',
        'Ranking de los artículos más vendidos por volumen y rentabilidad',
        'Filtro instantáneo de métricas por día, semana o mes',
        'Historial de ventas por empleado para premiar mejores rendimientos',
        'Informes claros para tomar decisiones comerciales estratégicas'
      ]
    },
    {
      id: 'customers',
      number: '07',
      name: 'Clientes & Cuenta Corriente',
      subtitle: 'Libreta de fiados & pagos',
      color: 'teal',
      badgeClass: 'bg-teal-950 text-teal-300 border-teal-700',
      borderClass: 'border-teal-800/80 hover:border-teal-500',
      buttonClass: 'bg-teal-600 hover:bg-teal-500 text-white',
      accentColor: 'text-teal-400',
      icon: BookOpen,
      qualities: [
        'Ficha individual de clientes con teléfono, dirección y notas',
        'Control estricto de libreta de fiados (cuentas corrientes)',
        'Registro de entregas de dinero a cuenta y saldos pendientes',
        'Envío de estado de cuenta por WhatsApp con 1 solo clic',
        'Historial completo de compras por cliente'
      ]
    },
    {
      id: 'catalog',
      number: '08',
      name: 'Catálogo Web Conectado',
      subtitle: 'Pedidos directos a WhatsApp',
      color: 'rose',
      badgeClass: 'bg-rose-950 text-rose-300 border-rose-700',
      borderClass: 'border-rose-800/80 hover:border-rose-500',
      buttonClass: 'bg-rose-600 hover:bg-rose-500 text-white',
      accentColor: 'text-rose-400',
      icon: Store,
      qualities: [
        'Vidriera digital pública optimizada para teléfonos celulares',
        'Sincronización automática con el inventario del mostrador',
        'Los productos sin stock se ocultan solos de la web',
        'Botón directo para encargar el pedido formateado por WhatsApp',
        'Cero comisiones ni costos extra por transacciones online'
      ]
    },
    {
      id: 'admin',
      number: '09',
      name: 'SuperAdmin & Identidad',
      subtitle: 'Tu logo y nombre de tienda',
      color: 'slate',
      badgeClass: 'bg-slate-800 text-slate-300 border-slate-600',
      borderClass: 'border-slate-700 hover:border-slate-400',
      buttonClass: 'bg-slate-700 hover:bg-slate-600 text-white',
      accentColor: 'text-slate-300',
      icon: Settings,
      qualities: [
        'Carga directa del archivo de logotipo de tu negocio (PNG/JPG)',
        'Nombre comercial y eslogan editables en toda la plataforma',
        'Panel maestro de seguridad y gestión de altas jerarquías',
        'Sin ataduras a marcas externas ni plataformas ajenas',
        'Respaldos de base de datos seguros en la nube'
      ]
    }
  ];

  // Screen 1: POS state
  const [posProducts, setPosProducts] = useState(sectorPresets.regaleria.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [posPaymentMethod, setPosPaymentMethod] = useState('EFECTIVO');
  const [posSeller, setPosSeller] = useState('Romina');
  const [posSaleSuccess, setPosSaleSuccess] = useState(false);

  // Screen 2: Stock state
  const [stockList, setStockList] = useState(sectorPresets.regaleria.products);

  // Screen 3: Supplier purchases state
  const [purchaseReceived, setPurchaseReceived] = useState(false);
  const [stockCount, setStockCount] = useState(24);

  // Screen 4: Employees state
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Romina V.', role: 'VENDEDOR', commission: 4, salesCount: 18, accumulatedCommission: 24600 },
    { id: 2, name: 'Matías L.', role: 'VENDEDOR', commission: 5, salesCount: 14, accumulatedCommission: 31200 },
    { id: 3, name: 'Laura G.', role: 'ENCARGADO', commission: 2, salesCount: 9, accumulatedCommission: 14800 }
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeRole, setNewEmployeeRole] = useState('VENDEDOR');

  // Screen 5: Cash register state
  const [cashBalance, setCashBalance] = useState(142500);
  const [cashWithdrawn, setCashWithdrawn] = useState(15000);
  const [cashCommissionPaid, setCashCommissionPaid] = useState(false);

  // Screen 6: Metrics state
  const [metricsPeriod, setMetricsPeriod] = useState('mes');

  // Screen 7: Customers state
  const [customers, setCustomers] = useState([
    { id: 1, name: 'García, Martín', phone: '2241-554433', balance: 18500, lastPayment: '18/10/2026' },
    { id: 2, name: 'López, Andrea', phone: '2241-667788', balance: 0, lastPayment: '20/10/2026' },
    { id: 3, name: 'Pérez, Claudia', phone: '2241-991122', balance: 9400, lastPayment: '15/10/2026' }
  ]);

  // Screen 8: Mobile catalog state
  const [catalogSelectedProduct, setCatalogSelectedProduct] = useState({
    name: 'Vela de Soja Cuenco Madera Nórdico',
    code: 'REG-204',
    price: 9800,
    option: 'Madera Natural'
  });
  const [catalogSentMessage, setCatalogSentMessage] = useState(false);

  // Screen 9: SuperAdmin state
  const [storeIdentity, setStoreIdentity] = useState({
    name: 'Mi Comercio Integral',
    slogan: 'Ventas minoristas & Catálogo web'
  });

  // ROI Calculator State
  const [calcDailySales, setCalcDailySales] = useState(25);
  const [calcAverageTicket, setCalcAverageTicket] = useState(14000);

  const handleSelectSector = (sectorKey) => {
    setSelectedSector(sectorKey);
    setPosProducts(sectorPresets[sectorKey].products);
    setStockList(sectorPresets[sectorKey].products);
    setPosSaleSuccess(false);
    setSearchTerm('');
  };

  const handleToggleModule = (modId) => {
    if (activeModuleId === modId) {
      setActiveModuleId(null); // Close if already open
    } else {
      setActiveModuleId(modId); // Open selected module
      // Smooth scroll to the monitor container
      setTimeout(() => {
        const el = document.getElementById('visor-modulo');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

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

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!newEmployeeName.trim()) return;
    const newEmp = {
      id: Date.now(),
      name: newEmployeeName.trim(),
      role: newEmployeeRole,
      commission: newEmployeeRole === 'VENDEDOR' ? 4 : 2,
      salesCount: 0,
      accumulatedCommission: 0
    };
    setEmployees(prev => [...prev, newEmp]);
    setSelectedEmployee(newEmp);
    setNewEmployeeName('');
  };

  const handlePayCommission = () => {
    setCashCommissionPaid(true);
    setCashBalance(prev => prev - selectedEmployee.accumulatedCommission);
  };

  const handleRestockItem = (id) => {
    setStockList(prev => prev.map(item => item.id === id ? { ...item, stock: item.stock + 10 } : item));
  };

  // ROI calculations
  const monthlyBillingEst = calcDailySales * calcAverageTicket * 26;
  const hoursSavedEst = Math.round(calcDailySales * 0.08 * 26);
  const recoveredSalesEst = Math.round(monthlyBillingEst * 0.06);

  const activeModObj = modules.find(m => m.id === activeModuleId);

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
            <a
              href="/Dossier-Comercial-ROLPHI-Gestion-Integral.pdf"
              download="Dossier-Comercial-ROLPHI-Gestion-Integral.pdf"
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-cyan-500/40 rounded-lg transition shadow-sm"
              title="Descargar Dossier Comercial en PDF"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              <span>Dossier PDF</span>
            </a>

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

      {/* 2. HERO PRINCIPAL: CENTRADO EN EL PROGRAMA DE GESTIÓN */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 overflow-hidden border-b border-slate-800/80">
        
        {/* Realistic Workplace Photo Background with Executive Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sectorPresets[selectedSector].bgImage} 
            alt="Local comercial de trabajo real" 
            className="w-full h-full object-cover object-center filter brightness-[0.20] contrast-[1.15] scale-105 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/90 via-[#080d19]/95 to-[#070b14] backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/25 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-[11px] font-semibold mb-4 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>SISTEMA DE GESTIÓN COMERCIAL INTEGRAL • ARQUITECTURA MODULAR</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto">
            El programa de gestión integral para controlar el 100% de tu comercio.
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Revisá a continuación todas las cualidades del sistema. Los módulos se encuentran cerrados por defecto; podés abrir opcionalmente el que desees para probar su demostración interactiva en vivo.
          </p>

          {/* Sector Switcher */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
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
                      ? 'bg-slate-800 text-white border-cyan-500/80 shadow-md' 
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {sectorPresets[secKey].name}
                </button>
              );
            })}
          </div>

          {/* Quick Dossier & CTA Action */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/Dossier-Comercial-ROLPHI-Gestion-Integral.pdf"
              download="Dossier-Comercial-ROLPHI-Gestion-Integral.pdf"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-slate-900 to-slate-850 hover:bg-slate-800 text-white text-xs font-bold rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-950/40 transition hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Descargar Dossier Comercial Completo (PDF)</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. PRIMERO: TODAS LAS CUALIDADES Y MÓDULOS (NINGUNO ABIERTO POR DEFECTO, APERTURA OPCIONAL) */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-800/80">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10.5px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
            ESTRUCTURA GENERAL DEL SISTEMA
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white">
            Cualidades y Módulos del Programa de Gestión
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
            Cada módulo está diferenciado por su color y detalla todas sus funciones. Hacé clic en <strong>"Abrir demostración interactiva"</strong> para desplegar la pantalla en vivo de cualquiera de ellos.
          </p>
        </div>

        {/* CONTENEDOR VISOR INTERACTIVO EN VIVO (SOLO SE MUESTRA SI HAY UN MÓDULO ABIERTO) */}
        {activeModuleId && activeModObj && (
          <div id="visor-modulo" className="mb-10 animate-fade-in">
            <div className="bg-[#0a0f1d] border-2 border-slate-700 rounded-2xl shadow-2xl overflow-hidden relative">
              
              {/* Top Window Bar with Close Button */}
              <div className="h-10 bg-[#070b14] border-b border-slate-800 flex items-center justify-between px-4 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-[11px] text-white font-bold hidden sm:inline">
                    Demostración Abierta: Módulo {activeModObj.number} • {activeModObj.name}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded border ${activeModObj.badgeClass}`}>
                    ● VISTA INTERACTIVA EN VIVO
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModuleId(null)}
                    className="p-1 rounded bg-slate-850 hover:bg-slate-750 text-slate-400 hover:text-white border border-slate-700 flex items-center text-[10px] font-sans font-bold transition"
                  >
                    <X className="w-3.5 h-3.5 mr-1" />
                    <span>Cerrar Módulo</span>
                  </button>
                </div>
              </div>

              {/* LIVE MODULE DEMONSTRATION CONTENT */}
              <div className="p-4 sm:p-6 min-h-[420px] flex flex-col justify-center">

                {/* MOD 1: POS MOSTRADOR */}
                {activeModuleId === 'pos' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <ShoppingCart className="w-4 h-4 mr-1.5 text-blue-400" />
                          Punto de Venta de Alta Velocidad (Mostrador)
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Buscá por nombre o código de barras, asigná al vendedor para su comisión y emití el ticket en segundos.
                        </p>
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
                        <span className="px-2 py-0.5 text-[10.5px] bg-blue-950 text-blue-300 border border-blue-700 rounded font-semibold">
                          Caja #01 Operativa
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                      <div className="sm:col-span-8 relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Buscar por artículo o código de barras..."
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="sm:col-span-4 flex items-center bg-slate-900 border border-slate-800 rounded-lg px-2 text-xs">
                        <span className="text-[10px] text-slate-400 mr-2 font-mono">Vendedor:</span>
                        <select
                          value={posSeller}
                          onChange={(e) => setPosSeller(e.target.value)}
                          className="bg-transparent text-white text-xs focus:outline-none w-full font-semibold"
                        >
                          <option value="Romina" className="bg-slate-900 text-white">Romina V. (Comisión 4%)</option>
                          <option value="Matías" className="bg-slate-900 text-white">Matías L. (Comisión 5%)</option>
                          <option value="Laura" className="bg-slate-900 text-white">Laura G. (Encargada 2%)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                      <div className="lg:col-span-7 space-y-2">
                        {filteredPosProducts.map(p => (
                          <div key={p.id} className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/90 flex items-center justify-between text-xs">
                            <div>
                              <span className="font-semibold text-white block">{p.name}</span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                Cód: {p.code} • Stock disponible: <strong className={p.stock < 10 ? 'text-amber-400' : 'text-slate-300'}>{p.stock} u.</strong>
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
                      </div>

                      <div className="lg:col-span-5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div className="space-y-2.5">
                          <span className="text-[11px] uppercase font-mono text-blue-400 font-bold block pb-1 border-b border-slate-800">
                            Liquidación de Venta
                          </span>
                          <div className="grid grid-cols-3 gap-1 text-[10px] font-semibold">
                            {['EFECTIVO', 'QR / TRANSF', 'CTA CTE'].map(m => (
                              <button
                                key={m}
                                type="button"
                                onClick={() => setPosPaymentMethod(m)}
                                className={`py-1.5 rounded border transition ${
                                  posPaymentMethod === m 
                                    ? 'bg-blue-600 text-white border-blue-500 font-bold' 
                                    : 'bg-slate-900 text-slate-400 border-slate-800'
                                }`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                            <span className="text-xs text-slate-400">Total a Cobrar:</span>
                            <span className="text-xl font-extrabold text-blue-400">${posTotal.toLocaleString('es-AR')}</span>
                          </div>
                          {posSaleSuccess ? (
                            <div className="p-2.5 bg-blue-950/80 border border-blue-500/60 rounded-lg text-center space-y-1 animate-fade-in">
                              <Check className="w-4 h-4 text-blue-400 mx-auto" />
                              <span className="text-xs font-bold text-blue-200 block">Venta Asentada Correctamente</span>
                              <span className="text-[10px] text-slate-400 block">Stock descontado y comisión asignada a {posSeller}.</span>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={handlePosCheckout}
                              disabled={posTotal === 0}
                              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 border border-blue-400 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition shadow disabled:opacity-40"
                            >
                              Confirmar Cobro en Mostrador
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MOD 2: STOCK */}
                {activeModuleId === 'stock' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <Package className="w-4 h-4 mr-1.5 text-amber-400" />
                          Inventario Físico, Costo de Reposición &amp; Margen
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Controlá el margen de cada artículo, alertas de stock mínimo y visibilidad web.
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[10.5px] bg-amber-950 text-amber-300 border border-amber-700 rounded font-semibold">
                        {stockList.length} Artículos Registrados
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-800 text-[10px] font-mono uppercase text-slate-400">
                            <th className="pb-2">Artículo</th>
                            <th className="pb-2">Costo Proveedor</th>
                            <th className="pb-2">PVP Venta</th>
                            <th className="pb-2">Margen</th>
                            <th className="pb-2">Stock Actual</th>
                            <th className="pb-2 text-right">Acción</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {stockList.map(item => {
                            const marginPercent = Math.round(((item.price - item.cost) / item.price) * 100);
                            return (
                              <tr key={item.id} className="hover:bg-slate-900/60 transition">
                                <td className="py-2.5">
                                  <span className="font-semibold text-white block">{item.name}</span>
                                  <span className="text-[10px] text-amber-400/80 font-mono">{item.code}</span>
                                </td>
                                <td className="py-2.5 font-mono text-slate-300">${item.cost.toLocaleString('es-AR')}</td>
                                <td className="py-2.5 font-mono font-bold text-white">${item.price.toLocaleString('es-AR')}</td>
                                <td className="py-2.5">
                                  <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                                    +{marginPercent}%
                                  </span>
                                </td>
                                <td className="py-2.5">
                                  <span className={`px-2 py-0.5 rounded text-[10.5px] font-bold font-mono ${
                                    item.stock < 12 
                                      ? 'bg-amber-950 text-amber-300 border border-amber-700' 
                                      : 'bg-slate-900 text-slate-300 border border-slate-700'
                                  }`}>
                                    {item.stock} u.
                                  </span>
                                </td>
                                <td className="py-2.5 text-right">
                                  <button
                                    type="button"
                                    onClick={() => handleRestockItem(item.id)}
                                    className="px-2 py-1 bg-amber-900/40 hover:bg-amber-800/60 text-amber-300 border border-amber-700/60 text-[10px] font-bold rounded transition"
                                  >
                                    +10 u. Stock
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* MOD 3: COMPRAS A PROVEEDORES */}
                {activeModuleId === 'supplier' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <Truck className="w-4 h-4 mr-1.5 text-purple-400" />
                          Compras a Proveedores &amp; Acreditación de Stock
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Agendá pedidos mayoristas, calculá la inversión y acreditá la mercadería en 1 clic.
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
                      <div className="md:col-span-7 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-xs">
                          <div>
                            <span className="font-semibold text-white block">Orden de Compra: #COM-00912</span>
                            <span className="text-[10px] text-purple-300 font-mono">Proveedor: Mayorista Central Textil &amp; Deco</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            purchaseReceived ? 'bg-purple-950 text-purple-300 border border-purple-600' : 'bg-amber-950 text-amber-400 border border-amber-700'
                          }`}>
                            {purchaseReceived ? 'RECIBIDO EN STOCK' : 'PENDIENTE DE ENTREGA'}
                          </span>
                        </div>
                        <div className="bg-slate-850 p-2 rounded-lg border border-slate-700/80 flex justify-between items-center text-xs">
                          <div>
                            <span className="font-semibold text-white block">Mercadería Mayorista Surtida</span>
                            <span className="text-[10px] text-slate-400 font-mono">50 unidades compradas • Costo pactado: $5.200 c/u</span>
                          </div>
                          <span className="font-bold text-slate-200">$260.000</span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-400">Total de Factura a Pagar:</span>
                          <span className="text-sm font-bold text-purple-300">$260.000</span>
                        </div>
                        {!purchaseReceived ? (
                          <button
                            type="button"
                            onClick={handleReceivePurchase}
                            className="w-full py-2 bg-purple-700 hover:bg-purple-600 border border-purple-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition"
                          >
                            Confirmar Recepción e Ingresar al Stock Físico
                          </button>
                        ) : (
                          <div className="p-2 bg-purple-950/80 border border-purple-600 rounded-lg text-center text-purple-200 text-xs font-semibold">
                            ✓ Compra asentada. Se sumaron 50 unidades al stock disponible.
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-center text-center space-y-2">
                        <span className="text-[10.5px] uppercase font-mono text-purple-400 font-bold">
                          Impacto Automático en Inventario
                        </span>
                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                          <span className="text-xs text-slate-400 block mb-0.5">Stock de "Artículos Recibidos"</span>
                          <span className="text-3xl font-extrabold text-white font-mono">{stockCount} u.</span>
                          {purchaseReceived && (
                            <span className="inline-block mt-1 text-[10px] bg-purple-950 text-purple-300 font-bold px-2 py-0.5 rounded border border-purple-700">
                              +50 unidades acreditadas recién
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MOD 4: EMPLEADOS & ROLES */}
                {activeModuleId === 'employees' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <Users className="w-4 h-4 mr-1.5 text-cyan-400" />
                          Creación de Empleados, Roles &amp; Liquidación de Comisiones
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Asigná claves individuales, roles de acceso y comisiones porcentuales automáticas.
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[10.5px] bg-cyan-950 text-cyan-300 border border-cyan-700 rounded font-semibold">
                        {employees.length} Empleados Activos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-7 space-y-2">
                        {employees.map(emp => {
                          const isSel = selectedEmployee.id === emp.id;
                          return (
                            <div
                              key={emp.id}
                              onClick={() => { setSelectedEmployee(emp); setCashCommissionPaid(false); }}
                              className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                                isSel ? 'bg-cyan-950/40 border-cyan-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <div>
                                <span className="font-bold text-xs block">{emp.name}</span>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  Rol: <strong className="text-cyan-300">{emp.role}</strong> • Comisión: {emp.commission}%
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-bold text-emerald-400 block font-mono">
                                  ${emp.accumulatedCommission.toLocaleString('es-AR')}
                                </span>
                                <span className="text-[9.5px] text-slate-400">{emp.salesCount} ventas liquidadas</span>
                              </div>
                            </div>
                          );
                        })}

                        <form onSubmit={handleAddEmployee} className="pt-2 flex gap-2">
                          <input
                            type="text"
                            value={newEmployeeName}
                            onChange={(e) => setNewEmployeeName(e.target.value)}
                            placeholder="Nombre de nuevo empleado..."
                            className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                          />
                          <select
                            value={newEmployeeRole}
                            onChange={(e) => setNewEmployeeRole(e.target.value)}
                            className="bg-slate-900 border border-slate-800 rounded-lg px-2 text-xs text-slate-300 focus:outline-none"
                          >
                            <option value="VENDEDOR">Vendedor</option>
                            <option value="ENCARGADO">Encargado</option>
                            <option value="ADMIN">Administrador</option>
                          </select>
                          <button
                            type="submit"
                            className="px-3 py-1.5 bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-bold rounded-lg transition"
                          >
                            + Crear
                          </button>
                        </form>
                      </div>

                      <div className="md:col-span-5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
                        <div className="space-y-2 text-xs">
                          <span className="text-[11px] uppercase font-mono text-cyan-400 font-bold block border-b border-slate-800 pb-1">
                            Ficha de Rendimiento Individual
                          </span>
                          <div className="flex justify-between"><span className="text-slate-400">Personal:</span> <strong className="text-white">{selectedEmployee.name}</strong></div>
                          <div className="flex justify-between"><span className="text-slate-400">Jerarquía:</span> <strong className="text-cyan-300 font-mono">{selectedEmployee.role}</strong></div>
                          <div className="flex justify-between"><span className="text-slate-400">Comisión pactada:</span> <strong className="text-slate-200 font-mono">{selectedEmployee.commission}% por venta</strong></div>
                          <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                            <span className="text-slate-300">Comisión Acumulada:</span>
                            <span className="text-lg font-bold text-emerald-400 font-mono">${selectedEmployee.accumulatedCommission.toLocaleString('es-AR')}</span>
                          </div>
                        </div>

                        {!cashCommissionPaid ? (
                          <button
                            type="button"
                            onClick={handlePayCommission}
                            className="w-full py-2 bg-emerald-700 hover:bg-emerald-600 border border-emerald-500 text-white font-bold rounded-lg text-xs uppercase transition shadow"
                          >
                            Pagar Comisión desde Caja
                          </button>
                        ) : (
                          <div className="p-2 bg-emerald-950/80 border border-emerald-500/60 rounded-lg text-center text-emerald-300 text-xs font-semibold">
                            ✓ Comisión liquidada y descontada de la caja en turno.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* MOD 5: CAJA Y TURNOS */}
                {activeModuleId === 'cash' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <Wallet className="w-4 h-4 mr-1.5 text-emerald-400" />
                          Arqueo de Turnos &amp; Cierre de Caja Ciego
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Control de efectivo, transferencias, comprobantes y retiros de gastos.
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[10.5px] bg-emerald-950 text-emerald-300 border border-emerald-700 rounded font-semibold">
                        Turno Tarde Activo
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-slate-400 text-[10.5px]">Efectivo Físico en Cajón:</span>
                        <span className="text-xl font-bold text-white block">${cashBalance.toLocaleString('es-AR')}</span>
                        <span className="text-[10px] text-emerald-400">● Cuadrado al centavo con tickets</span>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-slate-400 text-[10.5px]">Cobros Virtuales / QR:</span>
                        <span className="text-xl font-bold text-slate-200 block">$98.600</span>
                        <span className="text-[10px] text-slate-400">14 transferencias verificadas</span>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-slate-400 text-[10.5px]">Gastos / Retiros Asentados:</span>
                        <span className="text-xl font-bold text-rose-400 block">-${cashWithdrawn.toLocaleString('es-AR')}</span>
                        <span className="text-[10px] text-slate-400">Pago flete y bolsas con comprobante</span>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                      <div>
                        <span className="text-xs font-bold text-white block">Balance Neto Consolidado del Turno</span>
                        <span className="text-[10px] text-slate-400">Auditoría con firma del encargado y registro horario</span>
                      </div>
                      <span className="text-xl font-extrabold text-emerald-400">
                        ${(cashBalance + 98600 - cashWithdrawn).toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>
                )}

                {/* MOD 6: INFORMES */}
                {activeModuleId === 'reports' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <BarChart3 className="w-4 h-4 mr-1.5 text-indigo-400" />
                          Métricas Financieras &amp; Ganancia Real
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Ganancia neta limpia descontando el costo del proveedor.
                        </p>
                      </div>
                      <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10.5px] font-semibold">
                        {['hoy', 'semana', 'mes'].map(p => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setMetricsPeriod(p)}
                            className={`px-2.5 py-1 rounded uppercase transition ${
                              metricsPeriod === p ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-slate-400 text-[10.5px]">Ventas Totales Brutas:</span>
                        <span className="text-lg font-bold text-white block">
                          {metricsPeriod === 'hoy' ? '$185.000' : metricsPeriod === 'semana' ? '$1.420.000' : '$5.850.000'}
                        </span>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-slate-400 text-[10.5px]">Costo Mayorista Reposición:</span>
                        <span className="text-lg font-mono text-slate-400 block">
                          {metricsPeriod === 'hoy' ? '-$92.000' : metricsPeriod === 'semana' ? '-$710.000' : '-$2.920.000'}
                        </span>
                      </div>
                      <div className="bg-indigo-950/70 p-3 rounded-xl border border-indigo-700/80 space-y-1">
                        <span className="text-indigo-300 font-bold text-[10.5px]">Ganancia Neta Limpia:</span>
                        <span className="text-lg font-bold text-indigo-300 block">
                          {metricsPeriod === 'hoy' ? '+$93.000' : metricsPeriod === 'semana' ? '+$710.000' : '+$2.930.000'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* MOD 7: CLIENTES */}
                {activeModuleId === 'customers' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <BookOpen className="w-4 h-4 mr-1.5 text-teal-400" />
                          Directorio de Clientes &amp; Libreta de Fiados
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Control de cuenta corriente y saldos pendientes sin cuadernos en papel.
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[10.5px] bg-teal-950 text-teal-300 border border-teal-700 rounded font-semibold">
                        {customers.length} Clientes con Ficha
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {customers.map(c => (
                        <div key={c.id} className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-bold text-white block">{c.name}</span>
                              <span className="text-[10px] text-slate-400 font-mono">Tel: {c.phone}</span>
                            </div>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              c.balance > 0 ? 'bg-amber-950 text-amber-300 border border-amber-700' : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                            }`}>
                              {c.balance > 0 ? 'CON SALDO' : 'AL DÍA'}
                            </span>
                          </div>
                          <div className="pt-1 border-t border-slate-800 flex justify-between items-baseline">
                            <span className="text-slate-400 text-[10.5px]">Saldo Deudor:</span>
                            <span className={`text-sm font-bold font-mono ${c.balance > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                              ${c.balance.toLocaleString('es-AR')}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MOD 8: CATÁLOGO WEB */}
                {activeModuleId === 'catalog' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <Store className="w-4 h-4 mr-1.5 text-rose-400" />
                          Catálogo Web Móvil con Pedidos a WhatsApp
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Tus clientes eligen productos y te llega el pedido detallado sin errores.
                        </p>
                      </div>
                      <Link
                        to="/catalogo"
                        target="_blank"
                        className="px-2.5 py-1 bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 text-[11px] font-semibold rounded-lg flex items-center transition"
                      >
                        <span>Abrir Catálogo Web Real</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      <div className="max-w-[260px] mx-auto bg-black border-2 border-slate-800 rounded-[28px] p-2.5 shadow-xl space-y-2">
                        <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto"></div>
                        <div className="bg-slate-900 rounded-xl p-2.5 border border-slate-800 space-y-2">
                          <div className="h-28 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold relative overflow-hidden">
                            <ShoppingBag className="w-8 h-8 opacity-40 text-rose-400" />
                            <span className="absolute bottom-1.5 right-1.5 bg-rose-950 text-rose-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-rose-700">
                              EN STOCK
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 font-mono block">{catalogSelectedProduct.code}</span>
                            <span className="text-xs font-semibold text-white block">{catalogSelectedProduct.name}</span>
                            <span className="text-xs font-extrabold text-rose-400">${catalogSelectedProduct.price.toLocaleString('es-AR')}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCatalogSentMessage(true)}
                            className="w-full py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[11px] font-semibold flex items-center justify-center shadow transition"
                          >
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Enviar Pedido a WhatsApp
                          </button>
                        </div>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
                        <span className="text-[11px] uppercase font-mono text-rose-400 font-bold block">
                          Mensaje recibido listo para preparar
                        </span>
                        <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs text-slate-300 leading-relaxed font-mono">
                          "¡Hola! Quiero encargar <strong className="text-white">"{catalogSelectedProduct.name}"</strong> (Cód: {catalogSelectedProduct.code}) de ${catalogSelectedProduct.price.toLocaleString('es-AR')}. ¿Cómo coordinamos el pago y retiro?"
                        </div>
                        {catalogSentMessage && (
                          <div className="p-2 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg text-[11px] font-semibold text-center">
                            ✓ Venta cerrada sin intermediarios ni comisiones por operación.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* MOD 9: SUPERADMIN */}
                {activeModuleId === 'admin' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white flex items-center">
                          <Settings className="w-4 h-4 mr-1.5 text-slate-400" />
                          Personalización de Identidad de Marca &amp; Logo
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Cargá el logo de tu comercio y cambiá el nombre de fantasía en toda la plataforma.
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[10.5px] bg-slate-800 text-slate-300 border border-slate-600 rounded font-semibold">
                        Acceso Jerárquico Seguro
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                        <div>
                          <label className="text-slate-400 text-[10.5px] block mb-1">Nombre Comercial de la Tienda:</label>
                          <input
                            type="text"
                            value={storeIdentity.name}
                            onChange={(e) => setStoreIdentity(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-slate-500"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-[10.5px] block mb-1">Eslogan o Subtítulo del Comercio:</label>
                          <input
                            type="text"
                            value={storeIdentity.slogan}
                            onChange={(e) => setStoreIdentity(prev => ({ ...prev, slogan: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-slate-500"
                          />
                        </div>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-center items-center text-center space-y-2">
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-slate-400 font-bold text-xl shadow">
                          {storeIdentity.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white block">{storeIdentity.name}</span>
                          <span className="text-xs text-slate-400">{storeIdentity.slogan}</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold">
                          ● VISTA PREVIA EN TIEMPO REAL
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Visor Footer */}
              <div className="h-10 bg-[#070b14] border-t border-slate-800 flex items-center justify-between px-4 text-xs text-slate-400">
                <span>Demostración oficial ROLΦ Studio</span>
                <button
                  type="button"
                  onClick={() => setActiveModuleId(null)}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Cerrar demostración ▲
                </button>
              </div>

            </div>
          </div>
        )}

        {/* 9 MODULE CARDS WITH ENUMERATED QUALITIES (ALL CLOSED BY DEFAULT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isOpen = activeModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`bg-[#0a0f1d] border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 shadow-md ${
                  isOpen ? 'border-cyan-500 ring-2 ring-cyan-500/30' : mod.borderClass
                }`}
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                        <Icon className={`w-4 h-4 ${mod.accentColor}`} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 block">MÓDULO {mod.number}</span>
                        <h3 className="text-sm font-bold text-white">{mod.name}</h3>
                      </div>
                    </div>
                    <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border ${mod.badgeClass}`}>
                      {mod.subtitle}
                    </span>
                  </div>

                  {/* Enumerated Qualities Checklist */}
                  <div className="pt-2 pb-4 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">
                      Cualidades que posee:
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      {mod.qualities.map((qual, qIdx) => (
                        <li key={qIdx} className="flex items-start space-x-2">
                          <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${mod.accentColor}`} />
                          <span className="leading-tight">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action button to open demo optionally */}
                <div className="pt-3 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleToggleModule(mod.id)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center shadow ${
                      isOpen
                        ? 'bg-slate-800 text-slate-200 border border-slate-600'
                        : `${mod.buttonClass}`
                    }`}
                  >
                    {isOpen ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5 mr-1.5" />
                        <span>Cerrar demostración</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 mr-1.5 fill-current" />
                        <span>Abrir demostración en vivo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. CALCULADORA INTERACTIVA DE RENDIMIENTO Y AHORRO */}
      <section className="py-12 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10.5px] font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
              ESTIMACIÓN FINANCIERA DEL COMERCIO
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ¿Cuánto tiempo y dinero recuperás con este sistema?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Ajustá los valores de tu local para ver la proyección operativa mensual estimada.
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
                Cálculo basado en 26 días operativos mensuales y reducción de errores en caja y stock.
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

      {/* 5. PUBLICIDAD GENERAL & SERVICIOS DE ROLPHI STUDIO (AL FINAL) */}
      <section className="py-16 bg-gradient-to-b from-[#070b14] via-slate-900/40 to-[#070b14] border-b border-slate-800/80 relative">
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
              En <strong className="text-white font-semibold">ROLΦ Studio</strong> somos los creadores de este sistema y diseñamos soluciones tecnológicas a tu medida. Desarrollamos herramientas digitales para empresas que buscan automatizar y crecer.
            </p>
          </div>

          {/* Grid of Custom Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Smartphone,
                title: 'Aplicaciones Móviles (Android & iOS)',
                desc: 'Apps a medida para clientes, preventistas o logística de repartidores conectadas a tu base central.'
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
          <div className="mt-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center max-w-3xl mx-auto shadow-md">
            <h3 className="text-base font-bold text-white mb-1.5">
              ¿Tenés una idea o un proceso que querés sistematizar?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto mb-4">
              En <strong className="text-slate-100">ROLΦ Studio</strong> aplicamos nuestro principio de <em>"pequeñas herramientas para grandes ideas"</em>. Analizamos tu requerimiento y te ofrecemos una propuesta técnica seria y escalable.
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

      {/* 6. RESPALDO, AUTORÍA Y CONTACTO */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <img 
            src="/assets/rolphi.jpg" 
            alt="RolΦ Studio" 
            className="w-20 sm:w-24 h-auto object-contain rounded-xl border border-slate-700 bg-slate-950 flex-shrink-0"
          />
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              AUTORÍA DIRECTA &amp; SOPORTE CONTINUO
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              ROLΦ Studio • Software con Respaldo Real
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trato directo con los desarrolladores del sistema. Asistencia técnica, capacitaciones para tu personal y ampliaciones modulares a medida.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 justify-center sm:justify-start text-xs text-slate-400 font-mono">
              <span>● WhatsApp: <strong>2241-527357</strong></span>
              <span>● Email: <strong>martinchiacchio.seg@gmail.com</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
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
            <a href="/Dossier-Comercial-ROLPHI-Gestion-Integral.pdf" download="Dossier-Comercial-ROLPHI-Gestion-Integral.pdf" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">Descargar Dossier (PDF)</a>
            <Link to="/login" className="hover:text-slate-300 transition">Ingreso al Sistema</Link>
            <Link to="/catalogo" className="hover:text-slate-300 transition">Catálogo Web</Link>
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
