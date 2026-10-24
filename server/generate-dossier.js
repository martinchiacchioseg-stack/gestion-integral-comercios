import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.resolve(__dirname, 'public/assets/rolphi.jpg');
const outputPathClient = path.resolve(__dirname, '../client/public/Dossier-Comercial-ROLPHI-Gestion-Integral.pdf');
const outputPathRoot = path.resolve(__dirname, '../Dossier-Comercial-ROLPHI-Gestion-Integral.pdf');

console.log('Generating Commercial Dossier PDF...');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 45, left: 45, right: 45 },
  bufferPages: true,
  autoFirstPage: true
});

const writeStreamClient = fs.createWriteStream(outputPathClient);
const writeStreamRoot = fs.createWriteStream(outputPathRoot);

doc.pipe(writeStreamClient);
doc.pipe(writeStreamRoot);

// Paleta de colores ejecutiva
const COLORS = {
  primary: '#0f172a',    // Slate 900
  secondary: '#1e293b',  // Slate 800
  accent: '#0284c7',     // Sky/Cyan 600
  accentDark: '#0369a1', // Sky 700
  emerald: '#059669',    // Emerald 600
  amber: '#d97706',      // Amber 600
  purple: '#7c3aed',     // Purple 600
  textDark: '#0f172a',
  textMuted: '#475569',
  border: '#cbd5e1',
  bgLight: '#f8fafc',
  cardBg: '#ffffff',
  white: '#ffffff'
};

// Helper para dibujar pie de página
function drawFooter(doc, pageNum, totalPages) {
  const bottom = doc.page.height - 35;
  doc.save();
  doc.strokeColor(COLORS.border).lineWidth(0.5);
  doc.moveTo(45, bottom - 10).lineTo(doc.page.width - 45, bottom - 10).stroke();

  doc.fontSize(8).fillColor(COLORS.textMuted);
  doc.text('ROLΦ Studio • "Pequeñas herramientas para grandes ideas" • WhatsApp: 2241-527357', 45, bottom, {
    width: doc.page.width - 150,
    align: 'left'
  });
  doc.text(`Página ${pageNum}`, doc.page.width - 95, bottom, {
    width: 50,
    align: 'right'
  });
  doc.restore();
}

// Helper para encabezado estándar
function drawHeader(doc, sectionTitle) {
  doc.save();
  // Barra superior
  doc.rect(45, 30, doc.page.width - 90, 28).fill(COLORS.bgLight);
  doc.strokeColor(COLORS.border).lineWidth(0.5).rect(45, 30, doc.page.width - 90, 28).stroke();

  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 52, 34, { height: 20 });
  }

  doc.fontSize(9).font('Helvetica-Bold').fillColor(COLORS.primary);
  doc.text('ROLΦ STUDIO', 85, 38);
  doc.fontSize(8).font('Helvetica').fillColor(COLORS.textMuted);
  doc.text(`|  ${sectionTitle}`, 160, 39);

  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.accentDark);
  doc.text('SISTEMA DE GESTIÓN INTEGRAL', doc.page.width - 215, 39, { width: 160, align: 'right' });

  doc.restore();
  doc.y = 75;
}

// ==========================================
// PÁGINA 1: PORTADA EJECUTIVA
// ==========================================
// Fondo decorativo portada
doc.rect(0, 0, doc.page.width, 240).fill(COLORS.primary);
doc.rect(0, 235, doc.page.width, 5).fill(COLORS.accent);

// Logo central en portada
if (fs.existsSync(logoPath)) {
  doc.image(logoPath, 50, 45, { height: 50 });
}

doc.fontSize(11).font('Helvetica-Bold').fillColor(COLORS.accent);
doc.text('ROLΦ STUDIO  •  INGENIERÍA & DESARROLLO DE SOFTWARE', 50, 110);

doc.fontSize(24).font('Helvetica-Bold').fillColor(COLORS.white);
doc.text('DOSSIER COMERCIAL & TÉCNICO', 50, 130);

