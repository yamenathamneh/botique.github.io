const products = [];

const categories = [
    { id: "all", nameAr: "الكل", nameEn: "All Items" },
    { id: "suits", nameAr: "أطقم رسمية", nameEn: "Formal Suits" },
    { id: "jackets", nameAr: "جاكيتات", nameEn: "Jackets" },
    { id: "tricot", nameAr: "تريكو", nameEn: "Tricot & Knitwear" },
    { id: "trend-jeans", nameAr: "ست ترند جينز", nameEn: "Trend Jeans Set" },
    { id: "jeans", nameAr: "جينزات", nameEn: "Jeans" },
    { id: "skirts", nameAr: "تنانير", nameEn: "Skirts" },
    { id: "tops", nameAr: "توبات", nameEn: "Tops" }
];

let currentLang = 'ar';
let selectedCategory = 'all';
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    initAutoScrollCarousel();
});

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-btn').innerText = currentLang === 'ar' ? 'EN' : 'العربية';
    
    document.getElementById('announcement-text').innerText = currentLang === 'ar' 
        ? "توصيل لجميع مناطق الأردن 📦 | الدفع عند الاستلام 🚚" 
        : "Delivery across Jordan 📦 | Cash on Delivery 🚚";
    
    document.getElementById('search-input').placeholder = currentLang === 'ar' ? "بحث عن منتجات..." : "Search products...";
    document.getElementById('hero-sub').innerText = currentLang === 'ar' ? "تشكيلة الأناقة التركية" : "Turkish High-Fashion Collection";
    document.getElementById('hero-title').innerText = currentLang === 'ar' ? "أناقة بلا حدود" : "Elegance Redefined";
    document.getElementById('hero-btn').innerText = currentLang === 'ar' ? "تسوقي المجموعة الآن" : "Shop Collection";
    
    // USP Bar Translation
    document.getElementById('usp-1-title').innerText = currentLang === 'ar' ? "توصيل سريع" : "Fast Delivery";
    document.getElementById('usp-1-desc').innerText = currentLang === 'ar' ? "لكافة المحافظات في الأردن" : "Across all Jordan governorates";
    document.getElementById('usp-2-title').innerText = currentLang === 'ar' ? "الدفع عند الاستلام" : "Cash on Delivery";
    document.getElementById('usp-2-desc').innerText = currentLang === 'ar' ? "كاش بكل أمان وراحة" : "Safe & secure cash payment";
    document.getElementById('usp-3-title').innerText = currentLang === 'ar' ? "جودة تركية فاخرة" : "Turkish Luxury Quality";
    document.getElementById('usp-3-desc').innerText = currentLang === 'ar' ? "تصاميم عصرية مختارة بعناية" : "Handpicked modern designs";

    // Brand Story Translation
    document.getElementById('story-text').innerText = currentLang === 'ar' 
        ? "حيث تلتقي الأناقة التركية بالذوق الراقي. نقدم لكِ أحدث صيحات الموضة النسائية لتكوني دائماً في قمة التألق والثقة." 
        : "Where Turkish elegance meets sophisticated taste. Bringing you the latest women's fashion trends to keep you radiant and confident.";

    // Lookbook Translation
    if(document.getElementById('lookbook-title')) {
        document.getElementById('lookbook-title').innerText = currentLang === 'ar' ? "التشكيلة المميزة" : "Featured Collections";
    }
    if(document.getElementById('lb-suits')) document.getElementById('lb-suits').innerText = currentLang === 'ar' ? "أطقم رسمية" : "Formal Suits";
    if(document.getElementById('lb-jackets')) document.getElementById('lb-jackets').innerText = currentLang === 'ar' ? "جاكيتات" : "Jackets";
    if(document.getElementById('lb-tricot')) document.getElementById('lb-tricot').innerText = currentLang === 'ar' ? "تريكو" : "Tricot & Knitwear";
    if(document.getElementById('lb-skirts')) document.getElementById('lb-skirts').innerText = currentLang === 'ar' ? "تنانير" : "Skirts";
    if(document.getElementById('lb-tops')) document.getElementById('lb-tops').innerText = currentLang === 'ar' ? "توبات" : "Tops";

    ['lb-shop-1','lb-shop-2','lb-shop-3','lb-shop-4','lb-shop-5'].forEach(id => {
        if(document.getElementById(id)) {
            document.getElementById(id).innerText = currentLang === 'ar' ? "اكتشفي التشكيلة" : "Discover Collection";
        }
    });

    // Cart & Checkout Translation
    document.getElementById('cart-title').innerText = currentLang === 'ar' ? "حقيبة التسوق" : "Shopping Bag";
    document.getElementById('label-subtotal').innerText = currentLang === 'ar' ? "المجموع الفرعي:" : "Subtotal:";
    document.getElementById('label-delivery').innerText = currentLang === 'ar' ? "التوصيل داخل الأردن:" : "Delivery in Jordan:";
    document.getElementById('val-delivery').innerText = currentLang === 'ar' ? "3.00 JOD (عند التأكيد)" : "3.00 JOD (On confirmation)";
    document.getElementById('btn-checkout-label').innerText = currentLang === 'ar' ? "إتمام الطلب عبر الواتساب" : "Checkout via WhatsApp";

    // Footer Translation
    if (document.getElementById('footer-desc')) {
        document.getElementById('footer-desc').innerText = currentLang === 'ar' 
            ? "بوتيك ملابس نسائية تركية ذات جودة عالية. توصيل لجميع المحافظات في الأردن والدفع عند الاستلام." 
            : "High quality Turkish women's clothing boutique. Delivery to all Jordan governorates and Cash on Delivery.";
    }
    if (document.getElementById('footer-contact-title')) {
        document.getElementById('footer-contact-title').innerText = currentLang === 'ar' ? "تواصل معنا" : "Contact Us";
    }
    if (document.getElementById('footer-instagram-text')) {
        document.getElementById('footer-instagram-text').innerText = currentLang === 'ar' ? "صفحتنا على إنستغرام" : "Our Instagram Page";
    }
    if (document.getElementById('footer-facebook-text')) {
        document.getElementById('footer-facebook-text').innerText = currentLang === 'ar' ? "صفحتنا على فيسبوك" : "Our Facebook Page";
    }
    if (document.getElementById('footer-policies-title')) {
        document.getElementById('footer-policies-title').innerText = currentLang === 'ar' ? "سياسات المتجر" : "Store Policies";
    }
    if (document.getElementById('policy-1-text')) {
        document.getElementById('policy-1-text').innerText = currentLang === 'ar' ? "الدفع كاش عند الاستلام" : "Cash on Delivery";
    }
    if (document.getElementById('policy-2-text')) {
        document.getElementById('policy-2-text').innerText = currentLang === 'ar' ? "نعتذر عن التبديل أو الترجيع" : "No Exchanges or Refunds";
    }

    renderCategories();
    renderProducts();
    updateCartUI();
}

