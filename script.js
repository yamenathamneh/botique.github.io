/* =========================================================
   The I Boutique — storefront script
   ---------------------------------------------------------
   Edit the CONFIG and the products[] list below to run the shop.
   ========================================================= */

/* ---------------- Config ---------------- */
const WHATSAPP_NUMBER = "962790359898";                 // international format, no + or spaces
const DELIVERY_FEES   = { amman: 2, other: 3 };         // JOD — change freely
const CART_KEY        = "tib_cart_v1";
const LANG_KEY        = "tib_lang_v1";

/* ---------------- Catalogue ----------------
   Add / edit products here.
   Fields:
     id        (number, unique)
     category  must match a category id below
     nameAr / nameEn, descAr / descEn
     price     (number), oldPrice (optional)
     badgeAr / badgeEn (optional)
     img       filename used in this folder
     sizes     (optional array, e.g. ["S","M","L"])
     stock     (optional number; 0 = sold out)
--------------------------------------------- */
const products = [
    {
        id: 1,
        category: "suits",
        nameAr: "طقم رسمي كلاسيك",
        nameEn: "Classic Tailored Suit",
        price: 49,
        oldPrice: 65,
        badgeAr: "خصم",
        badgeEn: "Sale",
        sizes: ["S", "M", "L", "XL"],
        img: "suit.jpg",
        descAr: "طقم بقَصّة تركية راقية وقماش عالي الجودة، مثالي للمناسبات والعمل.",
        descEn: "A refined Turkish-cut suit in premium fabric, perfect for work and occasions."
    },
    {
        id: 2,
        category: "jackets",
        nameAr: "جاكيت عصري",
        nameEn: "Modern Jacket",
        price: 39,
        sizes: ["S", "M", "L"],
        img: "jacket.jpg",
        descAr: "جاكيت أنيق بخامة مريحة يمنح إطلالتك لمسة عصرية.",
        descEn: "A chic jacket in a comfortable fabric that adds a modern touch to any look."
    },
    {
        id: 3,
        category: "tricot",
        nameAr: "بلوفر تريكو ناعم",
        nameEn: "Soft Knit Sweater",
        price: 25,
        oldPrice: 32,
        badgeAr: "خصم",
        badgeEn: "Sale",
        sizes: ["S", "M", "L"],
        img: "tricot.jpg",
        descAr: "تريكو ناعم ودافئ بتصميم بسيط وأنيق يناسب كل الأوقات.",
        descEn: "Soft, warm knitwear with a clean, elegant design for everyday wear."
    },
    {
        id: 4,
        category: "skirts",
        nameAr: "تنورة أنيقة",
        nameEn: "Elegant Skirt",
        price: 22,
        sizes: ["S", "M", "L"],
        img: "skirts.jpg",
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 5,
        category: "tops",
        nameAr: "توب كلاسيك",
        nameEn: "Classic Top",
        price: 18,
        oldPrice: 24,
        badgeAr: "خصم",
        badgeEn: "Sale",
        sizes: ["S", "M", "L", "XL"],
        img: "tops.jpg",
        descAr: "توب بسيط وأنيق يمكن تنسيقه مع أي إطلالة.",
        descEn: "A simple, elegant top that pairs with everything in your wardrobe."
    }
];

const categories = [
    { id: "all",         nameAr: "الكل",          nameEn: "All Items" },
    { id: "suits",       nameAr: "أطقم رسمية",    nameEn: "Formal Suits" },
    { id: "jackets",     nameAr: "جاكيتات",       nameEn: "Jackets" },
    { id: "tricot",      nameAr: "تريكو",         nameEn: "Tricot & Knitwear" },
    { id: "trend-jeans", nameAr: "ست ترند جينز",  nameEn: "Trend Jeans Set" },
    { id: "jeans",       nameAr: "جينزات",        nameEn: "Jeans" },
    { id: "skirts",      nameAr: "تنانير",        nameEn: "Skirts" },
    { id: "tops",        nameAr: "توبات",         nameEn: "Tops" }
];

