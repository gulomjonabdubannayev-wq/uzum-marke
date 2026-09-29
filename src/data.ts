export interface Product {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  availability: boolean;
  monthlyPayment?: number;
  deliveryDays: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameUz: string;
  icon: string;
  subcategories: string[];
}

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', nameUz: 'Elektronika', icon: '💻', subcategories: ['Smartfonlar', 'Noutbuklar', 'Planshetlar', 'Televizorlar', 'Quloqchinlar', 'Kameralar', 'Soatlar'] },
  { id: 'appliances', name: 'Home Appliances', nameUz: 'Maishiy texnika', icon: '🏠', subcategories: ['Kir yuvish mashinalari', 'Muzlatgichlar', 'Changyutgichlar', 'Mikrotulqinli pechlar', 'Dazmollar', 'Konditsionerlar'] },
  { id: 'clothing', name: 'Clothing', nameUz: 'Kiyim-kechak', icon: '👕', subcategories: ['Erkaklar kiyimi', 'Ayollar kiyimi', 'Bolalar kiyimi', 'Sport kiyimlari', 'Rasmiy kiyimlar'] },
  { id: 'shoes', name: 'Shoes', nameUz: 'Poyabzallar', icon: '👟', subcategories: ['Erkaklar poyabzali', 'Ayollar poyabzali', 'Sport poyabzallari', 'Bolalar poyabzali', 'Klassik poyabzallar'] },
  { id: 'accessories', name: 'Accessories', nameUz: 'Aksessuarlar', icon: '⌚', subcategories: ['Soatlar', 'Ko\'zoynaklar', 'Sumkalar', 'Kamarlar', 'Shlyapalar', 'Zargarlik'] },
  { id: 'beauty', name: 'Beauty', nameUz: 'Go\'zallik', icon: '💄', subcategories: ['Yuz parvarishi', 'Soch parvarishi', 'Atirlar', 'Makiyaj', 'Tana parvarishi', 'Tirnoq parvarishi'] },
  { id: 'health', name: 'Health', nameUz: 'Salomatlik', icon: '💊', subcategories: ['Vitaminlar', 'Tibbiy asboblar', 'Sport ovqatlanishi', 'Gigiyena', 'Dori vositalari'] },
  { id: 'home-kitchen', name: 'Home & Kitchen', nameUz: 'Uy va oshxona', icon: '🍳', subcategories: ['Oshxona buyumlari', 'Mebel', 'To\'qimachilik', 'Yoritgichlar', 'Dekor', 'Idish-tovoq'] },
  { id: 'sports', name: 'Sports', nameUz: 'Sport', icon: '⚽', subcategories: ['Fitness', 'Yugurish', 'Velosipedlar', 'Suv sporti', 'Jamoa sportlari', 'Yoga'] },
  { id: 'kids', name: 'Kids', nameUz: 'Bolalar', icon: '🧸', subcategories: ['O\'yinchoqlar', 'Konstruktorlar', 'Bolalar transporti', 'Ta\'lim o\'yinlari', 'Chaqaloqlar uchun'] },
  { id: 'books', name: 'Books', nameUz: 'Kitoblar', icon: '📚', subcategories: ['Badiiy adabiyot', 'Ilmiy adabiyot', 'Bolalar kitoblari', 'Ta\'limiy kitoblar', 'Biznes adabiyoti'] },
  { id: 'food', name: 'Food', nameUz: 'Oziq-ovqat', icon: '🍎', subcategories: ['Mevalar', 'Sabzavotlar', 'Go\'sht', 'Sut mahsulotlari', 'Shirinliklar', 'Ichimliklar'] },
  { id: 'stationery', name: 'Stationery', nameUz: 'Kanselyariya', icon: '✏️', subcategories: ['Daftarlar', 'Ruchkalar', 'Ofis buyumlari', 'Rasmlash', 'Maktab buyumlari'] },
  { id: 'automotive', name: 'Automotive', nameUz: 'Avtomobil', icon: '🚗', subcategories: ['Avtomobil ehtiyot qismlari', 'Aksessuarlar', 'Moylar', 'Shinalar', 'Audio tizimlar'] },
  { id: 'construction', name: 'Construction', nameUz: 'Qurilish', icon: '🔨', subcategories: ['Asboblar', 'Elektr jihozlar', 'Santexnika', 'Bo\'yoqlar', 'Qurilish materiallari'] },
  { id: 'hobbies', name: 'Hobbies', nameUz: 'Hobbi', icon: '🎨', subcategories: ['Rasmlash', 'Musiqa asboblari', 'Foto video', 'Modellashtirish', 'Kolleksiyalar'] },
  { id: 'pets', name: 'Pet Supplies', nameUz: 'Uy hayvonlari', icon: '🐾', subcategories: ['It uchun', 'Mushuk uchun', 'Qushlar uchun', 'Akvarium', 'Oziq-ovqat'] },
  { id: 'garden', name: 'Garden', nameUz: 'Bog\'dorchilik', icon: '🌱', subcategories: ['Urug\'lar', 'Bog\' asboblari', 'Gullar', 'Tuproq', 'Sug\'orish', 'Issiqxonalar'] },
];

const productImages: Record<string, string[]> = {
  electronics: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  ],
  appliances: [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop',
  ],
  clothing: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1434389677669-e08b4cead0e2?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop',
  ],
  shoes: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
  ],
  accessories: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=400&h=400&fit=crop',
  ],
  beauty: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
  ],
  health: [
    'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=400&h=400&fit=crop',
  ],
  'home-kitchen': [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop',
  ],
  sports: [
    'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
  ],
  kids: [
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
  ],
  books: [
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop',
  ],
  food: [
    'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1543168256-418811576931?w=400&h=400&fit=crop',
  ],
  stationery: [
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=400&fit=crop',
  ],
  automotive: [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop',
  ],
  construction: [
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop',
  ],
  hobbies: [
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
  ],
  pets: [
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
  ],
  garden: [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1585320806297-9791b53df29f?w=400&h=400&fit=crop',
  ],
};