function renderCategories() {
    const nav = document.getElementById('categories-bar');
    const mobileNav = document.getElementById('mobile-categories');
    
    let html = '';
    categories.forEach(cat => {
        const name = currentLang === 'ar' ? cat.nameAr : cat.nameEn;
        const active = cat.id === selectedCategory ? 'active' : '';
        html += `<button class="cat-item ${active}" onclick="selectCategory('${cat.id}')">${name}</button>`;
    });

    nav.innerHTML = html;
    mobileNav.innerHTML = html;
}

function selectCategory(catId) {
    selectedCategory = catId;
    renderCategories();
    renderProducts();
    
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });

    if(document.getElementById('mobile-nav').classList.contains('open')){
        toggleMobileMenu();
    }
}

function initAutoScrollCarousel() {
    const container = document.getElementById('lookbook-carousel');
    if (!container) return;

    // Container is always direction:ltr so scrollLeft always goes left→right
    let isPaused = false;
    const scrollSpeed = 0.6;

    function step() {
        if (!isPaused) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft += scrollSpeed;
            if (container.scrollLeft >= maxScroll - 1) {
                container.scrollLeft = 0;
            }
        }
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    container.addEventListener('mouseenter', () => { isPaused = true; });
    container.addEventListener('mouseleave', () => { isPaused = false; });
    container.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    container.addEventListener('touchend', () => {
        setTimeout(() => { isPaused = false; }, 2500);
    }, { passive: true });
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    const filtered = products.filter(p => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const name = currentLang === 'ar' ? p.nameAr : p.nameEn;
        const matchesSearch = name.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
            <i class="fa-solid fa-store-slash" style="font-size: 2.5rem; margin-bottom: 15px; display: block; opacity: 0.5;"></i>
            <p style="font-size: 1.1rem; font-weight: 500;">
                ${currentLang === 'ar' ? 'قريباً.. سيتم إدراج المنتجات الجديدة' : 'Coming soon.. New products will be added shortly'}
            </p>
        </div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const name = currentLang === 'ar' ? p.nameAr : p.nameEn;
        const addBtnText = currentLang === 'ar' ? 'أضيفي للسلة' : 'Add to Bag';
        return `
            <div class="product-card">
                <div class="product-img-box" onclick="openQuickView(${p.id})">
                    <img src="${p.img}" alt="${name}">
                    ${p.badge ? `<span class="badge-sale">${p.badge}</span>` : ''}
                    <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">${addBtnText}</button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${name}</h3>
                    <div class="product-price">
                        ${p.price} JOD
                        ${p.oldPrice ? `<span class="old-price">${p.oldPrice} JOD</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterProducts() {
    renderProducts();
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function toggleMobileMenu() {
    document.getElementById('mobile-nav').classList.toggle('open');
    document.getElementById('mobile-overlay').classList.toggle('open');
}

function toggleMobileSearch() {
    const box = document.querySelector('.search-box');
    box.classList.toggle('mobile-open');
    if (box.classList.contains('mobile-open')) {
        box.querySelector('input').focus();
    }
}

function addToCart(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    toggleCart();
}

function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((acc, curr) => acc + curr.qty, 0);
    document.getElementById('cart-count').innerText = count;

    const body = document.getElementById('cart-body');
    if (cart.length === 0) {
        body.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 50px;">
            ${currentLang === 'ar' ? 'حقيبة التسوق فارغة' : 'Your bag is empty'}
        </p>`;
        document.getElementById('cart-subtotal').innerText = '0.00 JOD';
        return;
    }

    let subtotal = 0;
    body.innerHTML = cart.map(item => {
        const name = currentLang === 'ar' ? item.nameAr : item.nameEn;
        subtotal += item.price * item.qty;
        return `
            <div class="cart-item">
                <img src="${item.img}" alt="${name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${name}</div>
                    <div class="cart-item-price">${item.price} JOD</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cart-subtotal').innerText = subtotal.toFixed(2) + ' JOD';
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert(currentLang === 'ar' ? 'يرجى إضافة منتجات للحقيبة أولاً' : 'Please add items to your bag first');
        return;
    }

    let orderDetails = currentLang === 'ar' 
        ? "مرحباً، أود إتمام طلب المنتجات التالية من بوتيك The I Boutique:\n\n" 
        : "Hello, I would like to place an order from The I Boutique:\n\n";

    let total = 0;
    cart.forEach((item, index) => {
        const name = currentLang === 'ar' ? item.nameAr : item.nameEn;
        orderDetails += `${index + 1}. ${name} - العدد: ${item.qty} - السعر: ${item.price * item.qty} JOD\n`;
        total += item.price * item.qty;
    });

    orderDetails += currentLang === 'ar' 
        ? `\nالمجموع الكلي: ${total} JOD (+ رسوم التوصيل)\n\nيرجى تزويدي بالتفاصيل لإرسال عنوان التوصيل.`
        : `\nTotal: ${total} JOD (+ delivery fee)\n\nPlease provide confirmation so I can send delivery details.`;

    const encodedText = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/962790359898?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
}

function openQuickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const name = currentLang === 'ar' ? product.nameAr : product.nameEn;
    const desc = currentLang === 'ar' ? product.descAr : product.descEn;
    const addBtnText = currentLang === 'ar' ? 'أضيفي للحقيبة' : 'Add to Bag';

    const content = `
        <div class="modal-img-box">
            <img src="${product.img}" alt="${name}">
        </div>
        <div style="display:flex; flex-direction:column; justify-content:center;">
            <h2 style="font-family: var(--font-heading); margin-bottom: 15px;">${name}</h2>
            <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 15px; color: var(--accent-gold);">${product.price} JOD</p>
            <p style="color: var(--text-muted); margin-bottom: 25px; font-size: 0.9rem;">${desc}</p>
            <button class="btn-primary" style="background: var(--text-primary); color: #fff; width: 100%; border:none; cursor:pointer;" onclick="addToCart(${product.id}); closeQuickView();">${addBtnText}</button>
        </div>
    `;

    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('quick-modal').classList.add('open');
    document.getElementById('quick-modal-overlay').classList.add('open');
}

function closeQuickView() {
    document.getElementById('quick-modal').classList.remove('open');
    document.getElementById('quick-modal-overlay').classList.remove('open');
}