const governorates = [
    { id: "amman",   nameAr: "عمّان",          nameEn: "Amman",              fee: DELIVERY_FEES.amman },
    { id: "irbid",   nameAr: "إربد",           nameEn: "Irbid",              fee: DELIVERY_FEES.other },
    { id: "zarqa",   nameAr: "الزرقاء",        nameEn: "Zarqa",              fee: DELIVERY_FEES.other },
    { id: "balqa",   nameAr: "البلقاء / السلط", nameEn: "Balqa / Salt",       fee: DELIVERY_FEES.other },
    { id: "madaba",  nameAr: "مادبا",          nameEn: "Madaba",             fee: DELIVERY_FEES.other },
    { id: "mafraq",  nameAr: "المفرق",         nameEn: "Mafraq",             fee: DELIVERY_FEES.other },
    { id: "jerash",  nameAr: "جرش",            nameEn: "Jerash",             fee: DELIVERY_FEES.other },
    { id: "ajloun",  nameAr: "عجلون",          nameEn: "Ajloun",             fee: DELIVERY_FEES.other },
    { id: "karak",   nameAr: "الكرك",          nameEn: "Karak",              fee: DELIVERY_FEES.other },
    { id: "tafilah", nameAr: "الطفيلة",        nameEn: "Tafilah",            fee: DELIVERY_FEES.other },
    { id: "maan",    nameAr: "معان / البتراء", nameEn: "Ma'an / Petra",      fee: DELIVERY_FEES.other },
    { id: "aqaba",   nameAr: "العقبة",         nameEn: "Aqaba",              fee: DELIVERY_FEES.other }
];