function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  const productTemplates: { category: string; items: { title: string; brand: string; priceRange: [number, number]; subcategory: string; specs: Record<string, string>; desc: string }[] }[] = [
    {
      category: 'electronics',
      items: [
        { title: 'Samsung Galaxy S24 Ultra 256GB', brand: 'Samsung', priceRange: [12500000, 14000000], subcategory: 'Smartfonlar', specs: { 'Ekran': '6.8" Dynamic AMOLED', 'Protsessor': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Xotira': '256 GB', 'Kamera': '200 MP' }, desc: 'Eng yangi Samsung flagman smartfoni. AI imkoniyatlari, S Pen, professional kamera tizimi.' },
        { title: 'iPhone 15 Pro Max 256GB', brand: 'Apple', priceRange: [15000000, 16500000], subcategory: 'Smartfonlar', specs: { 'Ekran': '6.7" Super Retina XDR', 'Chip': 'A17 Pro', 'RAM': '8 GB', 'Xotira': '256 GB', 'Kamera': '48 MP' }, desc: 'Apple eng kuchli smartfoni. Titanium dizayn, Action tugmasi, USB-C.' },
        { title: 'Xiaomi 14 Pro', brand: 'Xiaomi', priceRange: [7500000, 8500000], subcategory: 'Smartfonlar', specs: { 'Ekran': '6.73" LTPO AMOLED', 'Protsessor': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Xotira': '256 GB', 'Kamera': '50 MP Leica' }, desc: 'Leica kamerali professional smartfon. Tez quvvatlash, premium dizayn.' },
        { title: 'MacBook Pro 14" M3 Pro', brand: 'Apple', priceRange: [28000000, 32000000], subcategory: 'Noutbuklar', specs: { 'Ekran': '14.2" Liquid Retina XDR', 'Chip': 'M3 Pro', 'RAM': '18 GB', 'SSD': '512 GB', 'Batareya': '17 soat' }, desc: 'Professional noutbuk. M3 Pro chip, ajoyib ekran, uzoq batareya.' },
        { title: 'ASUS ROG Strix G16 Gaming Laptop', brand: 'ASUS', priceRange: [18000000, 21000000], subcategory: 'Noutbuklar', specs: { 'Ekran': '16" QHD 165Hz', 'Protsessor': 'Intel i7-13650HX', 'RAM': '16 GB', 'GPU': 'RTX 4060', 'SSD': '512 GB' }, desc: 'O\'yin uchun mo\'ljallangan kuchli noutbuk. RGB klaviatura, yuqori FPS.' },
        { title: 'iPad Air M2 11"', brand: 'Apple', priceRange: [9500000, 11000000], subcategory: 'Planshetlar', specs: { 'Ekran': '11" Liquid Retina', 'Chip': 'M2', 'Xotira': '128 GB', 'Kamera': '12 MP', 'Batareya': '10 soat' }, desc: 'Kuchli va yengil planshet. M2 chip, Apple Pencil Pro qo\'llab-quvvatlash.' },
        { title: 'Samsung 65" QLED 4K Smart TV', brand: 'Samsung', priceRange: [11000000, 13000000], subcategory: 'Televizorlar', specs: { 'Ekran': '65" QLED 4K', 'Smart TV': 'Tizen OS', 'HDR': 'HDR10+', 'Ovoz': 'Dolby Atmos', 'HDMI': '4 ta' }, desc: 'Premium televizor. QLED texnologiyasi, ajoyib ranglar, smart funksiyalar.' },
        { title: 'Sony WH-1000XM5 Quloqchinlar', brand: 'Sony', priceRange: [3500000, 4200000], subcategory: 'Quloqchinlar', specs: { 'Turi': 'Over-ear', 'Shovqin bekor qilish': 'Aktiv', 'Batareya': '30 soat', 'Bluetooth': '5.2', 'Vazn': '250 g' }, desc: 'Eng yaxshi shovqin bekor qiluvchi quloqchinlar. Premium ovoz sifati.' },
        { title: 'Apple Watch Series 9', brand: 'Apple', priceRange: [5500000, 6500000], subcategory: 'Soatlar', specs: { 'Ekran': '45mm Retina', 'Chip': 'S9', 'Suv o\'tkazmaslik': '50m', 'Sensor': 'SpO2, ECG', 'Batareya': '18 soat' }, desc: 'Eng ilg\'or aqlli soat. Salomatlik monitoringi, sport kuzatuvi.' },
        { title: 'Canon EOS R6 Mark II', brand: 'Canon', priceRange: [32000000, 35000000], subcategory: 'Kameralar', specs: { 'Sensor': '24.2 MP Full Frame', 'Video': '4K 60fps', 'AF': 'Dual Pixel CMOS AF II', 'Stabilizatsiya': '8 stop', 'Tezlik': '40 fps' }, desc: 'Professional mirrorless kamera. Tez avtofokus, ajoyib video.' },
      ]
    },
    {
      category: 'appliances',
      items: [
        { title: 'LG Front Load Kir yuvish mashinasi 10kg', brand: 'LG', priceRange: [5500000, 6500000], subcategory: 'Kir yuvish mashinalari', specs: { 'Sig\'im': '10 kg', 'Tezlik': '1400 rpm', 'Dasturlar': '14 ta', 'Invertor': 'Ha', 'Energiya': 'A+++' }, desc: 'Invertor motorli, tejamkor va shovqinsiz. AI DD texnologiyasi.' },
        { title: 'Samsung Side-by-Side Muzlatgich 617L', brand: 'Samsung', priceRange: [9000000, 11000000], subcategory: 'Muzlatgichlar', specs: { 'Sig\'im': '617 L', 'Turi': 'Side-by-Side', 'No Frost': 'Ha', 'Invertor': 'Ha', 'Rang': 'Kulrang' }, desc: 'Katta hajmli, zamonaviy dizaynli muzlatgich. Twin Cooling Plus.' },
        { title: 'Dyson V15 Detect Changyutgich', brand: 'Dyson', priceRange: [7500000, 8500000], subcategory: 'Changyutgichlar', specs: { 'Quvvat': '230 AW', 'Batareya': '60 daqiqa', 'Vazn': '3.1 kg', 'Lazer': 'Ha', 'Filtr': 'HEPA' }, desc: 'Lazer bilan changni aniqlaydigan simsiz changyutgich.' },
        { title: 'Bosch Mikrotulqinli pech 25L', brand: 'Bosch', priceRange: [1800000, 2500000], subcategory: 'Mikrotulqinli pechlar', specs: { 'Sig\'im': '25 L', 'Quvvat': '900 W', 'Gril': 'Ha', 'Dasturlar': '8 ta', 'Boshqaruv': 'Sensorli' }, desc: 'Ko\'p funksiyali mikrotulqinli pech. Gril va avtomatik dasturlar.' },
        { title: 'Philips Buxlanib dazmollash tizimi', brand: 'Philips', priceRange: [2200000, 2800000], subcategory: 'Dazmollar', specs: { 'Quvvat': '2200 W', 'Bosim': '5.5 bar', 'Sig\'im': '1.8 L', 'Vazn': '4.5 kg', 'Rejimlar': '5 ta' }, desc: 'Professional natija. Barcha matolar uchun mos, tez va oson.' },
        { title: 'Haier Split Konditsioner 12000 BTU', brand: 'Haier', priceRange: [4500000, 5500000], subcategory: 'Konditsionerlar', specs: { 'Quvvat': '12000 BTU', 'Maydon': '35 m²', 'Invertor': 'Ha', 'Rejimlar': '4 ta', 'Shovqin': '22 dB' }, desc: 'Invertorli konditsioner. Tez sovutish, energiya tejamkor.' },
      ]
    },
    {
      category: 'clothing',
      items: [
        { title: 'Erkaklar klassik ko\'ylagi Premium', brand: 'SavdoZone', priceRange: [280000, 450000], subcategory: 'Erkaklar kiyimi', specs: { 'Material': '100% paxta', 'Rang': 'Oq/Ko\'k', 'O\'lcham': 'S-XXL', 'Mavsum': 'Bahor/Yoz', 'Turi': 'Slim Fit' }, desc: 'Premium sifatli paxta ko\'ylak. Ofis va rasmiy tadbirlar uchun.' },
        { title: 'Ayollar yozgi ko\'ylagi Gulchali', brand: 'Artel', priceRange: [350000, 520000], subcategory: 'Ayollar kiyimi', specs: { 'Material': 'Viskoza', 'Rang': 'Gulli', 'O\'lcham': 'XS-XL', 'Mavsum': 'Yoz', 'Uzunlik': 'Tizza osti' }, desc: 'Yengil va qulay yozgi ko\'ylak. Tabiiy mato, chiroyli dizayn.' },
        { title: 'Bolalar sport kostyumi Nike Style', brand: 'SavdoZone', priceRange: [220000, 380000], subcategory: 'Bolalar kiyimi', specs: { 'Material': 'Poliester/Paxta', 'Rang': 'Ko\'k/Qizil', 'O\'lcham': '3-14 yosh', 'Mavsum': 'Bahor/Kuz', 'Turi': 'Sport' }, desc: 'Qulay sport kostyumi. Bolalar uchun harakat erkinligi.' },
        { title: 'Erkaklar jinsi shim Classic Fit', brand: 'DenimCo', priceRange: [380000, 550000], subcategory: 'Erkaklar kiyimi', specs: { 'Material': '98% paxta, 2% elastan', 'Rang': 'Ko\'k', 'O\'lcham': '28-38', 'Mavsum': 'Barcha', 'Turi': 'Classic Fit' }, desc: 'Klassik jinsi shim. Qulay va chidamli, har kuni kiyish uchun.' },
        { title: 'Ayollar kuzgi palto Elegant', brand: 'FashionUZ', priceRange: [850000, 1200000], subcategory: 'Ayollar kiyimi', specs: { 'Material': 'Jun/Poliester', 'Rang': 'Bej/Qora', 'O\'lcham': 'S-XL', 'Mavsum': 'Kuz/Qish', 'Uzunlik': 'Tizza osti' }, desc: 'Elegant kuzgi palto. Issiq va zamonaviy dizayn.' },
      ]
    },
    {
      category: 'shoes',
      items: [
        { title: 'Nike Air Max 270 Yugurish poyabzali', brand: 'Nike', priceRange: [1200000, 1500000], subcategory: 'Sport poyabzallari', specs: { 'Material': 'Mesh/Rubber', 'Rang': 'Oq/Qora', 'O\'lcham': '39-45', 'Taglik': 'Air Max', 'Mavsum': 'Barcha' }, desc: 'Maksimal qulaylik. Air Max texnologiyasi bilan har bir qadam.' },
        { title: 'Adidas Ultraboost 23', brand: 'Adidas', priceRange: [1400000, 1700000], subcategory: 'Sport poyabzallari', specs: { 'Material': 'Primeknit', 'Rang': 'Kulrang', 'O\'lcham': '39-46', 'Taglik': 'Boost', 'Texnologiya': 'Continental' }, desc: 'Eng yaxshi yugurish poyabzali. Boost taglik energiya qaytaradi.' },
        { title: 'Erkaklar klassik tufli Oxford', brand: 'StepUp', priceRange: [650000, 850000], subcategory: 'Klassik poyabzallar', specs: { 'Material': 'Haqiqiy charm', 'Rang': 'Jigarrang/Qora', 'O\'lcham': '39-44', 'Taglik': 'TPR', 'Mavsum': 'Barcha' }, desc: 'Klassik Oxford tufli. Rasmiy tadbirlar uchun ideal.' },
        { title: 'Ayollar baland poshna tufli Elegance', brand: 'Glamour', priceRange: [480000, 680000], subcategory: 'Ayollar poyabzali', specs: { 'Material': 'Sun\'iy charm', 'Rang': 'Qora/Qizil', 'O\'lcham': '35-41', 'Poshna': '8 sm', 'Mavsum': 'Bahor/Kuz' }, desc: 'Elegant baland poshna tufli. Maxsus kechalar uchun.' },
      ]
    },
    {
      category: 'accessories',
      items: [
        { title: 'Casio G-Shock GA-2100 Soat', brand: 'Casio', priceRange: [1500000, 1900000], subcategory: 'Soatlar', specs: { 'Mexanizm': 'Kvarts', 'Suv o\'tkazmaslik': '200m', 'Material': 'Karbon', 'Funksiyalar': 'Taymer, Budilnik', 'Batareya': '3 yil' }, desc: 'Chidamli sport soati. Karbon korpus, ajoyib dizayn.' },
        { title: 'Ray-Ban Aviator Quyosh ko\'zoynagi', brand: 'Ray-Ban', priceRange: [2200000, 2800000], subcategory: 'Ko\'zoynaklar', specs: { 'Linzalar': 'Kristall', 'Karusi': 'Metal', 'UV': '400 himoya', 'Rang': 'Oltin/Yashil', 'Ishlab chiqarish': 'Italiya' }, desc: 'Klassik aviator dizayn. Premium sifat, UV himoya.' },
        { title: 'Erkaklar charm sumka Business', brand: 'LeatherPro', priceRange: [850000, 1200000], subcategory: 'Sumkalar', specs: { 'Material': 'Haqiqiy charm', 'Rang': 'Jigarrang', 'O\'lcham': '38x28x8 sm', 'Bo\'limlar': '5 ta', 'Noutbuk': '15.6"' }, desc: 'Biznes sumka. Ko\'p bo\'limlar, premium charm.' },
        { title: 'Ayollar zanjirli sumka Chic', brand: 'ChicStyle', priceRange: [550000, 750000], subcategory: 'Sumkalar', specs: { 'Material': 'Sun\'iy charm', 'Rang': 'Qora/Pushti', 'O\'lcham': '25x15x8 sm', 'Kamar': 'Zanjir', 'Yopilish': 'Magnit' }, desc: 'Zamonaviy dizaynli ayollar sumkasi. Har kuni uchun.' },
      ]
    },
    {
      category: 'beauty',
      items: [
        { title: 'La Roche-Posay Yuz kremi SPF50', brand: 'La Roche-Posay', priceRange: [280000, 380000], subcategory: 'Yuz parvarishi', specs: { 'Hajm': '50 ml', 'SPF': '50+', 'Turi': 'Krem', 'Teri': 'Barcha turlar', 'Mamlakat': 'Fransiya' }, desc: 'Kunlik himoya kremi. SPF50, namlovchi va himoya qiluvchi.' },
        { title: 'Dior Sauvage Erkalar atiri 100ml', brand: 'Dior', priceRange: [1800000, 2200000], subcategory: 'Atirlar', specs: { 'Hajm': '100 ml', 'Turi': 'Eau de Toilette', 'Notalar': 'Bergamot, Ambra', 'Davomiylik': '8+ soat', 'Mamlakat': 'Fransiya' }, desc: 'Klassik erkaklar atiri. Kuchli va jozibali hid.' },
        { title: 'MAC Matte Lipstick Collection', brand: 'MAC', priceRange: [180000, 250000], subcategory: 'Makiyaj', specs: { 'Hajm': '3 g', 'Turi': 'Matte', 'Ranglar': '12 ta', 'Davomiylik': '8 soat', 'Mamlakat': 'Kanada' }, desc: 'Uzoq davom etadigan mat lipstick. Boy ranglar.' },
        { title: 'Dyson Airwrap Soch stayeri', brand: 'Dyson', priceRange: [6500000, 7500000], subcategory: 'Soch parvarishi', specs: { 'Quvvat': '1300 W', 'Nasoslar': '6 ta', 'Harorat': '3 rejim', 'Texnologiya': 'Coanda', 'Komplekt': '7 ta aksessuar' }, desc: 'Professional soch stayeri. Coanda texnologiyasi bilan.' },
      ]
    },
    {
      category: 'health',
      items: [
        { title: 'Omron X7 Blood Pressure Monitor', brand: 'Omron', priceRange: [850000, 1100000], subcategory: 'Tibbiy asboblar', specs: { 'Turi': 'Yelka', 'Xotira': '100 ta', 'Aniqlik': '±3 mmHg', 'Ekran': 'LCD', 'Adapter': 'Bor' }, desc: 'Aniq qon bosimi o\'lchagich. Klinik aniqlik, qulay foydalanish.' },
        { title: 'Optimum Nutrition Whey Gold Standard 2.27kg', brand: 'Optimum Nutrition', priceRange: [650000, 800000], subcategory: 'Sport ovqatlanishi', specs: { 'Vazn': '2.27 kg', 'Protein': '24 g/serving', 'Servings': '73 ta', 'Ta\'m': 'Chocolate', 'Mamlakat': 'AQSh' }, desc: 'Premium whey protein. Mushak o\'stirish va tiklanish uchun.' },
        { title: 'Vitamin D3 5000 IU 120 kapsula', brand: 'Solgar', priceRange: [180000, 250000], subcategory: 'Vitaminlar', specs: { 'Miqdor': '5000 IU', 'Kapsulalar': '120 ta', 'Turi': 'Softgel', 'Muddat': '120 kun', 'Mamlakat': 'AQSh' }, desc: 'Yuqori dozali D3 vitamini. Suyak va immunitet uchun.' },
      ]
    },
    {
      category: 'home-kitchen',
      items: [
        { title: 'Tefal 24 sm Qovuriladigan idish', brand: 'Tefal', priceRange: [350000, 480000], subcategory: 'Oshxona buyumlari', specs: { 'Diametr': '24 sm', 'Qoplama': 'Titanium', 'Qopqoq': 'Bor', 'Pechka': 'Barcha turlar', 'Mamlakat': 'Fransiya' }, desc: 'Premium qovuriladigan idish. Titanium qoplama, uzoq xizmat qiladi.' },
        { title: 'Ikea KALLAX Shelving Unit', brand: 'IKEA', priceRange: [750000, 950000], subcategory: 'Mebel', specs: { 'O\'lcham': '147x147 sm', 'Material': 'DSP', 'Bo\'limlar': '16 ta', 'Rang': 'Oq', 'Og\'irlik': '35 kg' }, desc: 'Ko\'p funksiyali javon. Zamonaviy dizayn, oson yig\'ish.' },
        { title: 'Philips Hue Smart Lamp', brand: 'Philips', priceRange: [450000, 580000], subcategory: 'Yoritgichlar', specs: { 'Quvvat': '11 W', 'Ranglar': '16 million', 'WiFi': 'Ha', 'Ekotizim': 'Alexa, Google', 'Umri': '25000 soat' }, desc: 'Aqlli yoritgich. 16 million rang, ovozli boshqaruv.' },
        { title: 'Le Creuset Cast Iron Pot 5.3L', brand: 'Le Creuset', priceRange: [3200000, 3800000], subcategory: 'Idish-tovoq', specs: { 'Sig\'im': '5.3 L', 'Material': 'Cho\'yan', 'Qoplama': 'Emal', 'Rang': 'Qizil', 'Mamlakat': 'Fransiya' }, desc: 'Premium cho\'yan qozon. Bir tekisda isitish, uzoq xizmat.' },
      ]
    },
    {
      category: 'sports',
      items: [
        { title: 'Yoga Mat Premium 6mm', brand: 'Manduka', priceRange: [380000, 520000], subcategory: 'Yoga', specs: { 'Qalinlik': '6 mm', 'Material': 'TPE', 'O\'lcham': '183x61 sm', 'Sirpanish': 'Yo\'q', 'Vazn': '1.2 kg' }, desc: 'Premium yoga mat. Qulay, sirpanmaydigan yuza.' },
        { title: 'Gantel to\'plami 2-20 kg', brand: 'PowerFit', priceRange: [1200000, 1800000], subcategory: 'Fitness', specs: { 'Vazn': '2-20 kg', 'Material': 'Kauchuk', 'Son': '10 juft', 'Qoplam': 'Xrom', 'Turi': 'Olinadigan' }, desc: 'Professional gantel to\'plami. Uy sport zali uchun.' },
        { title: 'Schwinn Yig\'ma Velosiped', brand: 'Schwinn', priceRange: [3500000, 4200000], subcategory: 'Velosipedlar', specs: { 'G\'ildirak': '26"', 'Tezlik': '21', 'Rama': 'Alyuminiy', 'Tormoz': 'Disk', 'Vazn': '14 kg' }, desc: 'Yig\'ma velosiped. Shahar va tabiat uchun qulay.' },
      ]
    },
    {
      category: 'kids',
      items: [
        { title: 'LEGO City Police Station 60316', brand: 'LEGO', priceRange: [850000, 1100000], subcategory: 'Konstruktorlar', specs: { 'Detallar': '668 ta', 'Minifigures': '6 ta', 'Yosh': '6+', 'O\'lcham': '37x25 sm', 'Mavzu': 'City' }, desc: 'LEGO City politsiya stantsiyasi. Kreativ o\'yin va rivojlanish.' },
        { title: 'Bolalar elektr mashinasi BMW', brand: 'KidRide', priceRange: [3200000, 4000000], subcategory: 'Bolalar transporti', specs: { 'Yosh': '3-8', 'Tezlik': '3-6 km/s', 'Batareya': '12V', 'Og\'irlik': '30 kg', 'Masofa': '15 km' }, desc: 'Elektr bolalar mashinasi. BMW litsenziyali, xavfsiz.' },
        { title: 'Ta\'limiy planshet bolalar uchun', brand: 'KidsTech', priceRange: [450000, 650000], subcategory: 'Ta\'lim o\'yinlari', specs: { 'Ekran': '7" IPS', 'Ilovalar': '50+ ta', 'Yosh': '3-10', 'Batareya': '6 soat', 'Til': 'O\'zbek/Rus/Ingliz' }, desc: 'Bolalar uchun ta\'limiy planshet. O\'yin va o\'rganish.' },
      ]
    },
    {
      category: 'books',
      items: [
        { title: '"O\'tgan kunlar" - Abdulla Qodiriy', brand: 'Sharq', priceRange: [65000, 95000], subcategory: 'Badiiy adabiyot', specs: { 'Sahifa': '456', 'Muqova': 'Qattiq', 'Til': 'O\'zbek', 'Nashriyot': 'Sharq', 'Yil': '2023' }, desc: 'O\'zbek adabiyotining durdonasi. Klassik roman, yangi nashr.' },
        { title: '"Atomic Habits" - James Clear', brand: 'Business', priceRange: [85000, 120000], subcategory: 'Biznes adabiyoti', specs: { 'Sahifa': '320', 'Muqova': 'Yumshoq', 'Til': 'Ingliz', 'Nashriyot': 'Penguin', 'Yil': '2022' }, desc: 'Kichik o\'zgarishlar, katta natijalar. Eng yaxshi biznes kitob.' },
        { title: 'Bolalar ensiklopediyasi "Dunyo"', brand: 'MegaWorld', priceRange: [180000, 250000], subcategory: 'Bolalar kitoblari', specs: { 'Sahifa': '256', 'Rasmlar': '500+', 'Yosh': '6-12', 'Til': 'O\'zbek', 'Muqova': 'Qattiq' }, desc: 'Bolalar uchun katta ensiklopediya. Rangli rasmlar bilan.' },
      ]
    },
    {
      category: 'food',
      items: [
        { title: 'Premium Turk qahvasi 500g', brand: 'Mehmet Efendi', priceRange: [120000, 165000], subcategory: 'Ichimliklar', specs: { 'Vazn': '500 g', 'Turi': 'Maydalangan', 'Mamlakat': 'Turkiya', 'Ta\'m': 'O\'rta', 'Qadoq': 'Vakuum' }, desc: 'Premium turk qahvasi. Boy ta\'m va hid, yangi maydalangan.' },
        { title: 'Organik asal 1kg Tog\' asali', brand: 'BeeNatural', priceRange: [180000, 250000], subcategory: 'Shirinliklar', specs: { 'Vazn': '1 kg', 'Turi': 'Tog\' asali', 'Sifat': 'Organik', 'Mamlakat': 'O\'zbekiston', 'Qadoq': 'Shisha' }, desc: 'Tabiiy tog\' asali. Chimyon tog\'laridan, 100% tabiiy.' },
        { title: 'O\'zbek plov guruchi 5kg Premium', brand: 'UzRice', priceRange: [85000, 120000], subcategory: 'Sabzavotlar', specs: { 'Vazn': '5 kg', 'Turi': 'Devzira', 'Sifat': 'Premium', 'Mamlakat': 'O\'zbekiston', 'Qadoq': 'Qog\'oz' }, desc: 'Plov uchun eng yaxshi guruch. Devzira navi, toza va sifatli.' },
      ]
    },
    {
      category: 'stationery',
      items: [
        { title: 'Moleskine Classic Notebook A5', brand: 'Moleskine', priceRange: [280000, 380000], subcategory: 'Daftarlar', specs: { 'Sahifa': '240', 'O\'lcham': 'A5', 'Muqova': 'Qattiq', 'Qog\'oz': 'Krem', 'Xatcho\'p': 'Bor' }, desc: 'Premium daftari. Klassik dizayn, sifatli qog\'oz.' },
        { title: 'Parker Jotter Premium Ruchka', brand: 'Parker', priceRange: [350000, 480000], subcategory: 'Ruchkalar', specs: { 'Turi': 'Sharikli', 'Material': 'Metal', 'Rang': 'Kumush', 'Qayta to\'ldirish': 'Ha', 'Qadoq': 'Sovg\'a qutisi' }, desc: 'Premium yozuv ruchkasi. Klassik dizayn, silliq yozish.' },
      ]
    },
    {
      category: 'automotive',
      items: [
        { title: 'Michelin Primacy 4 205/55 R16 Shinalar', brand: 'Michelin', priceRange: [1200000, 1500000], subcategory: 'Shinalar', specs: { 'O\'lcham': '205/55 R16', 'Mavsum': 'Yoz', 'Indeks': '91V', 'Shovqin': '69 dB', 'Yoqilg\'i': 'B' }, desc: 'Premium yozgi shinalar. Qulay haydash, uzoq xizmat.' },
        { title: 'Mobil 1 Motor moyi 5W-30 4L', brand: 'Mobil', priceRange: [380000, 480000], subcategory: 'Moylar', specs: { 'Hajm': '4 L', 'Qovushqoqlik': '5W-30', 'Turi': 'Sintetik', 'Standart': 'API SN', 'Muddat': '10000 km' }, desc: 'To\'liq sintetik motor moyi. Maksimal himoya va samaradorlik.' },
      ]
    },
    {
      category: 'construction',
      items: [
        { title: 'Bosch Professional Drill GBM 13-2 RE', brand: 'Bosch', priceRange: [850000, 1100000], subcategory: 'Asboblar', specs: { 'Quvvat': '600 W', 'Tezlik': '2800 rpm', 'Patron': '13 mm', 'Vazn': '1.7 kg', 'Kabel': '3 m' }, desc: 'Professional drel. Kuchli motor, aniq ish, chidamli.' },
        { title: 'Makita Akkumulyatorli vintovyort DDF485', brand: 'Makita', priceRange: [1800000, 2200000], subcategory: 'Asboblar', specs: { 'Kuch': '18V', 'Moment': '68 Nm', 'Tezlik': '2000 rpm', 'Batareya': '5.0 Ah', 'Vazn': '1.7 kg' }, desc: 'Professional akkumulyatorli vintovyort. Kuchli va yengil.' },
      ]
    },
    {
      category: 'hobbies',
      items: [
        { title: 'Yamaha F310 Akustik gitara', brand: 'Yamaha', priceRange: [1800000, 2200000], subcategory: 'Musiqa asboblari', specs: { 'Turi': 'Akustik', 'Material': 'Spruce/ Meranti', 'Torlar': '6 ta', 'Fretlar': '20 ta', 'Mamlakat': 'Indoneziya' }, desc: 'Boshlang\'ich va o\'rta daraja uchun gitara. Toza ovoz.' },
        { title: 'Winsor & Newton Akvarel 24 rang', brand: 'Winsor & Newton', priceRange: [450000, 580000], subcategory: 'Rasmlash', specs: { 'Ranglar': '24 ta', 'Turi': 'Akvarel', 'Sifat': 'Professional', 'Qadoq': 'Metal quti', 'Mamlakat': 'Angliya' }, desc: 'Professional akvarel bo\'yoqlar. Boy ranglar, oson aralashtirish.' },
      ]
    },
    {
      category: 'pets',
      items: [
        { title: 'Royal Canin It ovqati 10kg Adult', brand: 'Royal Canin', priceRange: [650000, 800000], subcategory: 'It uchun', specs: { 'Vazn': '10 kg', 'Yosh': 'Kattalar', 'Ta\'m': 'To\'g\'rilangan', 'Tarkib': 'Moy, protein', 'Mamlakat': 'Fransiya' }, desc: 'Premium it ovqati. Muvozanatli tarkib, sog\'lom ovqatlanish.' },
        { title: 'Mushuk uchun daraxt 150cm', brand: 'CatLife', priceRange: [450000, 650000], subcategory: 'Mushuk uchun', specs: { 'Balandlik': '150 sm', 'Platformalar': '5 ta', 'Material': 'Sisal', 'O\'yinchoq': '3 ta', 'Rang': 'Bej' }, desc: 'Mushuklar uchun katta daraxt. O\'ynash, uxlash, tirnash.' },
      ]
    },
    {
      category: 'garden',
      items: [
        { title: 'Gardena Sug\'orish tizimi to\'plami', brand: 'Gardena', priceRange: [580000, 750000], subcategory: 'Sug\'orish', specs: { 'Uzunlik': '30 m', 'Ulanish': '1/2"', 'Sprinkler': '4 ta', 'Taymer': 'Bor', 'Material': 'UV chidamli' }, desc: 'To\'liq sug\'orish tizimi. Oson o\'rnatish, avtomatik rejim.' },
        { title: 'Premium gul urug\'lari to\'plami 50 xil', brand: 'GreenWorld', priceRange: [120000, 180000], subcategory: 'Urug\'lar', specs: { 'Turlar': '50 xil', 'Urug\'lar': '500+ dona', 'Mavsum': 'Bahor/Yoz', 'Qadoq': 'Alohida', 'Qo\'llanma': 'Bor' }, desc: 'Rang-barang gullar urug\'lari. Bog\'ni chiroyli qiling.' },
      ]
    },
  ];

  productTemplates.forEach(template => {
    template.items.forEach((item, idx) => {
      const discount = Math.floor(Math.random() * 30) + 5;
      const price = Math.floor(item.priceRange[0] + Math.random() * (item.priceRange[1] - item.priceRange[0]));
      const oldPrice = Math.floor(price / (1 - discount / 100));
      const rating = (3.5 + Math.random() * 1.5).toFixed(1);
      const reviews = Math.floor(Math.random() * 500) + 10;
      const images = productImages[template.category] || productImages['electronics'];
      const image = images[idx % images.length];

      products.push({
        id: id++,
        title: item.title,
        category: template.category,
        subcategory: item.subcategory,
        brand: item.brand,
        price,
        oldPrice,
        discount,
        rating: parseFloat(rating),
        reviews,
        image,
        images: [image, ...images.filter(i => i !== image).slice(0, 3)],
        description: item.desc,
        specifications: item.specs,
        availability: Math.random() > 0.1,
        monthlyPayment: Math.floor(price / 12),
        deliveryDays: Math.floor(Math.random() * 5) + 1,
        isNew: Math.random() > 0.7,
        isBestSeller: Math.random() > 0.7,
      });
    });
  });

  // Add more products to reach 100+
  const extraProducts: { title: string; brand: string; category: string; subcategory: string; priceRange?: [number, number]; specs: Record<string, string>; desc: string }[] = [
    { title: 'Samsung Galaxy Buds2 Pro', brand: 'Samsung', category: 'electronics', subcategory: 'Quloqchinlar', priceRange: [1500000, 1800000], specs: { 'Turi': 'TWS', 'ANC': 'Ha', 'Batareya': '29 soat', 'Suv': 'IPX7', 'Bluetooth': '5.3' }, desc: 'Premium simsiz quloqchinlar. ANC, 360 Audio.' },
    { title: 'Lenovo ThinkPad X1 Carbon Gen 11', brand: 'Lenovo', category: 'electronics', subcategory: 'Noutbuklar', priceRange: [22000000, 26000000], specs: { 'Ekran': '14" 2.8K OLED', 'Protsessor': 'i7-1365U', 'RAM': '16 GB', 'SSD': '512 GB', 'Vazn': '1.12 kg' }, desc: 'Ultra yengil biznes noutbuk. OLED ekran, uzoq batareya.' },
    { title: 'JBL Charge 5 Bluetooth Speaker', brand: 'JBL', category: 'electronics', subcategory: 'Quloqchinlar', priceRange: [1200000, 1500000], specs: { 'Quvvat': '40 W', 'Batareya': '20 soat', 'Suv': 'IP67', 'Powerbank': 'Ha', 'Bluetooth': '5.1' }, desc: 'Kuchli portativ speaker. Suv o\'tkazmaydi, powerbank funksiyasi.' },
    { title: 'Xiaomi Robot Vacuum S10+', brand: 'Xiaomi', category: 'appliances', subcategory: 'Changyutgichlar', priceRange: [3500000, 4200000], specs: { 'Quvvat': '4000 Pa', 'Batareya': '180 daqiqa', 'Navigatsiya': 'LiDAR', 'Yuvish': 'Ha', 'Ilova': 'Mi Home' }, desc: 'Aqlli robot changyutgich. LiDAR navigatsiya, yuvish funksiyasi.' },
    { title: 'Erkaklar qishki kurtka Puffer', brand: 'NorthStyle', priceRange: [680000, 950000], category: 'clothing', subcategory: 'Erkaklar kiyimi', specs: { 'Material': 'Neylon', 'To\'ldirish': 'Pat', 'Rang': 'Qora/Ko\'k', 'O\'lcham': 'S-XXL', 'Mavsum': 'Qish' }, desc: 'Issiq qishki kurtka. Yengil va issiq, suv o\'tkazmaydi.' },
    { title: 'Ayollar qo\'l sumkasi Premium Leather', brand: 'Elegance', priceRange: [950000, 1300000], category: 'accessories', subcategory: 'Sumkalar', specs: { 'Material': 'Haqiqiy charm', 'Rang': 'Konyak', 'O\'lcham': '32x25x12', 'Bo\'limlar': '4 ta', 'Kamar': 'Bor' }, desc: 'Premium charm sumka. Handmade, noyob dizayn.' },
    { title: 'The Ordinary Niacinamide 10% + Zinc', brand: 'The Ordinary', priceRange: [120000, 165000], category: 'beauty', subcategory: 'Yuz parvarishi', specs: { 'Hajm': '30 ml', 'Tarkib': 'Niacinamide 10%, Zinc 1%', 'Turi': 'Serum', 'Tera': 'Barcha', 'Mamlakat': 'Kanada' }, desc: 'Mashhur serum. Teshiklarni kichraytiradi, yog\'ni nazorat qiladi.' },
    { title: 'Fitbit Charge 6 Fitness Tracker', brand: 'Fitbit', priceRange: [1800000, 2200000], category: 'health', subcategory: 'Tibbiy asboblar', specs: { 'Ekran': 'Grayscale OLED', 'GPS': 'Bor', 'Batareya': '7 kun', 'Sensor': 'HR, SpO2, ECG', 'Suv': '50m' }, desc: 'Advanced fitness tracker. Google integratsiyasi, GPS.' },
    { title: 'Ninja Foodi 14-in-1 Multicooker', brand: 'Ninja', priceRange: [2800000, 3500000], category: 'home-kitchen', subcategory: 'Oshxona buyumlari', specs: { 'Sig\'im': '6.5 L', 'Funksiyalar': '14 ta', 'Quvvat': '1760 W', 'Bosim': 'Ha', 'Ekran': 'Digital' }, desc: '14 funksiyali multivarka. Bosim, sekin pishirish, qovurish.' },
    { title: 'Callaway Golf Club Set', brand: 'Callaway', category: 'sports', subcategory: 'Jamoa sportlari', specs: { 'To\'plam': '12 ta', 'Material': 'Graphite/Steel', 'Sumka': 'Bor', 'Qo\'lqop': 'Bor', 'Daraja': 'O\'rta' }, desc: 'To\'liq golf to\'plami. Boshlang\'ich va o\'rta daraja uchun.' },
    { title: 'LEGO Technic Bugatti Chiron 42083', brand: 'LEGO', category: 'kids', subcategory: 'Konstruktorlar', specs: { 'Detallar': '3599 ta', 'O\'lcham': '56x25x14 sm', 'Yosh': '16+', 'Mexanizm': 'Ishlaydigan', 'Qadoq': 'Premium' }, desc: 'Premium LEGO to\'plami. Ishlaydigan mexanizm, kollektor nashri.' },
    { title: '"Mehrobdan chayon" - Abdulla Qodiriy', brand: 'Sharq', priceRange: [75000, 110000], category: 'books', subcategory: 'Badiiy adabiyot', specs: { 'Sahifa': '512', 'Muqova': 'Qattiq', 'Til': 'O\'zbek', 'Nashriyot': 'Sharq', 'Yil': '2023' }, desc: 'Buyuk roman. O\'zbek adabiyotining durdonasi, yangi nashr.' },
    { title: 'Italiya zaytun moyi Extra Virgin 1L', brand: 'Oliveto', priceRange: [145000, 195000], category: 'food', subcategory: 'Ichimliklar', specs: { 'Hajm': '1 L', 'Turi': 'Extra Virgin', 'Kislota': '< 0.5%', 'Mamlakat': 'Italiya', 'Qadoq': 'Shisha' }, desc: 'Premium zaytun moyi. Sovuq siqish, Italiya mahsuloti.' },
    { title: 'Lamy Safari Fountain Pen', brand: 'Lamy', priceRange: [420000, 550000], category: 'stationery', subcategory: 'Ruchkalar', specs: { 'Turi': 'Pernik ruchka', 'Material': 'ABS plastik', 'Nib': 'M', 'Rang': 'Qora', 'Kartush': 'Bor' }, desc: 'Klassik pernо ruchka. Ergonomik dizayn, silliq yozish.' },
    { title: 'Dashcam 4K Front+Rear', brand: '70mai', category: 'automotive', subcategory: 'Aksessuarlar', specs: { 'Old': '4K', 'Orqa': '1080p', 'GPS': 'Ha', 'WiFi': 'Ha', 'Xotira': '128 gacha' }, desc: '4K dashcam. Old va orqa kamera, GPS, WiFi.' },
    { title: 'DeWalt Burchakli silliqlash mashinasi', brand: 'DeWalt', category: 'construction', subcategory: 'Asboblar', specs: { 'Quvvat': '1400 W', 'Disk': '125 mm', 'Tezlik': '11000 rpm', 'Vazn': '2.5 kg', 'Soft start': 'Ha' }, desc: 'Professional silliqlash mashinasi. Kuchli motor, qulay tutqich.' },
    { title: 'Roland FP-30X Digital Piano', brand: 'Roland', category: 'hobbies', subcategory: 'Musiqa asboblari', specs: { 'Klavishlar': '88 ta', 'Tugmalar': 'PHA-4', 'Ovozlar': '56 ta', 'Bluetooth': 'Ha', 'Dinamiklar': '22 W' }, desc: 'Raqamli pianino. HAqiqiy pianino hissi, kompakt dizayn.' },
    { title: 'Akvarium to\'plami 100L LED', brand: 'AquaWorld', category: 'pets', subcategory: 'Akvarium', specs: { 'Hajm': '100 L', 'LED': 'RGB', 'Filtr': 'Tashqi', 'Isitgich': '200W', 'O\'lcham': '80x35x55' }, desc: 'To\'liq akvarium to\'plami. LED yoritish, filtr, isitgich.' },
    { title: 'Issiqxona 3x6m Polikarbonat', brand: 'GreenHouse', category: 'garden', subcategory: 'Issiqxonalar', specs: { 'O\'lcham': '3x6 m', 'Material': 'Polikarbonat 4mm', 'Karkas': 'Galvanizli', 'Eshik': '2 ta', 'Deraza': '2 ta' }, desc: 'Chidamli issiqxona. Polikarbonat, mustahkam karkas.' },
    { title: 'Apple AirPods Pro 2nd Gen USB-C', brand: 'Apple', priceRange: [3200000, 3800000], category: 'electronics', subcategory: 'Quloqchinlar', specs: { 'Chip': 'H2', 'ANC': 'Adaptiv', 'Batareya': '30 soat', 'Suv': 'IP54', 'USB-C': 'Ha' }, desc: 'Eng yaxshi simsiz quloqchinlar. Adaptiv ANC, shaffof rejim.' },
    { title: 'PlayStation 5 Slim', brand: 'Sony', priceRange: [7500000, 8500000], category: 'electronics', subcategory: 'Smartfonlar', specs: { 'SSD': '1 TB', 'GPU': '10.28 TFLOPS', 'RAM': '16 GB', 'Disk': 'Ha', 'O\'lcham': 'Kichikroq' }, desc: 'Yangi PS5 Slim. Kichikroq, yengilroq, kuchliroq.' },
    { title: 'Bosch Serie 6 Kir yuvish 9kg', brand: 'Bosch', priceRange: [6200000, 7500000], category: 'appliances', subcategory: 'Kir yuvish mashinalari', specs: { 'Sig\'im': '9 kg', 'Tezlik': '1400 rpm', 'Invertor': 'Ha', 'Eco': 'Ha', 'Dasturlar': '15 ta' }, desc: 'German sifatli kir yuvish. EcoMode, shovqinsiz.' },
    { title: 'Erkaklar sport kostyumi Adidas Tiro', brand: 'Adidas', priceRange: [550000, 750000], category: 'clothing', subcategory: 'Sport kiyimlari', specs: { 'Material': 'Poliester', 'Rang': 'Qora/Oq', 'O\'lcham': 'S-XXL', 'Texnologiya': 'AEROREADY', 'Mavsum': 'Barcha' }, desc: 'Adidas sport kostyumi. AEROREADY texnologiyasi, qulay.' },
    { title: 'Puma RS-X Sneakers', brand: 'Puma', priceRange: [950000, 1200000], category: 'shoes', subcategory: 'Sport poyabzallari', specs: { 'Material': 'Mesh/Leather', 'Rang': 'Multi', 'O\'lcham': '39-45', 'Taglik': 'RS', 'Mavsum': 'Barcha' }, desc: 'Retro-futuristik dizayn. Qulay, zamonaviy, rang-barang.' },
  ];

  extraProducts.forEach((item, idx) => {
    const discount = Math.floor(Math.random() * 30) + 5;
    const pr = item.priceRange || [100000, 200000];
    const price = Math.floor(pr[0] + Math.random() * (pr[1] - pr[0]));
    const oldPrice = Math.floor(price / (1 - discount / 100));
    const rating = (3.5 + Math.random() * 1.5).toFixed(1);
    const reviews = Math.floor(Math.random() * 500) + 10;
    const images = productImages[item.category] || productImages['electronics'];
    const image = images[idx % images.length];

    products.push({
      id: id++,
      title: item.title,
      category: item.category,
      subcategory: item.subcategory,
      brand: item.brand,
      price,
      oldPrice,
      discount,
      rating: parseFloat(rating),
      reviews,
      image,
      images: [image, ...images.filter(i => i !== image).slice(0, 3)],
      description: item.desc,
      specifications: item.specs,
      availability: Math.random() > 0.1,
      monthlyPayment: Math.floor(price / 12),
      deliveryDays: Math.floor(Math.random() * 5) + 1,
      isNew: Math.random() > 0.7,
      isBestSeller: Math.random() > 0.7,
    });
  });

  return products;
}

export const products = generateProducts();

export const brands = [...new Set(products.map(p => p.brand))].sort();

export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
};

export const locations = [
  'Toshkent', 'Samarqand', 'Buxoro', 'Namangan', 'Farg\'ona',
  'Andijon', 'Nukus', 'Qarshi', 'Jizzax', 'Guliston',
  'Urganch', 'Termiz', 'Navoiy', 'Olmaliq', 'Chirchiq'
];