doc.fontSize(13).font('Helvetica').fillColor('#cbd5e1');
doc.text('Plataforma de Gestión Integral para Comercios & Catálogo Web Sincronizado', 50, 165);

doc.fontSize(10).font('Helvetica-Oblique').fillColor('#94a3b8');
doc.text('"Pequeñas herramientas para grandes ideas"', 50, 190);

// Contenido inferior portada
doc.y = 265;
doc.fontSize(12).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('RESUMEN DE PROPUESTA DE VALOR', 50, doc.y);
doc.moveDown(0.5);

doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.textDark).lineGap(3);
doc.text(
  'El presente documento describe en detalle las capacidades, arquitectura técnica, módulos operativos ' +
  'y proyecciones financieras de la plataforma de Gestión Integral de Comercios desarrollada por ROLΦ Studio. ' +
  'Una solución integral diseñada para eliminar la dependencia de planillas manuales, erradicar faltantes ' +
  'de caja y stock, y dotar al comercio de una vidriera online moderna con recepción automática de pedidos.',
  { width: doc.page.width - 100, align: 'justify' }
);

doc.moveDown(1);

// Cuadro destacado en portada
const boxY = doc.y;
doc.rect(50, boxY, doc.page.width - 100, 115).fill(COLORS.bgLight);
doc.strokeColor(COLORS.accent).lineWidth(1).rect(50, boxY, doc.page.width - 100, 115).stroke();

doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.accentDark);
doc.text('DESTACADOS CLAVE DEL SISTEMA:', 65, boxY + 12);

const highlights = [
  '• 9 Módulos Operativos: Punto de Venta, Stock, Compras, Caja, Informes, Empleados, Clientes, Catálogo y SuperAdmin.',
  '• Cobro de alta velocidad con buscador de códigos de barras e impresión inmediata de tickets.',
  '• Control estricto de caja por turnos (mañana y tarde) con arqueo ciego para evitar diferencias.',
  '• Catálogo web móvil conectado al inventario: el producto agotado se oculta automáticamente de la web.',
  '• Personalización total: logotipo comercial propio y cero ataduras a licencias de terceros.'
];

let hlY = boxY + 28;
doc.fontSize(8.5).font('Helvetica').fillColor(COLORS.textDark);
highlights.forEach(h => {
  doc.text(h, 65, hlY, { width: doc.page.width - 130 });
  hlY += 16;
});

// Ficha de contacto y emisión en portada
doc.y = 580;
doc.rect(50, doc.y, doc.page.width - 100, 65).fill('#0f172a');
doc.fontSize(9).font('Helvetica-Bold').fillColor(COLORS.white);
doc.text('INFORMACIÓN DE CONTACTO & ASESORAMIENTO DIRECTO', 65, doc.y + 10);

doc.fontSize(8.5).font('Helvetica').fillColor('#94a3b8');
doc.text('● Desarrollador / Autoría: ROLΦ Studio', 65, doc.y + 14);
doc.text('● WhatsApp Oficial: +54 9 2241 527357 (2241-527357)', 65, doc.y + 27);
doc.text('● Correo Electrónico: martinchiacchio.seg@gmail.com', 65, doc.y + 40);
doc.text('● Demostración Online: https://gestion-integral-comercios.vercel.app', 300, doc.y + 40);

// ==========================================
// PÁGINA 2: DIAGNÓSTICO & PROPUESTA DE VALOR
// ==========================================
doc.addPage();
drawHeader(doc, 'DIAGNÓSTICO COMERCIAL & SOLUCIÓN');

doc.fontSize(14).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('1. El Diagnóstico del Comercio Minorista Actual');
doc.moveDown(0.4);

doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.textDark).lineGap(3);
doc.text(
  'La gran mayoría de los comercios minoristas (regalerías, bazares, indumentaria, calzado y tiendas multirubro) ' +
  'enfrentan a diario una serie de fricciones operativas que deterioran directamente la rentabilidad del negocio:\n' +
  '1. Descontrol de stock: Ventas de artículos agotados o compras excesivas de mercadería de baja rotación.\n' +
  '2. Arqueos de caja con diferencias: Descalces entre lo cobrado en efectivo, billeteras virtuales y transferencias.\n' +
  '3. Cuadernos de fiados y cuentas corrientes extraviadas o poco claras que generan dinero incobrable.\n' +
  '4. Ventas perdidas en redes sociales por falta de un catálogo actualizado en tiempo real con precios claros.'
);

doc.moveDown(0.8);
doc.fontSize(14).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('2. La Propuesta de Valor de ROLΦ Studio');
doc.moveDown(0.4);

doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.textDark).lineGap(3);
doc.text(
  'ROLΦ Studio diseñó esta plataforma como una solución definitiva que unifica el mostrador físico con las ventas ' +
  'digitales bajo una arquitectura moderna, rápida y sin costos por intermediación:\n\n' +
  '• Centralización Absoluta: Todo se resuelve en una sola pantalla: venta, inventario, compra y caja.\n' +
  '• Agilidad en Mostrador: Tiempos de cobro inferiores a 10 segundos por ticket, evitando filas y demoras.\n' +
  '• Transparencia con el Personal: Cada vendedor cuenta con su usuario y comisión clara asignada.\n' +
  '• Cero Comisión por Venta: A diferencia de plataformas de ecommerce que cobran entre un 5% y 15% por cada operación, ' +
  'el catálogo web de ROLΦ envía el pedido directamente al WhatsApp del comercio sin intermediarios ni costos mensuales abusivos.'
);

doc.moveDown(1);
// Comparativa tabla
const tableY = doc.y;
doc.rect(45, tableY, doc.page.width - 90, 110).fill(COLORS.bgLight);
doc.strokeColor(COLORS.border).lineWidth(0.5).rect(45, tableY, doc.page.width - 90, 110).stroke();

doc.fontSize(9).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('COMPARATIVA: PLANILLAS MANUALES vs. PLATAFORMA ROLΦ', 55, tableY + 8);

const compRows = [
  ['Variable', 'Gestión Tradicional (Cuadernos / Excel)', 'Plataforma ROLΦ Studio'],
  ['Cobro en Mostrador', 'Lento, cálculo a mano, error en vueltos', 'Instantáneo con lector o buscador y ticket'],
  ['Control de Inventario', 'Conteo manual a fin de mes con faltantes', 'Actualización automática en cada venta'],
  ['Cierre de Caja', 'Diferencias entre turnos sin responsable', 'Arqueo ciego con firma y balance auditado'],
  ['Catálogo Digital', 'Fotos sueltas en WhatsApp o planillas PDF', 'Catálogo web responsive conectado a stock'],
  ['Costos de Venta', 'Pérdida por desorganización (+10%)', 'Sin comisiones por venta, software propio']
];

let rY = tableY + 22;
compRows.forEach((r, idx) => {
  doc.fontSize(8).font(idx === 0 ? 'Helvetica-Bold' : 'Helvetica').fillColor(idx === 0 ? COLORS.accentDark : COLORS.textDark);
  doc.text(r[0], 55, rY, { width: 110 });
  doc.text(r[1], 175, rY, { width: 170 });
  doc.text(r[2], 355, rY, { width: 140 });
  rY += 14;
});

// ==========================================
// PÁGINA 3: LOS 9 MÓDULOS (PARTE 1: 01, 02, 03)
// ==========================================
doc.addPage();
drawHeader(doc, 'MÓDULOS DEL SISTEMA (01 AL 03)');