/* ---------------- Translations ---------------- */
const i18n = {
    ar: {
        langBtn: "EN",
        announcement: "توصيل لجميع مناطق الأردن 📦 | الدفع عند الاستلام 🚚",
        searchPlaceholder: "بحث عن منتجات...",
        heroSub: "تشكيلة الأناقة التركية",
        heroTitle: "أناقة بلا حدود",
        heroBtn: "تسوقي المجموعة الآن",
        usp1Title: "توصيل سريع", usp1Desc: "لكافة المحافظات في الأردن",
        usp2Title: "الدفع عند الاستلام", usp2Desc: "كاش بكل أمان وراحة",
        usp3Title: "جودة تركية فاخرة", usp3Desc: "تصاميم عصرية مختارة بعناية",
        storyText: "حيث تلتقي الأناقة التركية بالذوق الراقي. نقدم لكِ أحدث صيحات الموضة النسائية لتكوني دائماً في قمة التألق والثقة.",
        lookbookTitle: "التشكيلة المميزة",
        lbSuits: "أطقم رسمية", lbJackets: "جاكيتات", lbTricot: "تريكو", lbSkirts: "تنانير", lbTops: "توبات",
        lbShop: "اكتشفي التشكيلة",
        cartTitle: "حقيبة التسوق",
        cartEmpty: "حقيبة التسوق فارغة",
        labelSubtotal: "المجموع الفرعي:",
        labelDelivery: "رسوم التوصيل:",
        labelTotal: "المجموع الكلي:",
        formTitle: "تفاصيل التوصيل",
        labelName: "الاسم الكامل", labelPhone: "رقم الهاتف", labelGov: "المحافظة",
        labelAddress: "العنوان التفصيلي", labelNote: "ملاحظات (اختياري)",
        phName: "مثال: سارة أحمد", phPhone: "0791234567",
        phAddress: "المنطقة، الشارع، رقم البناية", phNote: "أي تفاصيل إضافية",
        govPlaceholder: "اختاري المحافظة",
        btnCheckout: "إتمام الطلب عبر الواتساب",
        errRequired: "يرجى تعبئة الاسم ورقم الهاتف والمحافظة والعنوان.",
        errPhone: "رقم الهاتف غير صحيح. مثال: 0791234567",
        addToBag: "أضيفي للحقيبة",
        addToBagShort: "أضيفي للسلة",
        soldOut: "نفدت الكمية",
        comingSoon: "قريباً.. سيتم إدراج المنتجات الجديدة",
        chooseSize: "اختاري المقاس",
        quantity: "الكمية",
        sizeFirst: "يرجى اختيار المقاس أولاً",
        footerDesc: "بوتيك ملابس نسائية تركية ذات جودة عالية. توصيل لجميع المحافظات في الأردن والدفع عند الاستلام.",
        footerContactTitle: "تواصل معنا",
        footerInstagram: "صفحتنا على إنستغرام",
        footerFacebook: "صفحتنا على فيسبوك",
        footerPoliciesTitle: "سياسات المتجر",
        policy1: "الدفع كاش عند الاستلام",
        policy2: "نعتذر عن التبديل أو الترجيع",
        remove: "حذف",
        ariaMenu: "القائمة", ariaSearch: "بحث", ariaCart: "حقيبة التسوق", ariaClose: "إغلاق",
        ariaLang: "تغيير اللغة", ariaWhatsapp: "تواصل عبر واتساب", ariaBackToTop: "العودة للأعلى",
        ariaProduct: "تفاصيل المنتج"
    },
    en: {
        langBtn: "العربية",
        announcement: "Delivery across Jordan 📦 | Cash on Delivery 🚚",
        searchPlaceholder: "Search products...",
        heroSub: "Turkish High-Fashion Collection",
        heroTitle: "Elegance Redefined",
        heroBtn: "Shop Collection",
        usp1Title: "Fast Delivery", usp1Desc: "Across all Jordan governorates",
        usp2Title: "Cash on Delivery", usp2Desc: "Safe & secure cash payment",
        usp3Title: "Turkish Luxury Quality", usp3Desc: "Handpicked modern designs",
        storyText: "Where Turkish elegance meets sophisticated taste. Bringing you the latest women's fashion trends to keep you radiant and confident.",
        lookbookTitle: "Featured Collections",
        lbSuits: "Formal Suits", lbJackets: "Jackets", lbTricot: "Tricot & Knitwear", lbSkirts: "Skirts", lbTops: "Tops",
        lbShop: "Discover Collection",
        cartTitle: "Shopping Bag",
        cartEmpty: "Your bag is empty",
        labelSubtotal: "Subtotal:",
        labelDelivery: "Delivery fee:",
        labelTotal: "Total:",
        formTitle: "Delivery details",
        labelName: "Full name", labelPhone: "Phone number", labelGov: "Governorate",
        labelAddress: "Detailed address", labelNote: "Notes (optional)",
        phName: "e.g. Sara Ahmad", phPhone: "0791234567",
        phAddress: "Area, street, building no.", phNote: "Any extra details",
        govPlaceholder: "Select governorate",
        btnCheckout: "Checkout via WhatsApp",
        errRequired: "Please fill in your name, phone, governorate and address.",
        errPhone: "Invalid phone number. Example: 0791234567",
        addToBag: "Add to Bag",
        addToBagShort: "Add to Bag",
        soldOut: "Sold out",
        comingSoon: "Coming soon.. New products will be added shortly",
        chooseSize: "Select size",
        quantity: "Quantity",
        sizeFirst: "Please select a size first",
        footerDesc: "High quality Turkish women's clothing boutique. Delivery to all Jordan governorates and Cash on Delivery.",
        footerContactTitle: "Contact Us",
        footerInstagram: "Our Instagram Page",
        footerFacebook: "Our Facebook Page",
        footerPoliciesTitle: "Store Policies",
        policy1: "Cash on Delivery",
        policy2: "No Exchanges or Refunds",
        remove: "Remove",
        ariaMenu: "Menu", ariaSearch: "Search", ariaCart: "Shopping bag", ariaClose: "Close",
        ariaLang: "Switch language", ariaWhatsapp: "Chat on WhatsApp", ariaBackToTop: "Back to top",
        ariaProduct: "Product details"
    }
};

/* ---------------- State ---------------- */
let currentLang = localStorage.getItem(LANG_KEY) === "en" ? "en" : "ar";
let selectedCategory = "all";
let cart = loadCart();

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    initAutoScrollCarousel();
    initGridKeyboard();
    initLookbookKeyboard();
    initFloatingUI();
    initGlobalKeyboard();
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    onWindowScroll();
});

/* ---------------- Helpers ---------------- */
function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.ar[key] || key);
}

function formatPrice(value) {
    return Number(value).toFixed(2) + " JOD";
}

function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

function escapeAttr(value) {
    return escapeHtml(value);
}

/* ---------------- Language ---------------- */
function toggleLanguage() {
    setLanguage(currentLang === "ar" ? "en" : "ar");
}

function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ar";
    localStorage.setItem(LANG_KEY, currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    applyI18n();
    renderGovernorates();
    renderCategories();
    renderProducts();
    updateCartUI();
}

