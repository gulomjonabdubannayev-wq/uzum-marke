import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { StoreProvider, useStore, CartItem, Order } from './store';
import { products, categories, brands, formatPrice, locations, Product } from './data';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, ChevronRight, Star, Truck, Package, MapPin, Globe, Plus, Minus, Trash2, ArrowLeft, Filter, SlidersHorizontal, Clock, Tag, Award, TrendingUp, Zap, Gift, Smartphone, Shield, CreditCard, Check, ChevronUp, Eye, Home, Grid3X3, Phone, Mail, MessageCircle } from 'lucide-react';

// Toast notification system
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error' | 'info'; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-4 right-4 z-[100] ${bgColor} text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in flex items-center gap-2`}>
      {type === 'success' && <Check size={18} />}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70"><X size={16} /></button>
    </div>
  );
}

// Header Component
function Header({ onNavigate, currentPage, onSearch }: { onNavigate: (page: string, data?: any) => void; currentPage: string; onSearch: (q: string) => void }) {
  const { state, dispatch, cartCount } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCatalog, setShowCatalog] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target as Node)) {
        setShowCatalog(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      onNavigate('search', { query: searchQuery.trim() });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">🎉 Barcha mahsulotlarga 50% gacha chegirma!</span>
            <span className="sm:hidden">🎉 50% gacha chegirma!</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">📞 +998 71 200 00 00</span>
            <div className="relative">
              <button onClick={() => setShowLang(!showLang)} className="flex items-center gap-1 hover:opacity-80">
                <Globe size={14} />
                <span>{state.language === 'uz' ? "O'zb" : state.language === 'ru' ? 'Рус' : 'Eng'}</span>
              </button>
              {showLang && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl border py-1 min-w-[120px]">
                  {(['uz', 'ru', 'en'] as const).map(lang => (
                    <button key={lang} onClick={() => { dispatch({ type: 'SET_LANGUAGE', language: lang }); setShowLang(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${state.language === lang ? 'text-violet-600 font-medium' : 'text-gray-700'}`}>
                      {lang === 'uz' ? "O'zbekcha" : lang === 'ru' ? 'Русский' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>

          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              SavdoZone
            </span>
          </button>

          {/* Catalog button */}
          <div className="relative" ref={catalogRef}>
            <button onClick={() => setShowCatalog(!showCatalog)}
              className="hidden lg:flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all">
              <Grid3X3 size={18} />
              <span>Katalog</span>
              <ChevronDown size={16} className={`transition-transform ${showCatalog ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega menu */}
            {showCatalog && (
              <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                <div className="grid grid-cols-3 gap-0 max-h-[500px] overflow-y-auto">
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => { onNavigate('category', { categoryId: cat.id }); setShowCatalog(false); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 text-left group transition-colors border-b border-gray-50">
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <div className="font-medium text-sm text-gray-800 group-hover:text-violet-600">{cat.nameUz}</div>
                        <div className="text-xs text-gray-400">{cat.subcategories.length} bo'lim</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                placeholder="Mahsulotlarni qidirish..."
                className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-sm" />
              <button type="submit" className="absolute right-1 top-1 bottom-1 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Location */}
          <div className="hidden lg:block relative">
            <button onClick={() => setShowLocation(!showLocation)} className="flex items-center gap-1 text-sm text-gray-600 hover:text-violet-600">
              <MapPin size={16} />
              <span>{state.location}</span>
            </button>
            {showLocation && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border py-2 min-w-[180px] max-h-[300px] overflow-y-auto z-50">
                {locations.map(loc => (
                  <button key={loc} onClick={() => { dispatch({ type: 'SET_LOCATION', location: loc }); setShowLocation(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-violet-50 ${state.location === loc ? 'text-violet-600 font-medium' : 'text-gray-700'}`}>
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto">
            <button onClick={() => onNavigate('favorites')} className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors" title="Sevimlilar">
              <Heart size={22} className="text-gray-600" />
              {state.favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {state.favorites.length}
                </span>
              )}
            </button>
            <button onClick={() => onNavigate('cart')} className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors" title="Savatcha">
              <ShoppingCart size={22} className="text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-violet-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => onNavigate(state.user.isLoggedIn ? 'account' : 'login')}
              className="hidden sm:flex items-center gap-2 p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
              <User size={22} className="text-gray-600" />
              <span className="text-sm text-gray-600 hidden xl:inline">
                {state.user.isLoggedIn ? state.user.name : 'Kirish'}
              </span>
            </button>
          </div>

          {/* Mobile search toggle */}
          <button onClick={() => setShowSearchMobile(!showSearchMobile)} className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl">
            <Search size={22} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile search */}
        {showSearchMobile && (
          <form onSubmit={handleSearch} className="md:hidden mt-3">
            <div className="relative">
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                placeholder="Mahsulotlarni qidirish..."
                className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none text-sm" />
              <button type="submit" className="absolute right-1 top-1 bottom-1 px-4 bg-violet-600 text-white rounded-lg">
                <Search size={18} />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setShowMobileMenu(false)}>
          <div className="w-80 h-full bg-white overflow-y-auto animate-slide-in-left" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between">
              <span className="font-bold text-lg">Katalog</span>
              <button onClick={() => setShowMobileMenu(false)}><X size={24} /></button>
            </div>
            <div className="p-2">
              {categories.map(cat => (
                <button key={cat.id} onClick={() => { onNavigate('category', { categoryId: cat.id }); setShowMobileMenu(false); }}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-violet-50 rounded-xl text-left">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-medium text-sm">{cat.nameUz}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Product Card Component
function ProductCard({ product, onNavigate, onAddToCart, onToggleFav, isFav }: {
  product: Product; onNavigate: (page: string, data?: any) => void;
  onAddToCart: (p: Product) => void; onToggleFav: (id: number) => void; isFav: boolean;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
      {/* Discount badge */}
      {product.discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          -{product.discount}%
        </div>
      )}

      {/* Favorite button */}
      <button onClick={(e) => { e.stopPropagation(); onToggleFav(product.id); }}
        className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform">
        <Heart size={18} className={isFav ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
      </button>

      {/* Image */}
      <button onClick={() => onNavigate('product', { productId: product.id })} className="block w-full">
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          {!imgLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse" />}
          <img src={product.image} alt={product.title} loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </button>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <button onClick={() => onNavigate('product', { productId: product.id })} className="block text-left">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-violet-600 transition-colors min-h-[2.5rem]">
            {product.title}
          </h3>
        </button>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} />
            ))}
          </div>
          <span className="text-xs text-gray-500">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          </div>
          {product.oldPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
          )}
          {product.monthlyPayment && (
            <div className="text-xs text-violet-600 mt-0.5">
              {formatPrice(product.monthlyPayment)}/oyiga
            </div>
          )}
        </div>

        {/* Delivery */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <Truck size={12} />
          <span>{product.deliveryDays} kunda yetkazish</span>
        </div>

        {/* Add to cart */}
        <button onClick={() => onAddToCart(product)}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-xl text-sm font-medium transition-colors active:scale-95">
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
}

// Product Detail Component
function ProductDetail({ productId, onNavigate }: { productId: number; onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const product = products.find(p => p.id === productId);
  if (!product) return <div className="text-center py-20 text-gray-500">Mahsulot topilmadi</div>;

  useEffect(() => {
    dispatch({ type: 'ADD_RECENTLY_VIEWED', productId });
  }, [productId]);

  const isFav = state.favorites.includes(productId);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 8);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) dispatch({ type: 'ADD_TO_CART', product });
    setShowToast({ message: 'Savatga qo\'shildi!', type: 'success' });
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) dispatch({ type: 'ADD_TO_CART', product });
    onNavigate('checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {showToast && <Toast {...showToast} onClose={() => setShowToast(null)} />}

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <button onClick={() => onNavigate('home')} className="hover:text-violet-600">Bosh sahifa</button>
        <ChevronRight size={14} />
        <button onClick={() => onNavigate('category', { categoryId: product.category })} className="hover:text-violet-600">
          {categories.find(c => c.id === product.category)?.nameUz}
        </button>
        <ChevronRight size={14} />
        <span className="text-gray-800 truncate">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
            <img src={product.images[selectedImage]} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 ${selectedImage === i ? 'border-violet-500' : 'border-gray-200'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            <button onClick={() => dispatch({ type: isFav ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES', productId })}
              className="p-3 rounded-xl border hover:bg-gray-50 shrink-0">
              <Heart size={22} className={isFav ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews} sharh)</span>
            <span className="text-sm text-green-600 font-medium">✓ {product.reviews} ta sotilgan</span>
          </div>

          {/* Price */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.oldPrice > product.price && (
                <>
                  <span className="text-lg text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded">-{product.discount}%</span>
                </>
              )}
            </div>
            {product.monthlyPayment && (
              <div className="mt-2 text-sm text-violet-600 font-medium">
                💳 {formatPrice(product.monthlyPayment)} / oyiga muddatli to'lov
              </div>
            )}
          </div>

          {/* Availability */}
          <div className="mt-4 flex items-center gap-2">
            {product.availability ? (
              <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                <Check size={16} /> Mavjud
              </span>
            ) : (
              <span className="text-red-500 text-sm font-medium">Mavjud emas</span>
            )}
          </div>

          {/* Delivery */}
          <div className="mt-4 p-4 border rounded-xl space-y-3">
            <div className="flex items-center gap-3">
              <Truck size={20} className="text-violet-600" />
              <div>
                <div className="text-sm font-medium">Yetkazib berish</div>
                <div className="text-xs text-gray-500">{product.deliveryDays} kun ichida • Bepul</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-violet-600" />
              <div>
                <div className="text-sm font-medium">Kafolat</div>
                <div className="text-xs text-gray-500">12 oy rasmiy kafolat</div>
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Miqdor:</span>
            <div className="flex items-center border rounded-xl overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-gray-50">
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 font-medium border-x">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-50">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button onClick={handleAddToCart}
              className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-3.5 rounded-xl font-medium transition-colors active:scale-95">
              Savatga qo'shish
            </button>
            <button onClick={handleBuyNow}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-medium transition-colors active:scale-95">
              Hozir sotib olish
            </button>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-3">Tavsif</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Xususiyatlari</h2>
            <div className="border rounded-xl overflow-hidden">
              {Object.entries(product.specifications).map(([key, value], i) => (
                <div key={key} className={`flex justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <span className="text-gray-500">{key}</span>
                  <span className="font-medium text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">O'xshash mahsulotlar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onNavigate={onNavigate}
                onAddToCart={(prod) => dispatch({ type: 'ADD_TO_CART', product: prod })}
                onToggleFav={(id) => dispatch({ type: state.favorites.includes(id) ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES', productId: id })}
                isFav={state.favorites.includes(p.id)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Cart Component
function Cart({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch, cartTotal, cartDiscount } = useStore();
  const deliveryCost = cartTotal > 500000 ? 0 : 30000;

  if (state.cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Savat bo'sh</h2>
        <p className="text-gray-500 mb-6">Mahsulotlarni qo'shing va xaridni boshlang</p>
        <button onClick={() => onNavigate('home')} className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-medium">
          Xarid qilish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Savat ({state.cart.length} mahsulot)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-3">
          {state.cart.map(item => (
            <div key={item.product.id} className="bg-white border rounded-xl p-4 flex gap-4">
              <img src={item.product.image} alt={item.product.title} className="w-20 h-20 object-cover rounded-lg shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm text-gray-800 line-clamp-2">{item.product.title}</h3>
                <div className="text-sm text-gray-500 mt-1">{item.product.brand}</div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity: item.quantity - 1 })}
                      className="px-2.5 py-1.5 hover:bg-gray-50"><Minus size={14} /></button>
                    <span className="px-3 py-1.5 text-sm font-medium border-x">{item.quantity}</span>
                    <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity: item.quantity + 1 })}
                      className="px-2.5 py-1.5 hover:bg-gray-50"><Plus size={14} /></button>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{formatPrice(item.product.price * item.quantity)}</div>
                    {item.product.oldPrice > item.product.price && (
                      <div className="text-xs text-gray-400 line-through">{formatPrice(item.product.oldPrice * item.quantity)}</div>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', productId: item.product.id })}
                className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 self-start">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })}
            className="text-sm text-red-500 hover:text-red-600 font-medium">
            Savatni tozalash
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white border rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-bold text-lg mb-4">Buyurtma xulosasi</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Mahsulotlar ({state.cart.reduce((s, i) => s + i.quantity, 0)} ta)</span>
              <span>{formatPrice(cartTotal + cartDiscount)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Chegirma</span>
              <span>-{formatPrice(cartDiscount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Yetkazib berish</span>
              <span className={deliveryCost === 0 ? 'text-green-600' : ''}>{deliveryCost === 0 ? 'Bepul' : formatPrice(deliveryCost)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-bold">
              <span>Jami</span>
              <span>{formatPrice(cartTotal + deliveryCost)}</span>
            </div>
          </div>
          <button onClick={() => onNavigate('checkout')}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3.5 rounded-xl font-medium mt-6 transition-colors">
            Rasmiylashtirish
          </button>
          <button onClick={() => onNavigate('home')}
            className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium mt-3 hover:bg-gray-50">
            Xaridni davom ettirish
          </button>
        </div>
      </div>
    </div>
  );
}

// Checkout Component
function Checkout({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch, cartTotal } = useStore();
  const [form, setForm] = useState({ name: '', phone: '', address: '', deliveryMethod: 'courier', paymentMethod: 'cash' });
  const [orderPlaced, setOrderPlaced] = useState<Order | null>(null);
  const [showToast, setShowToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const deliveryCost = cartTotal > 500000 ? 0 : 30000;
  const total = cartTotal + deliveryCost;

  if (state.cart.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Savat bo'sh</h2>
        <button onClick={() => onNavigate('home')} className="bg-violet-600 text-white px-8 py-3 rounded-xl">Bosh sahifaga</button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Buyurtma qabul qilindi!</h1>
        <p className="text-gray-500 mb-8">Tez orada siz bilan bog'lanamiz</p>
        <div className="bg-white border rounded-xl p-6 text-left space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Buyurtma raqami</span>
            <span className="font-bold">#{orderPlaced.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Yetkazib berish</span>
            <span className="font-medium">3-5 kun ichida</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Jami summa</span>
            <span className="font-bold text-lg">{formatPrice(orderPlaced.total)}</span>
          </div>
          <hr />
          <div>
            <span className="text-gray-500 text-sm">Mahsulotlar:</span>
            {orderPlaced.items.map(item => (
              <div key={item.product.id} className="flex justify-between text-sm mt-2">
                <span className="text-gray-700">{item.product.title} × {item.quantity}</span>
                <span>{formatPrice(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => onNavigate('home')} className="mt-8 bg-violet-600 text-white px-8 py-3 rounded-xl font-medium">
          Bosh sahifaga qaytish
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      setShowToast({ message: 'Barcha maydonlarni to\'ldiring', type: 'error' });
      return;
    }
    const order: Order = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: [...state.cart],
      total,
      date: new Date().toISOString(),
      status: 'confirmed',
      customerInfo: form,
    };
    dispatch({ type: 'ADD_ORDER', order });
    setOrderPlaced(order);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {showToast && <Toast {...showToast} onClose={() => setShowToast(null)} />}
      <button onClick={() => onNavigate('cart')} className="flex items-center gap-2 text-gray-500 hover:text-violet-600 mb-6">
        <ArrowLeft size={18} /> Savatga qaytish
      </button>
      <h1 className="text-2xl font-bold mb-6">Buyurtmani rasmiylashtirish</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          {/* Customer info */}
          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-4">Mijoz ma'lumotlari</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ism</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-xl px-4 py-2.5 focus:border-violet-500 focus:outline-none" placeholder="Ismingiz" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border rounded-xl px-4 py-2.5 focus:border-violet-500 focus:outline-none" placeholder="+998 90 123 45 67" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Manzil</label>
              <input type="text" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })}
                className="w-full border rounded-xl px-4 py-2.5 focus:border-violet-500 focus:outline-none" placeholder="To'liq manzil" />
            </div>
          </div>

          {/* Delivery */}
          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-4">Yetkazib berish</h2>
            <div className="space-y-3">
              {[
                { id: 'courier', label: 'Kuryer orqali', desc: '1-3 kun ichida', price: deliveryCost },
                { id: 'pickup', label: 'Punktdan olish', desc: '1-2 kun ichida', price: 0 },
              ].map(method => (
                <label key={method.id} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${form.deliveryMethod === method.id ? 'border-violet-500 bg-violet-50' : 'hover:bg-gray-50'}`}>
                  <input type="radio" name="delivery" value={method.id} checked={form.deliveryMethod === method.id}
                    onChange={e => setForm({ ...form, deliveryMethod: e.target.value })} className="accent-violet-600" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{method.label}</div>
                    <div className="text-xs text-gray-500">{method.desc}</div>
                  </div>
                  <span className="text-sm font-medium">{method.price === 0 ? 'Bepul' : formatPrice(method.price)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-4">To'lov usuli</h2>
            <div className="space-y-3">
              {[
                { id: 'cash', label: 'Naqd pul', icon: '💵' },
                { id: 'card', label: 'Plastik karta', icon: '💳' },
                { id: 'transfer', label: "Bank o'tkazmasi", icon: '🏦' },
              ].map(method => (
                <label key={method.id} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${form.paymentMethod === method.id ? 'border-violet-500 bg-violet-50' : 'hover:bg-gray-50'}`}>
                  <input type="radio" name="payment" value={method.id} checked={form.paymentMethod === method.id}
                    onChange={e => setForm({ ...form, paymentMethod: e.target.value })} className="accent-violet-600" />
                  <span className="text-xl">{method.icon}</span>
                  <span className="font-medium text-sm">{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-bold text-lg transition-colors">
            Buyurtmani tasdiqlash
          </button>
        </form>

        {/* Order summary */}
        <div className="bg-white border rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-bold text-lg mb-4">Buyurtma</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {state.cart.map(item => (
              <div key={item.product.id} className="flex gap-3">
                <img src={item.product.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{item.product.title}</div>
                  <div className="text-xs text-gray-500">{item.quantity} × {formatPrice(item.product.price)}</div>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-500">Mahsulotlar</span><span>{formatPrice(cartTotal)}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Yetkazish</span><span>{deliveryCost === 0 ? 'Bepul' : formatPrice(deliveryCost)}</span></div>
            <hr />
            <div className="flex justify-between font-bold text-lg"><span>Jami</span><span>{formatPrice(total)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Favorites Component
function Favorites({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const favProducts = products.filter(p => state.favorites.includes(p.id));

  if (favProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <Heart size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sevimlilar bo'sh</h2>
        <p className="text-gray-500 mb-6">Yoqtirgan mahsulotlaringizni qo'shing</p>
        <button onClick={() => onNavigate('home')} className="bg-violet-600 text-white px-8 py-3 rounded-xl font-medium">Xarid qilish</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Sevimlilar ({favProducts.length})</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {favProducts.map(p => (
          <ProductCard key={p.id} product={p} onNavigate={onNavigate}
            onAddToCart={(prod) => dispatch({ type: 'ADD_TO_CART', product: prod })}
            onToggleFav={(id) => dispatch({ type: 'REMOVE_FROM_FAVORITES', productId: id })}
            isFav={true} />
        ))}
      </div>
    </div>
  );
}

// Auth Component
function Auth({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState<'phone' | 'code' | 'register'>('phone');
  const [isRegister, setIsRegister] = useState(false);
  const [showToast, setShowToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 9) {
      setShowToast({ message: "Telefon raqamni kiriting", type: 'error' });
      return;
    }
    setStep(isRegister ? 'register' : 'code');
    setShowToast({ message: "Tasdiqlash kodi yuborildi: 1234", type: 'info' });
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '1234' || code.length === 4) {
      dispatch({ type: 'LOGIN', phone, name: name || 'Foydalanuvchi' });
      setShowToast({ message: "Muvaffaqiyatli kirdingiz!", type: 'success' });
      setTimeout(() => onNavigate('home'), 1000);
    } else {
      setShowToast({ message: "Noto'g'ri kod", type: 'error' });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setShowToast({ message: "Ismingizni kiriting", type: 'error' });
      return;
    }
    dispatch({ type: 'LOGIN', phone, name });
    setShowToast({ message: "Ro'yxatdan o'tdingiz!", type: 'success' });
    setTimeout(() => onNavigate('home'), 1000);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      {showToast && <Toast {...showToast} onClose={() => setShowToast(null)} />}
      <div className="bg-white border rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="text-2xl font-bold">{isRegister ? "Ro'yxatdan o'tish" : 'Kirish'}</h1>
          <p className="text-gray-500 text-sm mt-1">SavdoZone ga xush kelibsiz</p>
        </div>

        {step === 'phone' && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon raqam</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:border-violet-500 focus:outline-none" placeholder="+998 90 123 45 67" />
            </div>
            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-medium">
              {isRegister ? "Ro'yxatdan o'tish" : "Kirish"}
            </button>
            <div className="text-center">
              <button type="button" onClick={() => setIsRegister(!isRegister)} className="text-violet-600 text-sm hover:underline">
                {isRegister ? "Allaqachon akkauntingiz bormi? Kirish" : "Akkaunt yo'qmi? Ro'yxatdan o'tish"}
              </button>
            </div>
          </form>
        )}

        {step === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ismingiz</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:border-violet-500 focus:outline-none" placeholder="Ismingiz" />
            </div>
            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-medium">
              Davom etish
            </button>
          </form>
        )}

        {step === 'code' && (
          <form onSubmit={handleVerify} className="space-y-4">
            <p className="text-sm text-gray-500 text-center">{phone} raqamiga kod yuborildi</p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tasdiqlash kodi</label>
              <input type="text" value={code} onChange={e => setCode(e.target.value)} maxLength={4}
                className="w-full border rounded-xl px-4 py-3 text-center text-2xl tracking-widest focus:border-violet-500 focus:outline-none" placeholder="• • • •" />
            </div>
            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-medium">
              Tasdiqlash
            </button>
            <button type="button" onClick={() => setStep('phone')} className="text-sm text-gray-500 hover:text-violet-600 w-full text-center">
              Raqamni o'zgartirish
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Account Component
function Account({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const recentProducts = products.filter(p => state.recentlyViewed.includes(p.id)).slice(0, 8);

  if (!state.user.isLoggedIn) {
    return <Auth onNavigate={onNavigate} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
              <User size={24} className="text-violet-600" />
            </div>
            <div>
              <div className="font-bold">{state.user.name}</div>
              <div className="text-sm text-gray-500">{state.user.phone}</div>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { label: 'Buyurtmalar', icon: Package, count: state.user.orders.length },
              { label: 'Sevimlilar', icon: Heart, count: state.favorites.length },
              { label: 'Ko\'rilganlar', icon: Eye, count: state.recentlyViewed.length },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <item.icon size={18} className="text-gray-500" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.count > 0 && <span className="text-xs bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full">{item.count}</span>}
              </div>
            ))}
          </nav>
          <button onClick={() => { dispatch({ type: 'LOGOUT' }); onNavigate('home'); }}
            className="w-full mt-6 text-red-500 text-sm font-medium hover:bg-red-50 py-2 rounded-lg">
            Chiqish
          </button>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Orders */}
          {state.user.orders.length > 0 && (
            <div className="bg-white border rounded-xl p-6">
              <h2 className="font-bold text-lg mb-4">Oxirgi buyurtmalar</h2>
              <div className="space-y-3">
                {state.user.orders.slice(0, 5).map(order => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">#{order.id}</div>
                      <div className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm">{formatPrice(order.total)}</div>
                      <div className="text-xs text-green-600">{order.status === 'confirmed' ? 'Tasdiqlangan' : order.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recently viewed */}
          {recentProducts.length > 0 && (
            <div>
              <h2 className="font-bold text-lg mb-4">Siz ko'rgan mahsulotlar</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {recentProducts.map(p => (
                  <ProductCard key={p.id} product={p} onNavigate={onNavigate}
                    onAddToCart={(prod) => dispatch({ type: 'ADD_TO_CART', product: prod })}
                    onToggleFav={(id) => dispatch({ type: state.favorites.includes(id) ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES', productId: id })}
                    isFav={state.favorites.includes(p.id)} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Search/Results Component
function SearchResults({ query, onNavigate }: { query: string; onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let filtered = products.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(query.toLowerCase())
    );

    if (selectedCategory) filtered = filtered.filter(p => p.category === selectedCategory);
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (minRating > 0) filtered = filtered.filter(p => p.rating >= minRating);

    switch (sortBy) {
      case 'cheapest': filtered.sort((a, b) => a.price - b.price); break;
      case 'expensive': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'newest': filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case 'discount': filtered.sort((a, b) => b.discount - a.discount); break;
      default: filtered.sort((a, b) => b.reviews - a.reviews);
    }
    return filtered;
  }, [query, sortBy, selectedCategory, priceRange, minRating]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">"{query}" bo'yicha natijalar</h1>
          <p className="text-gray-500 text-sm mt-1">{results.length} ta mahsulot topildi</p>
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 border px-4 py-2 rounded-xl">
          <SlidersHorizontal size={16} /> Filtrlar
        </button>
      </div>

      <div className="flex gap-6">
        {/* Filters sidebar */}
        <div className={`${showFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'} lg:block lg:static lg:w-64 shrink-0`}>
          {showFilters && (
            <button onClick={() => setShowFilters(false)} className="lg:hidden mb-4 flex items-center gap-2 text-gray-500">
              <X size={20} /> Yopish
            </button>
          )}
          <div className="space-y-6">
            {/* Sort */}
            <div>
              <h3 className="font-bold text-sm mb-2">Saralash</h3>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="w-full border rounded-xl px-3 py-2 text-sm">
                <option value="popular">Ommabop</option>
                <option value="cheapest">Arzon</option>
                <option value="expensive">Qimmat</option>
                <option value="rating">Yuqori baho</option>
                <option value="newest">Yangi</option>
                <option value="discount">Katta chegirma</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <h3 className="font-bold text-sm mb-2">Kategoriya</h3>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}
                className="w-full border rounded-xl px-3 py-2 text-sm">
                <option value="">Barchasi</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.nameUz}</option>)}
              </select>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-bold text-sm mb-2">Narx</h3>
              <div className="flex gap-2">
                <input type="number" value={priceRange[0]} onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                  className="w-full border rounded-lg px-2 py-1.5 text-sm" placeholder="Dan" />
                <input type="number" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                  className="w-full border rounded-lg px-2 py-1.5 text-sm" placeholder="Gacha" />
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="font-bold text-sm mb-2">Reyting</h3>
              <div className="space-y-2">
                {[0, 3, 4, 4.5].map(r => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="rating" checked={minRating === r} onChange={() => setMinRating(r)} className="accent-violet-600" />
                    <span className="text-sm">{r === 0 ? 'Barchasi' : `${r}+ ★`}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="flex-1">
          {results.length === 0 ? (
            <div className="text-center py-20">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-700">Hech narsa topilmadi</h3>
              <p className="text-gray-500 text-sm mt-1">Boshqa kalit so'z bilan qidirib ko'ring</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {results.map(p => (
                <ProductCard key={p.id} product={p} onNavigate={onNavigate}
                  onAddToCart={(prod) => dispatch({ type: 'ADD_TO_CART', product: prod })}
                  onToggleFav={(id) => dispatch({ type: state.favorites.includes(id) ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES', productId: id })}
                  isFav={state.favorites.includes(p.id)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Category Page
function CategoryPage({ categoryId, onNavigate }: { categoryId: string; onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const [sortBy, setSortBy] = useState('popular');
  const cat = categories.find(c => c.id === categoryId);
  const catProducts = useMemo(() => {
    let filtered = products.filter(p => p.category === categoryId);
    switch (sortBy) {
      case 'cheapest': filtered.sort((a, b) => a.price - b.price); break;
      case 'expensive': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'discount': filtered.sort((a, b) => b.discount - a.discount); break;
      default: filtered.sort((a, b) => b.reviews - a.reviews);
    }
    return filtered;
  }, [categoryId, sortBy]);

  if (!cat) return <div className="text-center py-20">Kategoriya topilmadi</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <button onClick={() => onNavigate('home')} className="hover:text-violet-600">Bosh sahifa</button>
        <ChevronRight size={14} />
        <span className="text-gray-800 font-medium">{cat.nameUz}</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{cat.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{cat.nameUz}</h1>
            <p className="text-gray-500 text-sm">{catProducts.length} ta mahsulot</p>
          </div>
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}
          className="border rounded-xl px-4 py-2 text-sm">
          <option value="popular">Ommabop</option>
          <option value="cheapest">Arzon</option>
          <option value="expensive">Qimmat</option>
          <option value="rating">Yuqori baho</option>
          <option value="discount">Katta chegirma</option>
        </select>
      </div>

      {/* Subcategories */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {cat.subcategories.map(sub => (
          <button key={sub} className="px-4 py-2 bg-gray-100 hover:bg-violet-100 hover:text-violet-600 rounded-full text-sm whitespace-nowrap transition-colors">
            {sub}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {catProducts.map(p => (
          <ProductCard key={p.id} product={p} onNavigate={onNavigate}
            onAddToCart={(prod) => dispatch({ type: 'ADD_TO_CART', product: prod })}
            onToggleFav={(id) => dispatch({ type: state.favorites.includes(id) ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES', productId: id })}
            isFav={state.favorites.includes(p.id)} />
        ))}
      </div>
    </div>
  );
}

// Homepage Component
function HomePage({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const { state, dispatch } = useStore();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const flashSaleProducts = products.filter(p => p.discount >= 20).slice(0, 8);
  const popularProducts = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 10);
  const newProducts = products.filter(p => p.isNew).slice(0, 8);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 8);
  const discountProducts = [...products].sort((a, b) => b.discount - a.discount).slice(0, 8);
  const recentProducts = products.filter(p => state.recentlyViewed.includes(p.id)).slice(0, 4);
  const recommendedProducts = products.slice(0, 10);

  const addToCart = useCallback((p: Product) => {
    dispatch({ type: 'ADD_TO_CART', product: p });
    setToast({ message: 'Savatga qo\'shildi!', type: 'success' });
  }, [dispatch]);

  const toggleFav = useCallback((id: number) => {
    dispatch({ type: state.favorites.includes(id) ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES', productId: id });
  }, [dispatch, state.favorites]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      {/* Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 h-[200px] sm:h-[300px] lg:h-[380px]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="relative h-full flex items-center px-6 sm:px-12 lg:px-16">
          <div className="max-w-lg">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              🔥 Super chegirmalar
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              50% gacha chegirma barcha mahsulotlarga
            </h1>
            <p className="text-white/80 text-sm sm:text-base mb-6 hidden sm:block">
              Minglab mahsulotlar, tez yetkazib berish, qulay narxlar
            </p>
            <button onClick={() => onNavigate('search', { query: '' })}
              className="bg-white text-violet-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
              Xarid qilish →
            </button>
          </div>
        </div>
      </section>

      {/* Promo banners */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: 'Bepul yetkazish', desc: '500,000 so\'mdan oshgan buyurtmalarga', icon: '🚚', color: 'from-blue-500 to-cyan-500' },
          { title: 'Muddatli to\'lov', desc: '12 oygacha foizsiz bo\'lib to\'lash', icon: '💳', color: 'from-emerald-500 to-teal-500' },
          { title: '100% kafolat', desc: 'Barcha mahsulotlar kafolatlangan', icon: '🛡️', color: 'from-orange-500 to-amber-500' },
        ].map((promo, i) => (
          <div key={i} className={`bg-gradient-to-r ${promo.color} rounded-2xl p-5 text-white`}>
            <span className="text-3xl mb-2 block">{promo.icon}</span>
            <h3 className="font-bold text-sm">{promo.title}</h3>
            <p className="text-white/80 text-xs mt-1">{promo.desc}</p>
          </div>
        ))}
      </section>

      {/* Flash Sale */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap size={24} className="text-orange-500" />
            <h2 className="text-xl font-bold">Tez sotuv</h2>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">🔥</span>
          </div>
          <button onClick={() => onNavigate('search', { query: 'chegirma' })} className="text-violet-600 text-sm font-medium hover:underline">
            Barchasi →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {flashSaleProducts.map(p => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section>
        <h2 className="text-xl font-bold mb-4">Ommabop kategoriyalar</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.slice(0, 12).map(cat => (
            <button key={cat.id} onClick={() => onNavigate('category', { categoryId: cat.id })}
              className="bg-white border rounded-2xl p-4 text-center hover:border-violet-300 hover:shadow-md transition-all group">
              <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-700 group-hover:text-violet-600">{cat.nameUz}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={22} className="text-violet-600" />
            <h2 className="text-xl font-bold">Ommabop mahsulotlar</h2>
          </div>
          <button onClick={() => onNavigate('search', { query: '' })} className="text-violet-600 text-sm font-medium hover:underline">
            Barchasi →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularProducts.map(p => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gift size={22} className="text-emerald-500" />
            <h2 className="text-xl font-bold">Yangi kelganlar</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {newProducts.map(p => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award size={22} className="text-amber-500" />
            <h2 className="text-xl font-bold">Eng ko'p sotilganlar</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellers.map(p => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* Discount Products */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Tag size={22} className="text-red-500" />
            <h2 className="text-xl font-bold">Katta chegirmalar</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {discountProducts.map(p => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* Recently Viewed */}
      {recentProducts.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock size={22} className="text-gray-500" />
            <h2 className="text-xl font-bold">Siz ko'rgan mahsulotlar</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recentProducts.map(p => (
              <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
            ))}
          </div>
        </section>
      )}

      {/* Recommended */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Star size={22} className="text-violet-500" />
          <h2 className="text-xl font-bold">Siz uchun tavsiya</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {recommendedProducts.map(p => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} onAddToCart={addToCart} onToggleFav={toggleFav} isFav={state.favorites.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* Top Brands */}
      <section>
        <h2 className="text-xl font-bold mb-4">Top brendlar</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {['Samsung', 'Apple', 'Nike', 'Adidas', 'Sony', 'Xiaomi', 'Bosch', 'LG', 'Dyson', 'Canon', 'Philips', 'JBL'].map(brand => (
            <button key={brand} onClick={() => onNavigate('search', { query: brand })}
              className="bg-white border rounded-xl p-4 text-center hover:border-violet-300 hover:shadow-md transition-all">
              <span className="text-sm font-bold text-gray-700">{brand}</span>
            </button>
          ))}
        </div>
      </section>

      {/* App Promotion */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-8 text-white text-center">
        <Smartphone size={48} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">SavdoZone ilovasini yuklab oling</h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto">Maxsus ilova chegirmalari, tez buyurtma, push bildirishnomalar</p>
        <div className="flex justify-center gap-3">
          <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/30 transition-colors">
            📱 App Store
          </button>
          <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/30 transition-colors">
            🤖 Google Play
          </button>
        </div>
      </section>
    </div>
  );
}

// Footer Component
function Footer({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-white font-bold text-lg">SavdoZone</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              O'zbekistonning eng yirik onlayn marketplace. Minglab mahsulotlar, qulay narxlar, tez yetkazib berish.
            </p>
            <div className="flex gap-3 mt-4">
              {['📘', '📸', '▶️', '💬'].map((icon, i) => (
                <button key={i} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Mijozlarga</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white transition-colors">Qanday xarid qilish</button></li>
              <li><button className="hover:text-white transition-colors">Yetkazib berish</button></li>
              <li><button className="hover:text-white transition-colors">To'lov usullari</button></li>
              <li><button className="hover:text-white transition-colors">Qaytarish</button></li>
              <li><button className="hover:text-white transition-colors">Ko'p beriladigan savollar</button></li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Sotuvchilarga</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white transition-colors">Sotuvchi bo'lish</button></li>
              <li><button className="hover:text-white transition-colors">Shartnoma</button></li>
              <li><button className="hover:text-white transition-colors">Dokumentatsiya</button></li>
              <li><button className="hover:text-white transition-colors">API</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Kompaniya</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white transition-colors">Biz haqimizda</button></li>
              <li><button className="hover:text-white transition-colors">Karyera</button></li>
              <li><button className="hover:text-white transition-colors">Kontaktlar</button></li>
              <li><button className="hover:text-white transition-colors">Maxfiylik siyosati</button></li>
              <li><button className="hover:text-white transition-colors">Foydalanish shartlari</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Kontaktlar</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} /> +998 71 200 00 00</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@savdozone.uz</li>
              <li className="flex items-center gap-2"><MessageCircle size={14} /> Telegram: @savdozone</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Toshkent, O'zbekiston</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 SavdoZone. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>💳 Humo</span>
            <span>💳 UzCard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Mobile Bottom Navigation
function MobileBottomNav({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {
  const { cartCount, state } = useStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40 safe-area-bottom">
      <div className="flex justify-around items-center py-2">
        {[
          { page: 'home', icon: Home, label: 'Bosh' },
          { page: 'category', icon: Grid3X3, label: 'Katalog' },
          { page: 'cart', icon: ShoppingCart, label: 'Savat', badge: cartCount },
          { page: 'favorites', icon: Heart, label: 'Sevimli', badge: state.favorites.length },
          { page: 'account', icon: User, label: 'Profil' },
        ].map(item => (
          <button key={item.page} onClick={() => onNavigate(item.page)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg ${currentPage === item.page ? 'text-violet-600' : 'text-gray-500'}`}>
            <div className="relative">
              <item.icon size={22} />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-violet-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// Main App Component
function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState<any>(null);

  const navigate = useCallback((page: string, data?: any) => {
    setCurrentPage(page);
    setPageData(data || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSearch = (query: string) => {
    navigate('search', { query });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'product': return <ProductDetail productId={pageData?.productId} onNavigate={navigate} />;
      case 'cart': return <Cart onNavigate={navigate} />;
      case 'checkout': return <Checkout onNavigate={navigate} />;
      case 'favorites': return <Favorites onNavigate={navigate} />;
      case 'login': return <Auth onNavigate={navigate} />;
      case 'account': return <Account onNavigate={navigate} />;
      case 'search': return <SearchResults query={pageData?.query || ''} onNavigate={navigate} />;
      case 'category': return <CategoryPage categoryId={pageData?.categoryId || ''} onNavigate={navigate} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">
      <Header onNavigate={navigate} currentPage={currentPage} onSearch={handleSearch} />
      <main className="pb-20 lg:pb-0">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <MobileBottomNav onNavigate={navigate} currentPage={currentPage} />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