function drawModuleCard(doc, x, y, width, height, number, title, colorHex, bullets) {
  doc.save();
  doc.rect(x, y, width, height).fill(COLORS.white);
  doc.strokeColor(colorHex).lineWidth(1.5).rect(x, y, width, height).stroke();

  // Encabezado de tarjeta
  doc.rect(x, y, width, 22).fill(colorHex);
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.white);
  doc.text(`MÓDULO ${number}: ${title.toUpperCase()}`, x + 10, y + 6);

  // Bullets
  let by = y + 28;
  doc.fontSize(8.5).font('Helvetica').fillColor(COLORS.textDark);
  bullets.forEach(b => {
    doc.text(`✓ ${b}`, x + 10, by, { width: width - 20, lineGap: 1.5 });
    by += 16;
  });
  doc.restore();
}

drawModuleCard(
  doc, 45, 75, doc.page.width - 90, 115,
  '01', 'Mostrador POS & Cobro de Alta Velocidad', '#2563eb',
  [
    'Búsqueda ultra veloz por lector de código de barras o escritura predictiva por nombre de artículo.',
    'Múltiples métodos de pago integrados: Efectivo, Transferencias bancarias, QR y Cuenta Corriente de clientes.',
    'Asignación del vendedor interviniente para cálculo automático de comisiones por venta.',
    'Emisión instantánea de ticket o remito no fiscal con logotipo comercial, desglose y comprobante.',
    'Descuento físico inmediato del stock en el acto de cobro para evitar quiebres de inventario.'
  ]
);

drawModuleCard(
  doc, 45, 205, doc.page.width - 90, 115,
  '02', 'Control de Stock, Inventario Físico & Rentabilidad', '#d97706',
  [
    'Control centralizado de inventario en tiempo real con registro de código, talle, variante y proveedor.',
    'Cálculo automático de rentabilidad bruta y margen porcentual por producto (+35%, +58%, etc.).',
    'Alertas visuales automáticas de artículos con stock mínimo, bajo o agotado para reposición oportuna.',
    'Categorización multinivel: Novedades, Ofertas, Temporada y artículos destacados en vidriera.',
    'Interruptor de visibilidad: publicar u ocultar del catálogo online con un solo clic.'
  ]
);

drawModuleCard(
  doc, 45, 335, doc.page.width - 90, 115,
  '03', 'Compras a Proveedores & Ingreso Masivo de Stock', '#7c3aed',
  [
    'Agenda y administración de órdenes de compra mayoristas con seguimiento de estado de entrega.',
    'Control del costo de reposición unitario y cálculo del valor total invertido en cada pedido mayorista.',
    'Acreditación de mercadería en 1 solo clic: suma automáticamente las unidades al inventario sin cargar una a una.',
    'Directorio de distribuidores y proveedores con teléfonos, contactos, plazos y condiciones de pago.',
    'Historial de precios de compra para detectar aumentos de costos y actualizar precios de venta.'
  ]
);

// Cuadro explicativo inferior
doc.y = 465;
doc.rect(45, doc.y, doc.page.width - 90, 85).fill(COLORS.bgLight);
doc.strokeColor(COLORS.border).lineWidth(0.5).rect(45, doc.y, doc.page.width - 90, 85).stroke();

doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('VENTAJA OPERATIVA DIRECTA DE LA PRIMERA TRÍADA:', 55, doc.y + 10);
doc.fontSize(8.5).font('Helvetica').fillColor(COLORS.textDark).lineGap(2);
doc.text(
  'La sincronización entre Mostrador POS, Stock y Proveedores garantiza que ningún producto se venda sin stock, ' +
  'que cada reposición mayorista ingrese directamente a la base de datos sin planillas intermedias, y que el ' +
  'comercio conozca en todo momento el costo real de su inventario valorizado.',
  55, doc.y + 25, { width: doc.page.width - 110, align: 'justify' }
);

// ==========================================
// PÁGINA 4: LOS 9 MÓDULOS (PARTE 2: 04, 05, 06)
// ==========================================
doc.addPage();
drawHeader(doc, 'MÓDULOS DEL SISTEMA (04 AL 06)');