function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const val = i18n[currentLang][key];
        if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        const val = i18n[currentLang][key];
        if (val != null) el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const key = el.getAttribute("data-i18n-aria");
        const val = i18n[currentLang][key];
        if (val != null) el.setAttribute("aria-label", val);
    });
}

/* ---------------- Categories ---------------- */
function renderCategories() {
    const nav = document.getElementById("categories-bar");
    const mobileNav = document.getElementById("mobile-categories");
    if (!nav || !mobileNav) return;

    let html = "";
    categories.forEach(cat => {
        const name = currentLang === "ar" ? cat.nameAr : cat.nameEn;
        const active = cat.id === selectedCategory ? "active" : "";
        html += `<button class="cat-item ${active}" onclick="selectCategory('${cat.id}')">${name}</button>`;
    });

    nav.innerHTML = html;
    mobileNav.innerHTML = html;
}

function selectCategory(catId) {
    selectedCategory = catId;
    renderCategories();
    renderProducts();

    const section = document.getElementById("products-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });

    if (document.getElementById("mobile-nav").classList.contains("open")) {
        closeMobileMenu();
    }
}

/* ---------------- Products ---------------- */
function renderProducts() {
    const grid = document.getElementById("products-grid");
    const searchInput = document.getElementById("search-input");
    if (!grid) return;

    const term = (searchInput ? searchInput.value : "").trim().toLowerCase();

    const filtered = products.filter(p => {
        const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
        const haystack = (p.nameAr + " " + p.nameEn).toLowerCase();
        return matchesCategory && haystack.includes(term);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">
            <i class="fa-solid fa-store-slash" aria-hidden="true"></i>
            <p>${t("comingSoon")}</p>
        </div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const name = currentLang === "ar" ? p.nameAr : p.nameEn;
        const badge = currentLang === "ar" ? p.badgeAr : p.badgeEn;
        const soldOut = typeof p.stock === "number" && p.stock <= 0;
        return `
            <div class="product-card">
                <div class="product-img-box" role="button" tabindex="0" aria-label="${escapeAttr(name)}" onclick="openQuickView(${p.id})">
                    <img src="${escapeAttr(p.img)}" alt="${escapeAttr(name)}" loading="lazy" decoding="async">
                    ${badge ? `<span class="badge-sale">${escapeHtml(badge)}</span>` : ""}
                    ${soldOut ? `<span class="badge-soldout">${t("soldOut")}</span>` : ""}
                    ${soldOut ? "" : `<button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">${t("addToBagShort")}</button>`}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${escapeHtml(name)}</h3>
                    <div class="product-price">
                        ${formatPrice(p.price)}
                        ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ""}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function filterProducts() {
    renderProducts();
}

/* ---------------- Quick view modal ---------------- */
const modalState = { id: null, size: null, qty: 1 };

function openQuickView(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const name = currentLang === "ar" ? p.nameAr : p.nameEn;
    const desc = currentLang === "ar" ? p.descAr : p.descEn;
    const sizes = Array.isArray(p.sizes) ? p.sizes : [];

    modalState.id = id;
    modalState.size = sizes.length === 1 ? sizes[0] : null;
    modalState.qty = 1;

    const content = `
        <div class="modal-img-box">
            <img src="${escapeAttr(p.img)}" alt="${escapeAttr(name)}" decoding="async">
        </div>
        <div class="modal-details">
            <h2 class="modal-title">${escapeHtml(name)}</h2>
            <p class="modal-price">${formatPrice(p.price)}${p.oldPrice ? ` <span class="old-price">${formatPrice(p.oldPrice)}</span>` : ""}</p>
            <p class="modal-desc">${escapeHtml(desc)}</p>
            ${sizes.length ? `
                <div class="size-block">
                    <span class="size-label">${t("chooseSize")}</span>
                    <div class="size-options" id="modal-sizes">
                        ${sizes.map(s => `<button type="button" class="size-pill${modalState.size === s ? " active" : ""}" data-size="${escapeAttr(s)}">${escapeHtml(s)}</button>`).join("")}
                    </div>
                </div>` : ""}
            <div class="qty-block">
                <span class="size-label">${t("quantity")}</span>
                <div class="qty-controls modal-qty">
                    <button type="button" class="qty-btn" data-qty="-1" aria-label="decrease">−</button>
                    <span id="modal-qty-val">1</span>
                    <button type="button" class="qty-btn" data-qty="1" aria-label="increase">+</button>
                </div>
            </div>
            <button type="button" class="btn-primary modal-add-btn" id="modal-add-btn">${t("addToBag")}</button>
            <p class="modal-warning" id="modal-warning"></p>
        </div>
    `;

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = content;

    const sizeWrap = document.getElementById("modal-sizes");
    if (sizeWrap) {
        sizeWrap.addEventListener("click", e => {
            const pill = e.target.closest(".size-pill");
            if (!pill) return;
            modalState.size = pill.dataset.size;
            sizeWrap.querySelectorAll(".size-pill").forEach(b => b.classList.toggle("active", b === pill));
        });
    }

    const qtyWrap = modalContent.querySelector(".modal-qty");
    qtyWrap.addEventListener("click", e => {
        const btn = e.target.closest(".qty-btn");
        if (!btn) return;
        modalState.qty = Math.max(1, modalState.qty + Number(btn.dataset.qty));
        document.getElementById("modal-qty-val").textContent = modalState.qty;
    });

    document.getElementById("modal-add-btn").addEventListener("click", () => {
        if (sizes.length && !modalState.size) {
            document.getElementById("modal-warning").textContent = t("sizeFirst");
            return;
        }
        addToCart(modalState.id, modalState.size, modalState.qty);
        closeQuickView();
    });

    document.getElementById("quick-modal").classList.add("open");
    document.getElementById("quick-modal-overlay").classList.add("open");
    syncScrollLock();
}

function closeQuickView() {
    document.getElementById("quick-modal").classList.remove("open");
    document.getElementById("quick-modal-overlay").classList.remove("open");
    syncScrollLock();
}

/* ---------------- Cart ---------------- */
function addToCart(productId, size, qty) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const finalSize = size || "";
    const finalQty = Math.max(1, Number(qty) || 1);

    const existing = cart.find(i => i.id === productId && (i.size || "") === finalSize);
    if (existing) {
        existing.qty += finalQty;
    } else {
        cart.push({ id: productId, size: finalSize, qty: finalQty });
    }

    saveCart();
    updateCartUI();
    openCart();
}

function updateQty(productId, size, change) {
    const target = cart.find(i => i.id === productId && (i.size || "") === (size || ""));
    if (!target) return;
    target.qty += change;
    if (target.qty <= 0) {
        cart = cart.filter(i => !(i.id === productId && (i.size || "") === (size || "")));
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(productId, size) {
    cart = cart.filter(i => !(i.id === productId && (i.size || "") === (size || "")));
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById("cart-count");
    const itemsEl = document.getElementById("cart-items");
    const formEl = document.getElementById("checkout-form");
    if (!countEl || !itemsEl) return;

    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    countEl.textContent = count;

    if (cart.length === 0) {
        itemsEl.innerHTML = `<p class="cart-empty">${t("cartEmpty")}</p>`;
        if (formEl) formEl.hidden = true;
        renderTotals();
        return;
    }

    itemsEl.innerHTML = cart.map(item => {
        const p = products.find(x => x.id === item.id);
        if (!p) return "";
        const name = currentLang === "ar" ? p.nameAr : p.nameEn;
        return `
            <div class="cart-item">
                <img src="${escapeAttr(p.img)}" alt="${escapeAttr(name)}" loading="lazy" decoding="async">
                <div class="cart-item-details">
                    <div class="cart-item-title">${escapeHtml(name)}</div>
                    ${item.size ? `<div class="cart-item-size">${escapeHtml(item.size)}</div>` : ""}
                    <div class="cart-item-price">${formatPrice(p.price)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQty(${item.id}, '${escapeAttr(item.size)}', -1)" aria-label="decrease">−</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, '${escapeAttr(item.size)}', 1)" aria-label="increase">+</button>
                    </div>
                </div>
                <button class="cart-remove" onclick="removeFromCart(${item.id}, '${escapeAttr(item.size)}')" aria-label="${t("remove")}">
                    <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
                </button>
            </div>
        `;
    }).join("");

    if (formEl) formEl.hidden = false;
    renderTotals();
}

function renderTotals() {
    const govSelect = document.getElementById("gov-select");
    const selectedGov = govSelect ? governorates.find(g => g.id === govSelect.value) : null;
    const fee = selectedGov ? selectedGov.fee : 0;

    const subtotal = cart.reduce((sum, i) => {
        const p = products.find(x => x.id === i.id);
        return sum + (p ? p.price * i.qty : 0);
    }, 0);

    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");
    const deliverEl = document.getElementById("val-delivery");

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(subtotal + fee);

    if (deliverEl) {
        if (selectedGov) {
            deliverEl.textContent = formatPrice(fee);
        } else {
            deliverEl.textContent = currentLang === "ar"
                ? `عمّان ${DELIVERY_FEES.amman.toFixed(2)} | أخرى ${DELIVERY_FEES.other.toFixed(2)} JOD`
                : `Amman ${DELIVERY_FEES.amman.toFixed(2)} | Other ${DELIVERY_FEES.other.toFixed(2)} JOD`;
        }
    }
}

function renderGovernorates() {
    const sel = document.getElementById("gov-select");
    if (!sel) return;
    const prev = sel.value;
    sel.innerHTML = `<option value="">${t("govPlaceholder")}</option>` +
        governorates.map(g => `<option value="${g.id}">${currentLang === "ar" ? g.nameAr : g.nameEn}</option>`).join("");
    sel.value = prev;
}

/* ---------------- Cart persistence ---------------- */
function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* ignore */ }
}

function loadCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(i =>
            i && typeof i.id === "number" &&
            products.some(p => p.id === i.id) &&
            typeof i.qty === "number" && i.qty > 0
        ).map(i => ({ id: i.id, size: typeof i.size === "string" ? i.size : "", qty: i.qty }));
    } catch (e) {
        return [];
    }
}

