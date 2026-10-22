import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Store, 
  Package, 
  Users, 
  Wallet, 
  BarChart3, 
  Award, 
  FileText, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Layers, 
  Smartphone, 
  Laptop, 
  Zap, 
  TrendingUp, 
  PhoneCall, 
  ChevronRight,
  Database,
  QrCode,
  FileSpreadsheet,
  Truck,
  Printer,
  Boxes
} from 'lucide-react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function LandingDemo() {
  const [activeTab, setActiveTab] = useState(0);

  const phoneNumber = '5492241527180';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    '¡Hola ROLΦ! Estoy interesado en el Sistema de Gestión Integral con Catálogo Web. Me gustaría coordinar una demostración personalizada para mi comercio.'
  )}`;

  const modules = [
    {
      id: 'pos',
      title: '1. Punto de Venta Ultra Rápido (POS)',
      shortTitle: 'Punto de Venta',
      icon: ShoppingCart,
      badge: 'Mostrador Ágil',
      description: 'Facturación optimizada para no hacer esperar al cliente. Buscador inteligente por código o nombre, múltiples medios de pago combinables y emisión inmediata de tickets.',
      highlights: [
        'Cobro en efectivo, transferencias bancarias, QR y Cuenta Corriente.',
        'Cálculo automático de vueltos y descuentos en el acto.',
        'Descuento automático e instantáneo del inventario general.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <span className="text-xs font-mono text-cyan-400 font-bold">● CAJA ABIERTA - MOSTRADOR #01</span>
            <span className="text-xs text-slate-400">Ticket: #TK-008492</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-xs">
              <div>
                <span className="font-bold text-white block">Remera Básica Algodón Peinado</span>
                <span className="text-[10px] text-slate-400 font-mono">ART-1049 • Cantidad: 2</span>
              </div>
              <span className="font-extrabold text-cyan-300 text-sm">$32.000</span>
            </div>
            <div className="flex justify-between items-center bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-xs">
              <div>
                <span className="font-bold text-white block">Pantalón Denim Clásico Talle 42</span>
                <span className="text-[10px] text-slate-400 font-mono">ART-2015 • Cantidad: 1</span>
              </div>
              <span className="font-extrabold text-cyan-300 text-sm">$48.500</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-3.5 rounded-xl border border-cyan-500/30 flex justify-between items-center mb-3">
            <span className="text-xs uppercase text-slate-300 font-bold">Total a Cobrar:</span>
            <span className="text-2xl font-black text-cyan-400">$80.500</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
            <div className="bg-cyan-600/30 border border-cyan-500/50 py-2 rounded-lg text-cyan-200">EFECTIVO</div>
            <div className="bg-slate-800 border border-slate-700 py-2 rounded-lg text-slate-300">QR / TRANSF</div>
            <div className="bg-slate-800 border border-slate-700 py-2 rounded-lg text-slate-300">CTA CTE</div>
          </div>
        </div>
      )
    },
    {
      id: 'catalog',
      title: '2. Catálogo Web Online Sincronizado',
      shortTitle: 'Catálogo Web',
      icon: Store,
      badge: 'Vidriera 24 Horas',
      description: 'Tus clientes navegan tus artículos desde cualquier teléfono celular o computadora. Los pedidos llegan listos a tu WhatsApp con código, fotos, talles y precio.',
      highlights: [
        'Conectado al stock real: si te quedás sin producto, se oculta solo.',
        'Tus clientes no tienen que instalar nada ni registrarse.',
        'Botón directo a tu número de WhatsApp comercial.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white">
          <div className="text-center pb-3 border-b border-slate-800 mb-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">CATÁLOGO WEB CLIENTES</span>
            <span className="text-[10px] text-slate-400">Optimizado para celulares y tablets</span>
          </div>
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-3 flex items-center space-x-3">
            <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 border border-slate-700 text-xs font-bold">
              FOTO
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-cyan-400 font-bold block uppercase">Nueva Temporada</span>
              <span className="text-xs font-bold text-white block">Chaqueta Abrigada Urban</span>
              <span className="text-sm font-black text-emerald-400">$64.000</span>
            </div>
          </div>
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center space-y-1">
            <span className="text-xs font-bold text-emerald-300 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Pedido Automático por WhatsApp
            </span>
            <p className="text-[10px] text-slate-300 font-mono">
              "¡Hola! Quiero consultar por Chaqueta Urban (ART-901) en talle M"
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'stock',
      title: '3. Control de Stock & Alertas de Reposición',
      shortTitle: 'Stock & Alertas',
      icon: Package,
      badge: 'Inventario Inteligente',
      description: 'Seguimiento exacto de cada unidad. Control de precios de costo, cálculo de margen de ganancia automático y aviso visual cuando el producto está por agotarse.',
      highlights: [
        'Alerta roja inmediata cuando el stock baja del límite mínimo definido.',
        'Cálculo automático del precio de venta sugerido según tu ganancia deseada.',
        'Interruptor para publicar o despublicar de la web con un solo clic.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-white uppercase text-[11px]">Monitoreo de Existencias</span>
            <span className="bg-rose-950 text-rose-300 border border-rose-700/60 px-2 py-0.5 rounded-full text-[10px] font-bold">
              ⚠ 2 Alertas Críticas
            </span>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 bg-slate-850 rounded-xl border border-slate-700/80 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">Buzo Capucha Oversize</span>
                <span className="text-[10px] text-slate-400 font-mono">Costo: $20.000 | Venta: $38.000 (90%)</span>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-lg border border-emerald-700/40">
                18 unidades
              </span>
            </div>
            <div className="p-2.5 bg-rose-950/30 rounded-xl border border-rose-800/60 flex justify-between items-center">
              <div>
                <span className="font-bold text-rose-200 block">Camisa Lino Premium Blanca</span>
                <span className="text-[10px] text-rose-300 font-mono">Límite mínimo: 5 unidades</span>
              </div>
              <span className="text-xs font-bold text-rose-300 bg-rose-900/60 px-2 py-1 rounded-lg border border-rose-700">
                ¡Quedan 2!
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'purchases',
      title: '4. Agenda de Compras a Proveedores & Ingreso de Stock',
      shortTitle: 'Compras Proveedores',
      icon: Truck,
      badge: 'Reposición & Inversión',
      description: 'Agendá los pedidos a tus distribuidores, registrá el valor de costo de la mercadería y acreditá automáticamente las cantidades a tu inventario cuando recibís el pedido.',
      highlights: [
        'Agenda compras con fecha estimada de entrega y control de pedidos pendientes.',
        'Registro del valor total de la compra y costo unitario de reposición.',
        'Ingreso de stock en 1 clic: las cantidades se suman solas al inventario sin cargarlas a mano una por una.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 mb-3">
            <div>
              <span className="font-bold text-cyan-400 text-[11px] uppercase block">ORDEN DE COMPRA #COM-00412</span>
              <span className="text-[10px] text-slate-300">Proveedor: Distribuidora Central Textil</span>
            </div>
            <span className="bg-amber-950 text-amber-300 border border-amber-700/60 px-2 py-0.5 rounded-full text-[10px] font-bold">
              ⏳ Entrega: 24/10/2026
            </span>
          </div>
          <div className="space-y-2 mb-3">
            <div className="bg-slate-850 p-2 rounded-xl border border-slate-700/70 flex justify-between items-center text-[11px]">
              <div>
                <span className="font-bold text-white block">Remeras Lisas Cuello Redondo</span>
                <span className="text-[10px] text-slate-400 font-mono">50 unidades x $8.000 (Costo u.)</span>
              </div>
              <span className="font-bold text-cyan-300">$400.000</span>
            </div>
            <div className="bg-slate-850 p-2 rounded-xl border border-slate-700/70 flex justify-between items-center text-[11px]">
              <div>
                <span className="font-bold text-white block">Camperas Abrigo Bomber</span>
                <span className="text-[10px] text-slate-400 font-mono">20 unidades x $25.000 (Costo u.)</span>
              </div>
              <span className="font-bold text-cyan-300">$500.000</span>
            </div>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex justify-between items-center mb-2.5">
            <span className="text-slate-300 text-[11px] font-bold">Valor Total de la Compra:</span>
            <span className="text-base font-black text-cyan-400">$900.000</span>
          </div>
          <div className="p-2 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-center text-emerald-300 font-bold text-[10px] flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            Al recibir mercadería: Suma 70 unidades al stock automáticamente
          </div>
        </div>
      )
    },
    {
      id: 'customers',
      title: '4. Cuentas Corrientes & Clientes (Fiado Seguro)',
      shortTitle: 'Cta Corriente',
      icon: Users,
      badge: 'Cobranza Segura',
      description: 'Llevá el control de tus clientes frecuentes sin cuadernos. Asigná límites de crédito, registrá entregas a cuenta y consultá saldos deudores en un clic.',
      highlights: [
        'Tope de crédito para evitar fiar de más sin autorización.',
        'Historial cronológico de compras, pagos parciales y saldos pendientes.',
        'Envío directo del estado de deuda del cliente a su WhatsApp.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3">
            <div>
              <span className="font-bold text-white block">García, Marcelo Alberto</span>
              <span className="text-[10px] text-slate-400">Cliente #482 • Cel: 2241-XXXXXX</span>
            </div>
            <span className="bg-rose-900/50 text-rose-300 border border-rose-700 px-2.5 py-1 rounded-lg text-xs font-extrabold">
              Debe: $34.500
            </span>
          </div>
          <div className="bg-black/30 p-3 rounded-xl border border-slate-800 space-y-1.5 mb-3 text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span>Límite de Crédito Otorgado:</span>
              <span className="font-bold text-white">$60.000</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Crédito Disponible:</span>
              <span className="font-bold text-emerald-400">$25.500</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Último Pago a Cuenta:</span>
              <span className="font-mono text-cyan-300">$15.000 (18/10/2026)</span>
            </div>
          </div>
          <div className="text-center text-[10px] text-cyan-300 font-semibold bg-cyan-950/40 py-1.5 rounded-lg border border-cyan-800/40">
            ✓ Registro instantáneo de pagos parciales en mostrador
          </div>
        </div>
      )
    },
    {
      id: 'cash',
      title: '5. Caja Diaria & Rendición de Turnos',
      shortTitle: 'Caja Diaria',
      icon: Wallet,
      badge: 'Cero Fugas',
      description: 'Apertura y cierre de caja con arqueo ciego. Sabé con exactitud cuánto dinero entró en efectivo, cuánto por transferencia y cuánto por cobros con QR.',
      highlights: [
        'Registro de gastos imprevistos, retiros de dinero y pagos a proveedores.',
        'Desglose exacto para saber cuánto dinero físico debe haber en el cajón.',
        'Cierre de turno con balance neto para auditorías sin sorpresas.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
            <span className="font-bold text-cyan-400 text-[11px] uppercase">Arqueo de Caja - Turno Tarde</span>
            <span className="text-[10px] text-slate-400 font-mono">14:00 - 20:30 hs</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700">
              <span className="text-slate-400 block text-[10px]">Efectivo Físico:</span>
              <span className="font-extrabold text-white text-sm">$142.300</span>
            </div>
            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700">
              <span className="text-slate-400 block text-[10px]">Transferencias / QR:</span>
              <span className="font-extrabold text-cyan-300 text-sm">$98.600</span>
            </div>
          </div>
          <div className="bg-emerald-950/50 border border-emerald-500/30 p-2.5 rounded-xl flex justify-between items-center">
            <span className="font-bold text-emerald-200">Total Neto en Caja:</span>
            <span className="text-base font-black text-emerald-400">$240.900</span>
          </div>
        </div>
      )
    },
    {
      id: 'reports',
      title: '6. Métricas Ejecutivas & Ganancia Neta',
      shortTitle: 'Estadísticas',
      icon: BarChart3,
      badge: 'Números Reales',
      description: 'Visualizá el crecimiento real de tu negocio con gráficos interactivos. Calculá de forma automática el costo de reposición y la ganancia neta de cada período.',
      highlights: [
        'Ranking de los 10 productos que más rotan y más rentabilidad dejan.',
        'Facturación comparativa diaria, semanal y mensual.',
        'Margen de ganancia limpio después de descontar el costo de compra.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
            <span className="font-bold text-white text-[11px] uppercase">Rentabilidad Mensual</span>
            <span className="text-emerald-400 text-[10px] font-bold">▲ +24% vs mes anterior</span>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Ventas Brutas:</span>
              <span className="font-bold text-white">$4.850.000</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Costo de Mercadería:</span>
              <span className="font-mono text-slate-300">-$2.620.000</span>
            </div>
            <div className="flex justify-between text-[11px] pt-1.5 border-t border-slate-800">
              <span className="font-bold text-emerald-300">Ganancia Neta Real:</span>
              <span className="text-base font-black text-emerald-400">$2.230.000</span>
            </div>
          </div>
          <div className="bg-slate-950 p-2 rounded-lg text-center text-[10px] text-slate-400 border border-slate-800">
            Gráficos interactivos de facturación integrados
          </div>
        </div>
      )
    },
    {
      id: 'sellers',
      title: '7. Vendedores & Liquidación de Comisiones',
      shortTitle: 'Vendedores',
      icon: Users,
      badge: 'Equipo Comercial',
      description: 'Definí comisiones fijas o porcentuales por cada venta. Cada vendedor tiene su propio usuario seguro para cobrar y consultar sus ventas acumuladas.',
      highlights: [
        'Cálculo automático de comisiones sin errores humanos al final del mes.',
        'Control de permisos: los vendedores solo ven lo necesario para cobrar.',
        'Auditoría completa de quién realizó cada venta en el sistema.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
            <span className="font-bold text-white text-[11px] uppercase">Rendimiento Vendedoras</span>
            <span className="text-[10px] text-cyan-400 font-mono">Comisión: 10% s/Venta</span>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">Carla Rodríguez</span>
                <span className="text-[10px] text-slate-400">32 ventas en el período</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">A liquidar:</span>
                <span className="font-extrabold text-emerald-400 text-xs">$84.500</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">Lucía Martínez</span>
                <span className="text-[10px] text-slate-400">28 ventas en el período</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">A liquidar:</span>
                <span className="font-extrabold text-emerald-400 text-xs">$71.200</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pdf',
      title: '8. Emisión de Tickets y Catálogos en PDF',
      shortTitle: 'Tickets & PDF',
      icon: FileText,
      badge: 'Documentación Oficial',
      description: 'Generación instantánea de comprobantes de venta, recibos de entrega a cuenta y catálogos completos en formato PDF listos para descargar o imprimir.',
      highlights: [
        'Diseño corporativo con el logotipo y datos fiscales de tu comercio.',
        'Envío directo del recibo digital por WhatsApp al cliente.',
        'Generador de catálogo de productos en PDF con fotos para mayoristas.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="bg-white text-slate-900 p-4 rounded-xl shadow-inner font-mono text-[11px] space-y-1.5 border border-slate-300">
            <div className="text-center pb-2 border-b border-dashed border-slate-400">
              <span className="font-extrabold text-sm block">MI COMERCIO</span>
              <span className="text-[9px] text-slate-500">Comprobante No Válido como Factura</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span>Ticket: #002914</span>
              <span>21/10/2026 19:40 hs</span>
            </div>
            <div className="border-b border-dashed border-slate-300 py-1 space-y-1 text-[10px]">
              <div className="flex justify-between">
                <span>1x Buzo Oversize</span>
                <span>$38.000</span>
              </div>
              <div className="flex justify-between">
                <span>1x Remera Clásica</span>
                <span>$16.000</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-xs pt-1">
              <span>TOTAL ABONADO:</span>
              <span className="text-emerald-700 font-extrabold">$54.000</span>
            </div>
            <div className="text-center text-[9px] text-slate-400 pt-1">
              ¡Muchas gracias por su compra!
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'superadmin',
      title: '9. Marca Blanca & Supervisión RolΦ',
      shortTitle: 'Personalización',
      icon: Settings,
      badge: 'Multi-Negocio',
      description: 'Adaptable a cualquier comercio en segundos. Carga el logotipo de tu cliente, define nombre, teléfonos y moneda sin tocar una sola línea de código.',
      highlights: [
        'Carga directa del logotipo oficial desde el panel de SuperAdmin.',
        'Supervisión técnica, diagnóstico de integridad de base de datos y licencias.',
        'Sello de calidad y respaldo de desarrollo por RolΦ Studio.'
      ],
      mockup: (
        <div className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-5 shadow-2xl text-white text-xs">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-800 mb-3">
            <img src="/assets/rolphi.jpg" alt="RolΦ Studio" className="h-10 w-auto rounded-lg border border-cyan-500/40" />
            <div>
              <span className="font-extrabold text-white text-xs block">Portal SuperAdministrador</span>
              <span className="text-[10px] text-cyan-400">Supervisión Técnica RolΦ Studio</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 flex justify-between items-center text-[11px]">
              <span className="text-slate-300">Identidad Comercial:</span>
              <span className="font-bold text-cyan-300">Personalizable 100%</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 flex justify-between items-center text-[11px]">
              <span className="text-slate-300">Carga de Logotipo:</span>
              <span className="font-bold text-emerald-400">PNG / JPG / SVG</span>
            </div>
          </div>
          <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center text-[10px] text-emerald-300 font-bold">
            ✓ Certificado Oficial de Licencia emitido por RolΦ Studio
          </div>
        </div>
      )
    }
  ];

  const modularExtensions = [
    {
      icon: QrCode,
      title: 'Cobros QR & Mercado Pago',
      desc: 'Integración directa con pasarelas de pago digitales para confirmación automática de cobro en mostrador.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Auditoría & Control de Mermas',
      desc: 'Herramientas de inventario ciego y control de diferencias de caja y mercadería para máxima seguridad.'
    },
    {
      icon: Printer,
      title: 'Lectores Láser & Comanderas',
      desc: 'Compatibilidad con pistolas de código de barras USB/Bluetooth e impresoras térmicas de 58mm y 80mm.'
    },
    {
      icon: Boxes,
      title: 'Multi-Sucursal & Depósitos',
      desc: 'Administración de varios locales comerciales con control de stock centralizado y transferencias entre depósitos.'
    },
    {
      icon: Truck,
      title: 'Logística & Cotizador de Envíos',
      desc: 'Cálculo de costos de entrega por código postal o zona, con seguimiento de despachos para el cliente.'
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Automatizado de WhatsApp',
      desc: 'Respuestas automáticas inteligentes a consultas de catálogo y confirmación de pedidos 24/7.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. TOP CORPORATE HEADER */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* ROLPHI Brand */}
          <div className="flex items-center space-x-3.5">
            <img 
              src="/assets/rolphi.jpg" 
              alt="RolΦ Studio" 
              className="h-12 w-auto object-contain rounded-xl border border-slate-700/80 shadow-lg"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-black tracking-wider text-white">ROL<span className="text-cyan-400">Φ</span></span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-cyan-950 text-cyan-300 border border-cyan-800/80 px-2 py-0.5 rounded-full">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                Hacemos pequeñas herramientas para <strong className="text-cyan-400 font-semibold">grandes soluciones</strong>
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-3">
            <Link
              to="/catalogo"
              target="_blank"
              className="hidden sm:inline-flex items-center px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition"
            >
              <Store className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Ver Catálogo Demo
            </Link>

            <Link
              to="/login"
              className="hidden md:inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition shadow"
            >
              Acceso Clientes
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition shadow-lg shadow-cyan-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 fill-current" />
              <span>Pedir Demostración</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-bold mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SISTEMA DE GESTIÓN COMERCIAL &amp; CATÁLOGO DIGITAL EN LA NUBE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
            El control total de tu mostrador con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              catálogo web conectado a tu stock.
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Desarrollado por <strong className="text-white font-bold">ROLΦ</strong> para negocios que necesitan facturar en segundos, erradicar errores de inventario y abrir una vidriera online para vender por WhatsApp las 24 horas sin pagar comisiones.
          </p>

          {/* Key Value Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold">
            <span className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300 flex items-center shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
              0% Comisiones por Venta
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300 flex items-center shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
              100% en la Nube (PC, Tablet y Celular)
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300 flex items-center shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
              Arquitectura 100% Modular y Ampliable
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-sm font-extrabold rounded-2xl transition shadow-xl shadow-emerald-500/25 flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              <span>Coordinar Demo al 2241-527180</span>
            </a>

            <a
              href="#modulos"
              className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-850 text-white text-sm font-bold rounded-2xl transition border border-slate-700 flex items-center justify-center"
            >
              <span>Explorar los Módulos Comerciales</span>
              <ArrowRight className="w-4 h-4 ml-2 text-cyan-400" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE 9-MODULE DEMO SHOWCASE */}
      <section id="modulos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-800">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            RECORRIDO EN PANTALLA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Todo lo que hace el sistema, en detalle
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Hacé clic en cualquiera de los módulos para ver cómo funciona y qué beneficios aporta a tu comercio.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected 
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105' 
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 mr-1.5 ${isSelected ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{m.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/80">
              {modules[activeTab].badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {modules[activeTab].title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {modules[activeTab].description}
            </p>

            <div className="space-y-2.5 pt-2">
              {modules[activeTab].highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-600/30"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                <span>Consultar por este módulo</span>
              </a>

              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition border border-slate-700"
              >
                <span>Probar en el sistema</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Right Mockup Column */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                {modules[activeTab].mockup}
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 4. MODULAR EXPANSION HIGHLIGHT (SPECIAL REQUIREMENT) */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>ARQUITECTURA MODULAR A MEDIDA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ampliá tu sistema a lo que tu comercio necesite
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              En <strong className="text-white">ROLΦ</strong> no vendemos programas cerrados ni enlatados rígidos. Diseñamos este software con una estructura desacoplada para que podamos agregarle cualquier función específica que requiera tu operativa diaria.
            </p>
          </div>

          {/* Grid of extensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modularExtensions.map((ext, i) => {
              const Icon = ext.icon;
              return (
                <div 
                  key={i} 
                  className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {ext.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ext.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Custom module banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/40 text-center max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
              ¿Tu negocio tiene un requerimiento único o especial?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-5">
              Desde control de números de serie, órdenes de reparación técnica, talles y colores especiales, hasta integración con balanzas o sistemas contables. El equipo de <strong className="text-cyan-300">ROLΦ</strong> lo desarrolla a medida para vos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black rounded-xl transition shadow-lg shadow-cyan-500/30"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              <span>Consultar por un Módulo a Medida</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. ABOUT ROLPHI STUDIO & GUARANTEE */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          <img 
            src="/assets/rolphi.jpg" 
            alt="RolΦ Studio" 
            className="w-24 sm:w-32 h-auto object-contain rounded-2xl border border-slate-700 shadow-xl flex-shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
              GARANTÍA DE AUTOR &amp; DESARROLLO DIRECTO
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Creado y respaldado directamente por ROLΦ Studio
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sin revendedores, intermediarios ni licencias de terceros que se caen. Tenés línea directa con nosotros para soporte, capacitaciones de tu personal y actualizaciones continuas de seguridad y rendimiento en la nube.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 justify-center sm:justify-start text-xs text-slate-400 font-mono">
              <span>● Tel: <strong>2241-527180</strong></span>
              <span>● Email: <strong>martinchiacchio.seg@gmail.com</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION (CTA) */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          Llevá tu comercio al siguiente nivel de orden y ventas
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Contactanos hoy mismo para coordinar una prueba guiada en tu computadora o celular sin compromiso.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black rounded-2xl transition shadow-xl shadow-emerald-500/30 flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2 fill-current" />
            <span>Chatear por WhatsApp (2241-527180)</span>
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
      <footer className="mt-auto bg-slate-950 py-10 border-t border-slate-800 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center space-x-3">
            <img src="/assets/rolphi.jpg" alt="RolΦ" className="h-8 w-auto rounded border border-slate-800" />
            <div>
              <span className="font-bold text-white block">ROLΦ Studio</span>
              <span className="text-[10px]">Hacemos pequeñas herramientas para grandes soluciones</span>
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