drawModuleCard(
  doc, 45, 75, doc.page.width - 90, 115,
  '04', 'Gestión de Empleados, Roles & Comisiones', '#0284c7',
  [
    'Creación ilimitada de usuarios del personal con contraseña independiente para auditoría de acciones.',
    'Definición de roles jerárquicos: Vendedor (mostrador), Encargado (arqueos/stock) y Administrador total.',
    'Asignación de porcentaje de comisión personalizado por vendedor (ej. 3%, 4%, 5% por venta lograda).',
    'Acumulador automático de ventas realizadas por empleado para una liquidación de sueldo mensual exacta.',
    'Botón de pago y liquidación de comisiones directo desde caja con emisión de recibo de cobro.'
  ]
);

drawModuleCard(
  doc, 45, 205, doc.page.width - 90, 115,
  '05', 'Arqueo y Cierre de Caja (Turnos Mañana & Tarde)', '#059669',
  [
    'Arqueo ciego de turnos: el empleado cuenta lo que tiene sin ver el sistema, evitando faltantes disimulados.',
    'Discriminación exacta de ingresos por medio de pago: Efectivo físico, QR, transferencias y Cta. Cte.',
    'Registro estricto de egresos y retiros de dinero de la gaveta (fletes, insumos, almuerzo) con comprobante.',
    'Rendición de turnos de mañana y de tarde con balance neto independiente y firma del responsable.',
    'Auditoría horaria y saldo consolidado definitivo al cierre de la jornada comercial.'
  ]
);

drawModuleCard(
  doc, 45, 335, doc.page.width - 90, 115,
  '06', 'Informes Ejecutivos & Ganancia Neta Real', '#4f46e5',
  [
    'Cálculo de Ganancia Neta Real: descuenta el costo mayorista cargado al proveedor para reflejar plata limpia.',
    'Métricas filtrables por período: análisis instantáneo de rendimiento por día, semana o mes.',
    'Ranking de los artículos más vendidos (Top Sellers) tanto por volumen de unidades como por margen generado.',
    'Auditoría de facturación bruta vs. costo de reposición para proteger el margen del negocio.',
    'Rendimiento comercial por vendedor para identificar a los mejores colaboradores del local.'
  ]
);

// Cuadro explicativo inferior
doc.y = 465;
doc.rect(45, doc.y, doc.page.width - 90, 85).fill(COLORS.bgLight);
doc.strokeColor(COLORS.border).lineWidth(0.5).rect(45, doc.y, doc.page.width - 90, 85).stroke();

doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('SEGURIDAD FINANCIERA & CONTROL DE CAJA:', 55, doc.y + 10);
doc.fontSize(8.5).font('Helvetica').fillColor(COLORS.textDark).lineGap(2);
doc.text(
  'El control de empleados, turnos de caja e informes de ganancia neta elimina las fugas invisibles de dinero. ' +
  'Al separar los turnos y liquidar comisiones de forma transparente, se erradican los conflictos internos y ' +
  'el dueño del comercio sabe con precisión matemática cuánta plata ganó al final de cada jornada.',
  55, doc.y + 25, { width: doc.page.width - 110, align: 'justify' }
);

// ==========================================
// PÁGINA 5: LOS 9 MÓDULOS (PARTE 3: 07, 08, 09)
// ==========================================
doc.addPage();
drawHeader(doc, 'MÓDULOS DEL SISTEMA (07 AL 09)');

drawModuleCard(
  doc, 45, 75, doc.page.width - 90, 115,
  '07', 'Directorio de Clientes & Cuenta Corriente (Libreta)', '#0d9488',
  [
    'Ficha individual de clientes con teléfono de contacto, dirección, notas comerciales y fecha de alta.',
    'Digitalización de la libreta de fiados: control estricto de saldos adeudados y límite de crédito.',
    'Registro de pagos parciales y entregas a cuenta con actualización instantánea del saldo deudor.',
    'Envío del resumen del estado de cuenta al cliente directamente por WhatsApp con un solo clic.',
    'Historial auditable de compras por cliente para programas de fidelización y promociones personalizadas.'
  ]
);