/* ---------------- Drawers / overlays ---------------- */
function openCart() {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
    syncScrollLock();
    const btn = document.querySelector("#cart-drawer .close-btn");
    if (btn) btn.focus({ preventScroll: true });
}

function closeCart() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
    syncScrollLock();
}

function toggleCart() {
    if (document.getElementById("cart-drawer").classList.contains("open")) closeCart();
    else openCart();
}

function openMobileMenu() {
    document.getElementById("mobile-nav").classList.add("open");
    document.getElementById("mobile-overlay").classList.add("open");
    const btn = document.querySelector(".mobile-menu-btn");
    if (btn) btn.setAttribute("aria-expanded", "true");
    syncScrollLock();
}

function closeMobileMenu() {
    document.getElementById("mobile-nav").classList.remove("open");
    document.getElementById("mobile-overlay").classList.remove("open");
    const btn = document.querySelector(".mobile-menu-btn");
    if (btn) btn.setAttribute("aria-expanded", "false");
    syncScrollLock();
}

function toggleMobileMenu() {
    if (document.getElementById("mobile-nav").classList.contains("open")) closeMobileMenu();
    else openMobileMenu();
}

function toggleMobileSearch() {
    const box = document.querySelector(".search-box");
    if (!box) return;
    const open = box.classList.toggle("mobile-open");
    const btn = document.querySelector(".mobile-search-toggle");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) box.querySelector("input").focus();
}

