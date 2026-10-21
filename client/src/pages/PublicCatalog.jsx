import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { 
  ShoppingBag, 
  MessageCircle, 
  FileText, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Heart, 
  Tag, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Camera, 
  Layers, 
  Info, 
  Eye 
} from 'lucide-react';

export default function PublicCatalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [storeSettings, setStoreSettings] = useState({
    store_name: 'Mi Comercio',
    store_subtitle: 'Catálogo Online & Gestión Comercial',
    store_logo: '/assets/logo.svg',
    catalog_whatsapp: '5493416123456',
    currency_symbol: '$'
  });

  // Product Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    loadPublicSettings();
    loadCategories();
  }, []);

  useEffect(() => {
    loadCatalog();
  }, [selectedCategory, search]);

  const loadPublicSettings = async () => {
    try {
      const res = await api.get('/settings/public');
      if (res.data) {
        setStoreSettings(prev => ({
          ...prev,
          ...res.data,
          catalog_whatsapp: res.data.catalog_whatsapp ? String(res.data.catalog_whatsapp).replace(/[^\d+]/g, '') : prev.catalog_whatsapp
        }));
        if (res.data.store_name) {
          document.title = `${res.data.store_name} | Catálogo Online`;
        }
      }
    } catch (err) {
      console.warn('Error al cargar configuración pública:', err);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await api.get('/categories');
      if (Array.isArray(res.data)) {
        setCategories(res.data);
      }
    } catch (err) {
      console.warn('Error al cargar categorías:', err);
    }
  };

  const loadCatalog = async () => {
    setLoading(true);
    try {
      const res = await api.get('/catalog', {
        params: { category: selectedCategory, search }
      });
      if (Array.isArray(res.data)) {
        setProducts(res.data);
      }
    } catch (err) {
      console.warn('Error al cargar catálogo:', err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    window.open('/api/catalog/pdf', '_blank');
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.origin + '/catalogo');
      alert('¡Enlace del catálogo copiado al portapapeles! Ya puedes compartirlo.');
    }
  };

  const handleOpenProductDetail = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
    setSelectedSize('');
  };

  // Helper to extract gallery photos
  const getProductImages = (prod) => {
    if (!prod) return [];
    if (Array.isArray(prod.images) && prod.images.length > 0) {
      return prod.images;
    }
    if (prod.image_url) {
      return [prod.image_url];
    }
    return [];
  };

  const activeProductImages = getProductImages(selectedProduct);
  const whatsappNumber = storeSettings.catalog_whatsapp || '5493416123456';
  const currency = storeSettings.currency_symbol || '$';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-brand-50 via-white to-brand-100">
      {/* Compact Header */}
      <header className="bg-brand-900 text-white py-4 border-b border-brand-800 sticky top-0 z-40 shadow-md">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-600/40 via-brand-900 to-brand-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-4">
            <div className="rounded-xl overflow-hidden shadow-sm bg-slate-900/60 p-1">
              <img 
                src={storeSettings.store_logo || '/assets/logo.svg'} 
                alt={storeSettings.store_name} 
                className="h-14 w-auto max-w-[200px] object-contain"
                onError={(e) => { e.target.src = '/assets/logo.svg'; }}
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-wide">
                {storeSettings.store_name}
              </h1>
              <p className="text-[11px] text-brand-200">
                {storeSettings.store_subtitle || 'Catálogo Online'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap justify-center sm:justify-end gap-y-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition shadow-sm border border-white/20"
              title="Copiar enlace del catálogo"
            >
              <Share2 className="w-4 h-4 sm:mr-1.5" />
              <span className="hidden sm:inline">Compartir</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white transition shadow-sm"
              title="Descargar Catálogo en PDF"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              Descargar PDF
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`¡Hola ${storeSettings.store_name}! Quería hacer una consulta general sobre el catálogo.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Main Content & Filters */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Filter Toolbar */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === ''
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todas las categorías
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat.name
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por nombre, código o talle..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-slate-50"
            />
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 animate-pulse h-80"></div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No se encontraron productos disponibles</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              El catálogo se actualizará en breve con nuevas ofertas y productos disponibles.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const gallery = getProductImages(product);
              const hasImage = gallery.length > 0;
              const isAvailable = product.stock > 0;

              return (
                <div
                  key={product.id}
                  onClick={() => handleOpenProductDetail(product)}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center">
                    {hasImage ? (
                      <img
                        src={gallery[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = '/assets/logo.svg'; }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                        <ShoppingBag className="w-10 h-10 mb-1 opacity-40" />
                        <span className="text-[10px] font-medium">Foto disponible en consulta</span>
                      </div>
                    )}

                    {/* Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                      {product.category_name && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm shadow-sm">
                          {product.category_name}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-2.5 right-2.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
                        isAvailable 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-rose-500 text-white'
                      }`}>
                        {isAvailable ? 'Disponible' : 'Sin Stock'}
                      </span>
                    </div>

                    {gallery.length > 1 && (
                      <span className="absolute bottom-2.5 right-2.5 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg backdrop-blur-sm flex items-center">
                        <Layers className="w-3 h-3 mr-1" />
                        {gallery.length} fotos
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-mono">{product.code}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      {product.description && (
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                          {product.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block leading-none">Precio</span>
                        <span className="text-base font-extrabold text-brand-700">
                          {currency}{Number(product.sale_price).toLocaleString('es-AR')}
                        </span>
                      </div>
                      <span className="inline-flex items-center text-xs font-bold text-brand-600 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-xl transition">
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        Ver Detalle
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative my-auto max-h-[92vh] flex flex-col overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image Preview / Gallery */}
              <div className="flex flex-col">
                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center relative border border-slate-200">
                  {activeProductImages.length > 0 ? (
                    <img
                      src={activeProductImages[activeImageIndex] || activeProductImages[0]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/assets/logo.svg'; }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                      <ShoppingBag className="w-12 h-12 mb-2 opacity-40" />
                      <span className="text-xs">Foto disponible a través de WhatsApp</span>
                    </div>
                  )}

                  {activeProductImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeProductImages.length - 1));
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev < activeProductImages.length - 1 ? prev + 1 : 0));
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {activeProductImages.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    {activeProductImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-14 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 transition ${
                          activeImageIndex === idx ? 'border-brand-600 scale-105' : 'border-slate-200 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    {selectedProduct.category_name && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                        {selectedProduct.category_name}
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400">
                      Cód: {selectedProduct.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {selectedProduct.name}
                  </h3>

                  <div className="mt-3 flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-brand-700">
                      {currency}{Number(selectedProduct.sale_price).toLocaleString('es-AR')}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      selectedProduct.stock > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {selectedProduct.stock > 0 ? 'Disponible' : 'Sin stock inmediato'}
                    </span>
                  </div>

                  {/* Sizes / Talles */}
                  {selectedProduct.sizes && (
                    <div className="mt-4">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Talles / Variantes disponibles:
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.sizes.split(',').map((s) => {
                          const size = s.trim();
                          return (
                            <button
                              key={size}
                              type="button"
                              onClick={() => setSelectedSize(size)}
                              className={`px-3 py-1 text-xs font-bold rounded-xl border transition ${
                                selectedSize === size
                                  ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Descripción del Producto:
                    </label>
                    <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line max-h-40 overflow-y-auto">
                      {selectedProduct.description || 'Producto disponible en catálogo. Consultá para más detalles.'}
                    </p>
                  </div>
                </div>

                {/* Bottom WhatsApp Button */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `¡Hola ${storeSettings.store_name}! Quería consultar por el producto "${selectedProduct.name}" (Código: ${selectedProduct.code})${selectedSize ? ` en talle/variante ${selectedSize}` : ''} de ${currency}${Number(selectedProduct.sale_price).toLocaleString('es-AR')}. ¿Tienen disponibilidad?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-2xl text-xs font-bold transition shadow-lg shadow-emerald-600/30 space-x-2"
                  >
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span>
                      Consultar por WhatsApp {selectedSize ? `(${selectedSize})` : ''}
                    </span>
                  </a>

                  <p className="text-[10px] text-slate-400 text-center pt-1">
                    Te responderá directamente el equipo de ventas de {storeSettings.store_name}.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <img 
              src={storeSettings.store_logo || '/assets/logo.svg'} 
              alt={storeSettings.store_name} 
              className="h-10 w-auto max-w-[150px] object-contain rounded" 
              onError={(e) => { e.target.src = '/assets/logo.svg'; }}
            />
            <div>
              <p className="text-sm font-bold text-slate-900">{storeSettings.store_name}</p>
              <p className="text-xs text-slate-500">{storeSettings.store_subtitle || 'Catálogo Online & Gestión Comercial'}</p>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {storeSettings.store_name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