drawModuleCard(
  doc, 45, 205, doc.page.width - 90, 115,
  '08', 'Catálogo Web Móvil con Pedidos a WhatsApp', '#db2777',
  [
    'Vidriera web digital optimizada para smartphones, rápida y accesible para cualquier cliente con un link.',
    'Conectada en vivo al inventario del mostrador: si un producto se agota en el local, desaparece de la web.',
    'El cliente selecciona talles, variantes y presiona "Pedir por WhatsApp": se genera el mensaje listo con código.',
    'Recepción de pedidos servidos en el WhatsApp del comercio sin atender preguntas repetitivas de precios.',
    'Cero costos de pasarela de pago o comisiones por transacción: el comercio acuerda el cobro y entrega libremente.'
  ]
);

drawModuleCard(
  doc, 45, 335, doc.page.width - 90, 115,
  '09', 'SuperAdmin & Personalización de Identidad de Marca', '#475569',
  [
    'Herramienta de carga directa de logotipo del comercio (en formato PNG, JPG o SVG).',
    'Personalización dinámica del nombre de fantasía de la tienda y eslogan comercial.',
    'Aplicación automática de la marca en la cabecera del catálogo web, tickets y comprobantes no fiscales.',
    'Panel de configuración con control de accesos de máxima jerarquía y políticas de contraseñas.',
    'Propiedad absoluta del sistema: sin marcas de agua ni ataduras de plataformas de terceros.'
  ]
);

// Cuadro explicativo inferior
doc.y = 465;
doc.rect(45, doc.y, doc.page.width - 90, 85).fill(COLORS.bgLight);
doc.strokeColor(COLORS.border).lineWidth(0.5).rect(45, doc.y, doc.page.width - 90, 85).stroke();

doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('POTENCIA COMERCIAL & CANAL ONLINE:', 55, doc.y + 10);
doc.fontSize(8.5).font('Helvetica').fillColor(COLORS.textDark).lineGap(2);
doc.text(
  'La libreta de fiados digitalizada junto con el catálogo online permite vender 24/7 sin sumar costos operativos. ' +
  'Tus clientes habituales revisan las novedades desde su celular y te encargan por WhatsApp, mientras tu local ' +
  'conserva su propia identidad de marca en cada interacción.',
  55, doc.y + 25, { width: doc.page.width - 110, align: 'justify' }
);

// ==========================================
// PÁGINA 6: RETORNO DE INVERSIÓN & ROLPHI STUDIO
// ==========================================
doc.addPage();
drawHeader(doc, 'RETORNO DE INVERSIÓN & SERVICIOS A MEDIDA');

doc.fontSize(13).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('1. Estimación de Retorno de Inversión (ROI) y Ahorro Mensual');
doc.moveDown(0.3);

// Tabla ROI
const roiY = doc.y;
doc.rect(45, roiY, doc.page.width - 90, 80).fill(COLORS.bgLight);
doc.strokeColor(COLORS.emerald).lineWidth(1).rect(45, roiY, doc.page.width - 90, 80).stroke();

doc.fontSize(9).font('Helvetica-Bold').fillColor(COLORS.emerald);
doc.text('PROYECCIÓN PARA UN COMERCIO PROMEDIO (25 VENTAS DIARIAS / TICKET $14.000):', 55, roiY + 8);

const roiBullets = [
  '• Ahorro de tiempo administrativo: ~42 horas mensuales recuperadas en arqueos, control de stock y listas de precios.',
  '• Recupero de ventas perdidas: +$540.000 mensuales estimados al evitar quiebres de stock y responder pedidos web al instante.',
  '• Erradicación de diferencias de caja: Auditoría ciega por turnos que previene pérdidas de dinero en efectivo.',
  '• Amortización del sistema: El software se paga a sí mismo en los primeros 30 a 60 días de implementación.'
];