function syncScrollLock() {
    const anyOpen =
        document.getElementById("cart-drawer").classList.contains("open") ||
        document.getElementById("quick-modal").classList.contains("open") ||
        document.getElementById("mobile-nav").classList.contains("open");
    document.documentElement.classList.toggle("no-scroll", anyOpen);
    document.body.classList.toggle("no-scroll", anyOpen);
}

/* ---------------- Checkout ---------------- */
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert(currentLang === "ar" ? "يرجى إضافة منتجات للحقيبة أولاً" : "Please add items to your bag first");
        return;
    }

    const nameEl = document.getElementById("cust-name");
    const phoneEl = document.getElementById("cust-phone");
    const govEl = document.getElementById("gov-select");
    const addressEl = document.getElementById("cust-address");
    const noteEl = document.getElementById("cust-note");
    const msgEl = document.getElementById("form-msg");

    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const govId = govEl.value;
    const address = addressEl.value.trim();
    const note = noteEl.value.trim();

    if (!name || !phone || !govId || !address) {
        if (msgEl) msgEl.textContent = t("errRequired");
        return;
    }

    const phoneOk = /^(?:\+?962|0)?7[789]\d{7}$/.test(phone.replace(/[\s-]/g, ""));
    if (!phoneOk) {
        if (msgEl) msgEl.textContent = t("errPhone");
        return;
    }
    if (msgEl) msgEl.textContent = "";

    const gov = governorates.find(g => g.id === govId);
    const govName = currentLang === "ar" ? gov.nameAr : gov.nameEn;

    let subtotal = 0;
    const lines = cart.map((item, index) => {
        const p = products.find(x => x.id === item.id);
        subtotal += p.price * item.qty;
        const pName = currentLang === "ar" ? p.nameAr : p.nameEn;
        const sizeTxt = item.size ? (currentLang === "ar" ? ` - المقاس: ${item.size}` : ` - Size: ${item.size}`) : "";
        return `${index + 1}. ${pName}${sizeTxt} - ${currentLang === "ar" ? "العدد" : "Qty"}: ${item.qty} - ${formatPrice(p.price * item.qty)}`;
    }).join("\n");

    const total = subtotal + gov.fee;
    const header = currentLang === "ar"
        ? "مرحباً، أود إتمام طلبي من The I Boutique:\n\n"
        : "Hello, I would like to place an order from The I Boutique:\n\n";

    const footerTxt = currentLang === "ar"
        ? `\nالمجموع الفرعي: ${formatPrice(subtotal)}\nرسوم التوصيل (${govName}): ${formatPrice(gov.fee)}\nالمجموع الكلي: ${formatPrice(total)}\n\n` +
          `الاسم: ${name}\nالهاتف: ${phone}\nالمحافظة: ${govName}\nالعنوان: ${address}` + (note ? `\nملاحظات: ${note}` : "")
        : `\nSubtotal: ${formatPrice(subtotal)}\nDelivery (${govName}): ${formatPrice(gov.fee)}\nTotal: ${formatPrice(total)}\n\n` +
          `Name: ${name}\nPhone: ${phone}\nGovernorate: ${govName}\nAddress: ${address}` + (note ? `\nNotes: ${note}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(header + lines + footerTxt)}`;
    window.open(url, "_blank");
}