let ryY = roiY + 24;
doc.fontSize(8).font('Helvetica').fillColor(COLORS.textDark);
roiBullets.forEach(b => {
  doc.text(b, 55, ryY, { width: doc.page.width - 110 });
  ryY += 13;
});

doc.y = roiY + 95;
doc.fontSize(13).font('Helvetica-Bold').fillColor(COLORS.primary);
doc.text('2. ROLΦ Studio • Ingeniería & Desarrollo de Software a Medida');
doc.moveDown(0.3);

doc.fontSize(9).font('Helvetica').fillColor(COLORS.textDark).lineGap(2.5);
doc.text(
  'En ROLΦ Studio no somos simples revendedores de software enlatado: somos los autores y desarrolladores directos ' +
  'de este sistema. Bajo nuestra filosofía de "Pequeñas herramientas para grandes ideas", creamos todo tipo de ' +
  'aplicaciones tecnológicas adaptadas exactamente a los procesos y requerimientos específicos de cada negocio:',
  { width: doc.page.width - 90, align: 'justify' }
);

doc.moveDown(0.5);

// Cuadrantes de servicios
const srvY = doc.y;
const colW = (doc.page.width - 100) / 2;

function drawServiceBox(x, y, title, desc) {
  doc.rect(x, y, colW, 48).fill(COLORS.white);
  doc.strokeColor(COLORS.border).lineWidth(0.5).rect(x, y, colW, 48).stroke();
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(COLORS.accentDark);
  doc.text(title, x + 8, y + 6);
  doc.fontSize(7.5).font('Helvetica').fillColor(COLORS.textMuted);
  doc.text(desc, x + 8, y + 18, { width: colW - 16, lineGap: 1.5 });
}

drawServiceBox(45, srvY, '📱 Aplicaciones Móviles (Android & iOS)', 'Apps nativas para clientes, preventistas o logística de entregas vinculadas a base central.');
drawServiceBox(45 + colW + 10, srvY, '💻 Sistemas Web & Portales Corporativos', 'Intranets para sucursales, tableros de control de gerencia y portales de autogestión.');

drawServiceBox(45, srvY + 54, '🖨️ Integración con Hardware Comercial', 'Conexión con impresoras térmicas de comandas, gavetas de dinero y lectores ópticos.');
drawServiceBox(45 + colW + 10, srvY + 54, '⚡ Automatizaciones & Canales WhatsApp', 'Bots de confirmación de pedidos, alertas de cobranza y presupuestos automatizados.');

// Cuadro final de contacto y contratación
doc.y = srvY + 115;
doc.rect(45, doc.y, doc.page.width - 90, 75).fill('#0f172a');
doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.white);
doc.text('¿CÓMO IMPLEMENTAR EL SISTEMA EN TU COMERCIO?', 58, doc.y + 10);

doc.fontSize(8.5).font('Helvetica').fillColor('#94a3b8').lineGap(2);
doc.text(
  'La puesta en marcha incluye configuración personalizada con tu logotipo, carga inicial de categorías, ' +
  'capacitación al personal y acompañamiento técnico directo con los desarrolladores, sin intermediarios.',
  58, doc.y + 24, { width: doc.page.width - 120 }
);

doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.accent);
doc.text('Línea Directa / WhatsApp: +54 9 2241 527357  •  Web: https://gestion-integral-comercios.vercel.app', 58, doc.y + 55);

// ==========================================
// PIE DE PÁGINA EN TODAS LAS PÁGINAS
// ==========================================
const pages = doc.bufferedPageRange();
for (let i = 0; i < pages.count; i++) {
  doc.switchToPage(i);
  if (i > 0) { // Omitir pie en la portada
    drawFooter(doc, i + 1, pages.count);
  }
}

doc.end();

writeStreamClient.on('finish', () => {
  console.log(`Dossier PDF generated successfully at:\n${outputPathClient}\n${outputPathRoot}`);
});