/* ---------------- Lookbook carousel ---------------- */
function initAutoScrollCarousel() {
    const container = document.getElementById("lookbook-carousel");
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    container.style.scrollBehavior = "auto";

    let hoverPaused = false;
    let inView = true;
    let direction = 1;
    const speed = 0.6;

    function step() {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (!hoverPaused && inView && !document.hidden && maxScroll > 4) {
            container.scrollLeft += speed * direction;
            if (container.scrollLeft >= maxScroll - 1) direction = -1;
            else if (container.scrollLeft <= 1) direction = 1;
        }
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    container.addEventListener("mouseenter", () => { hoverPaused = true; });
    container.addEventListener("mouseleave", () => { hoverPaused = false; });
    container.addEventListener("touchstart", () => { hoverPaused = true; }, { passive: true });
    container.addEventListener("touchend", () => { setTimeout(() => { hoverPaused = false; }, 2500); }, { passive: true });

    if ("IntersectionObserver" in window) {
        new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
        }, { threshold: 0 }).observe(container);
    }
}

/* ---------------- Keyboard / a11y ---------------- */
function initGridKeyboard() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;
    grid.addEventListener("keydown", e => {
        const box = e.target.closest(".product-img-box");
        if (box && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            box.click();
        }
    });
}

function initLookbookKeyboard() {
    document.querySelectorAll(".lookbook-card").forEach(card => {
        card.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                card.click();
            }
        });
    });
}

function initGlobalKeyboard() {
    document.addEventListener("keydown", e => {
        if (e.key !== "Escape") return;
        if (document.getElementById("quick-modal").classList.contains("open")) {
            closeQuickView();
        } else if (document.getElementById("cart-drawer").classList.contains("open")) {
            closeCart();
        } else if (document.getElementById("mobile-nav").classList.contains("open")) {
            closeMobileMenu();
        } else {
            const box = document.querySelector(".search-box");
            if (box && box.classList.contains("mobile-open")) toggleMobileSearch();
        }
    });
}

/* ---------------- Floating UI ---------------- */
function initFloatingUI() {
    const btn = document.getElementById("back-to-top");
    if (btn) {
        btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
}

function onWindowScroll() {
    const header = document.querySelector(".header");
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);

    const btn = document.getElementById("back-to-top");
    if (btn) btn.classList.toggle("show", window.scrollY > 600);
}
