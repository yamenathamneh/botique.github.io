/* =========================================================
   The I Boutique — storefront script
   ---------------------------------------------------------
   Edit the CONFIG and the products[] list below to run the shop.
   ========================================================= */

/* ---------------- Config ---------------- */
const WHATSAPP_NUMBER = "962790359898";                 // international format, no + or spaces
const DELIVERY_FEES   = { amman: 2, other: 3 };         // JOD — change freely
const CART_KEY        = "tib_cart_v2";
const LANG_KEY        = "tib_lang_v1";

/* ---------------- Catalogue ---------------- */
const products = [
    {
        id: 1,
        category: "jackets",
        nameAr: "جاكيت بني قصير",
        nameEn: "Short Brown Jacket",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0007.webp",
        images: ["website_images/_DSC0007.webp", "website_images/_DSC0003.webp", "website_images/_DSC0001.webp"],
        descAr: "جاكيت بخامة فاخرة وقَصّة عصرية يكمل إطلالتك بأناقة.",
        descEn: "A premium jacket with a modern cut that completes any look."
    },
    {
        id: 2,
        category: "jackets",
        nameAr: "جاكيت جلد أسود",
        nameEn: "Black Leather Jacket",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0009.webp",
        images: ["website_images/_DSC0011.webp", "website_images/_DSC0015.webp", "website_images/_DSC0016.webp"],
        descAr: "جاكيت بخامة فاخرة وقَصّة عصرية يكمل إطلالتك بأناقة.",
        descEn: "A premium jacket with a modern cut that completes any look."
    },
    {
        id: 3,
        category: "jackets",
        nameAr: "كوت أسود طويل",
        nameEn: "Long Black Coat",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0025.webp",
        images: ["website_images/_DSC0025.webp", "website_images/_DSC0027.webp", "website_images/_DSC0028.webp"],
        descAr: "جاكيت بخامة فاخرة وقَصّة عصرية يكمل إطلالتك بأناقة.",
        descEn: "A premium jacket with a modern cut that completes any look."
    },
    {
        id: 4,
        category: "jackets",
        nameAr: "كوت خمري طويل",
        nameEn: "Long Burgundy Coat",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0033.webp",
        images: ["website_images/_DSC0033.webp", "website_images/_DSC0036.webp", "website_images/_DSC0037.webp"],
        descAr: "جاكيت بخامة فاخرة وقَصّة عصرية يكمل إطلالتك بأناقة.",
        descEn: "A premium jacket with a modern cut that completes any look."
    },
    {
        id: 5,
        category: "jackets",
        nameAr: "كوت أحمر طويل",
        nameEn: "Long Red Coat",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0042.webp",
        images: ["website_images/_DSC0045.webp", "website_images/_DSC0046.webp", "website_images/_DSC0049.webp"],
        descAr: "جاكيت بخامة فاخرة وقَصّة عصرية يكمل إطلالتك بأناقة.",
        descEn: "A premium jacket with a modern cut that completes any look."
    },
    {
        id: 6,
        category: "jackets",
        nameAr: "كوت أسود",
        nameEn: "Black Coat",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0053.webp",
        images: ["website_images/_DSC0063.webp", "website_images/_DSC0057.webp", "website_images/_DSC0062.webp"],
        descAr: "جاكيت بخامة فاخرة وقَصّة عصرية يكمل إطلالتك بأناقة.",
        descEn: "A premium jacket with a modern cut that completes any look."
    },
    {
        id: 7,
        category: "suits",
        nameAr: "طقم رسمي أسود",
        nameEn: "Black Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9456.webp",
        images: ["website_images/_DSC9549.webp", "website_images/_DSC9551.webp", "website_images/_DSC9553.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 8,
        category: "suits",
        nameAr: "طقم رسمي أحمر",
        nameEn: "Red Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9491.webp",
        images: ["website_images/_DSC9495.webp", "website_images/_DSC9501.webp", "website_images/_DSC9504.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 9,
        category: "suits",
        nameAr: "طقم رسمي أزرق فاتح",
        nameEn: "Light Blue Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9511.webp",
        images: ["website_images/_DSC9515.webp", "website_images/_DSC9517.webp", "website_images/_DSC9524.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 10,
        category: "suits",
        nameAr: "طقم رسمي جملي" ,
        nameEn: "Camel Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9539.webp",
        images: ["website_images/_DSC9542.webp", "website_images/_DSC9543.webp", "website_images/_DSC9544.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 11,
        category: "suits",
        nameAr: "طقم رسمي كحلي",
        nameEn: "Navy Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9574.webp",
        images: ["website_images/_DSC9574.webp", "website_images/_DSC9551.webp", "website_images/_DSC9554.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 12,
        category: "suits",
        nameAr: "طقم رسمي رمادي",
        nameEn: "Grey Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9606.webp",
        images: ["website_images/_DSC9606.webp", "website_images/_DSC9607.webp", "website_images/_DSC9605.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 13,
        category: "suits",
        nameAr: "طقم رسمي بيج",
        nameEn: "Beige Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9611.webp",
        images: ["website_images/_DSC9625.webp", "website_images/_DSC9617.webp", "website_images/_DSC9620.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 14,
        category: "suits",
        nameAr: "طقم رسمي كريمي",
        nameEn: "Cream Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9644.webp",
        images: ["website_images/_DSC9652.webp", "website_images/_DSC9657.webp", "website_images/_DSC9655.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 15,
        category: "suits",
        nameAr: "طقم رسمي سماوي",
        nameEn: "Sky Blue Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9662.webp",
        images: ["website_images/_DSC9670.webp", "website_images/_DSC9672.webp", "website_images/_DSC9674.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 16,
        category: "suits",
        nameAr: "طقم رسمي أسود بتفاصيل مميزة",
        nameEn: "Black Suit with Distinctive Details",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9676.webp",
        images: ["website_images/_DSC9686.webp", "website_images/_DSC9680.webp", "website_images/_DSC9683.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 17,
        category: "suits",
        nameAr: "طقم رسمي بنفسجي",
        nameEn: "Plum Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9691.webp",
        images: ["website_images/_DSC9697.webp", "website_images/_DSC9698.webp", "website_images/_DSC9700.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    {
        id: 18,
        category: "suits",
        nameAr: "طقم رسمي كاروهات",
        nameEn: "Check Formal Suit",
        price: 59,
        freeDelivery: true,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9725.webp",
        images: ["website_images/_DSC9726.webp", "website_images/_DSC9727.webp", "website_images/_DSC9729.webp"],
        descAr: "طقم رسمي بقَصّة راقية وخامة تركية فاخرة — السعر شامل التوصيل.",
        descEn: "A tailored formal suit in premium Turkish fabric — delivery included."
    },
    
    {
        id: 20,
        category: "tricot-sets",
        nameAr: "طقم تريكو بيج",
        nameEn: "Camel Knit Set",
        price: 45,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0450.webp",
        images: ["website_images/_DSC0454.webp", "website_images/_DSC0455.webp", "website_images/_DSC0457.webp"],
        descAr: "طقم تريكو ناعم بقَصّة أنثوية، مثالي للإطلالات اليومية والمناسبات.",
        descEn: "A soft knit set with a feminine cut, perfect for everyday and occasions."
    },
    {
        id: 21,
        category: "tricot-sets",
        nameAr: "طقم تريكو أسود",
        nameEn: "Black Knit Set",
        price: 45,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0469.webp",
        images: ["website_images/_DSC0471.webp", "website_images/_DSC0472.webp", "website_images/_DSC0474.webp"],
        descAr: "طقم تريكو ناعم بقَصّة أنثوية، مثالي للإطلالات اليومية والمناسبات.",
        descEn: "A soft knit set with a feminine cut, perfect for everyday and occasions."
    },
    {
        id: 22,
        category: "tricot",
        nameAr: "بلوفر مخطط",
        nameEn: "Striped Knit Sweater",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0106.webp",
        images: ["website_images/_DSC0111.webp", "website_images/_DSC0110.webp", "website_images/_DSC0113.webp"],
        descAr: "تريكو ناعم ودافئ بتصميم بسيط وأنيق يناسب كل الأوقات.",
        descEn: "Soft, warm knitwear with a clean, elegant design for everyday wear."
    },
    {
        id: 24,
        category: "tricot",
        nameAr: "بلوفر خمري مع سكارف",
        nameEn: "Burgundy Sweater with Scarf",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0122.webp",
        images: ["website_images/_DSC0122.webp", "website_images/_DSC0124.webp", "website_images/_DSC0126.webp"],
        descAr: "تريكو ناعم ودافئ بتصميم بسيط وأنيق يناسب كل الأوقات.",
        descEn: "Soft, warm knitwear with a clean, elegant design for everyday wear."
    },
    {
        id: 26,
        category: "blouses",
        nameAr: "بلوزة بيضاء ",
        nameEn: "Fitted White Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0064.webp",
        images: ["website_images/_DSC0066.webp", "website_images/_DSC0067.webp", "website_images/_DSC0069.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 27,
        category: "blouses",
        nameAr: "بلوزة بيضاء بأكمام طويلة",
        nameEn: "White Long-Sleeve Blouse",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0086.webp",
        images: ["website_images/_DSC0088.webp", "website_images/_DSC0089.webp", "website_images/_DSC0090.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 28,
        category: "blouses",
        nameAr: "بلوزة زهرية مخرمة",
        nameEn: "Pink Cut-Out Knit Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0146.webp",
        images: ["website_images/_DSC0146.webp", "website_images/_DSC0149.webp", "website_images/_DSC0151.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 29,
        category: "blouses",
        nameAr: "بلوزة زرقاء فاتحة",
        nameEn: "Light Blue Knit Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0164.webp",
        images: ["website_images/_DSC0164.webp", "website_images/_DSC0168.webp", "website_images/_DSC0167.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 30,
        category: "blouses",
        nameAr: "بلوزة فوشيا أوف شولدر",
        nameEn: "Fuchsia Off-Shoulder Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0173.webp",
        images: ["website_images/_DSC0175.webp", "website_images/_DSC0178.webp", "website_images/_DSC0176.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 31,
        category: "blouses",
        nameAr: "بلوزة خمري بسحاب",
        nameEn: "Burgundy Zip Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0193.webp",
        images: ["website_images/_DSC0193.webp", "website_images/_DSC0195.webp", "website_images/_DSC0197.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 32,
        category: "blouses",
        nameAr: "بلوزة بني بسحاب",
        nameEn: "Brown Zip Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0202.webp",
        images: ["website_images/_DSC0203.webp", "website_images/_DSC0206.webp", "website_images/_DSC0210.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 33,
        category: "blouses",
        nameAr: "بلوزة بيضاء رقبة عالية",
        nameEn: "White Ribbed Turtleneck",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0254.webp",
        images: ["website_images/_DSC0255.webp", "website_images/_DSC0260.webp", "website_images/_DSC0259.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 34,
        category: "blouses",
        nameAr: "بلوزة بيضاء",
        nameEn: "White Blouse",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9730.webp",
        images: ["website_images/_DSC9730.webp", "website_images/_DSC9737.webp", "website_images/_DSC9733.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 35,
        category: "blouses",
        nameAr: "بلوزة بيضاء بأزرار",
        nameEn: "White Buttoned Blouse",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9746.webp",
        images: ["website_images/_DSC9746.webp", "website_images/_DSC9747.webp", "website_images/_DSC9745.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 36,
        category: "blouses",
        nameAr: "بلوزة أزرق فاتح باكمام منفوخة",
        nameEn: "Light Blue Puff-Sleeve Blouse",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9800.webp",
        images: ["website_images/_DSC9801.webp", "website_images/_DSC9803.webp", "website_images/_DSC9805.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 37,
        category: "blouses",
        nameAr: "بلوزة سوداء بحواف بيضاء",
        nameEn: "Black V-Neck with White Trim",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9814.webp",
        images: ["website_images/_DSC9825.webp", "website_images/_DSC9822.webp", "website_images/_DSC9821.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 38,
        category: "blouses",
        nameAr: "بلوزة سوداء",
        nameEn: "Black Blouse",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9832.webp",
        images: ["website_images/_DSC9833.webp", "website_images/_DSC9836.webp", "website_images/_DSC9832.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 39,
        category: "blouses",
        nameAr: "بلوزة بيضاء بحواف سوداء",
        nameEn: "White V-Neck with Black Trim",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9861.webp",
        images: ["website_images/_DSC9862.webp", "website_images/_DSC9866.webp", "website_images/_DSC9869.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 40,
        category: "blouses",
        nameAr: "بلوزة خمري مفتوحة",
        nameEn: "Burgundy Keyhole Top",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9889.webp",
        images: ["website_images/_DSC9890.webp", "website_images/_DSC9893.webp", "website_images/_DSC9894.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 41,
        category: "blouses",
        nameAr: "بلوزة بيضاء مفتوحة",
        nameEn: "White Keyhole Blouse",
        price: 12,
        promo2for20: true,
        badgeAr: "2 بـ 20", badgeEn: "2 for 20",
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9896.webp",
        images: ["website_images/_DSC9898.webp", "website_images/_DSC9902.webp", "website_images/_DSC9901.webp"],
        descAr: "بلوزة أنيقة بخامة مريحة — بلوزتان بـ 20 دينار.",
        descEn: "An elegant blouse in a comfortable fabric — two for 20 JOD."
    },
    {
        id: 42,
        category: "cut-body",
        nameAr: "كت خمري سادة",
        nameEn: "Burgundy Sleeveless Top",
        price: 10,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9758.webp",
        images: ["website_images/_DSC9758.webp", "website_images/_DSC9760.webp", "website_images/_DSC9761.webp"],
        descAr: "كت / بودي بسيط وأنيق يمكن تنسيقه مع أي إطلالة.",
        descEn: "A simple, elegant crop/bodysuit that pairs with everything."
    },
    {
        id: 44,
        category: "shirts",
        nameAr: "قميص مخطط",
        nameEn: "Striped Shirt",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9766.webp",
        images: ["website_images/_DSC9776.webp", "website_images/_DSC9773.webp", "website_images/_DSC9777.webp"],
        descAr: "قميص أنيق بخامة عالية الجودة وقَصّة مريحة.",
        descEn: "An elegant shirt in high-quality fabric with a comfortable cut."
    },
    {
        id: 45,
        category: "shirts",
        nameAr: "قميص أحمر",
        nameEn: "Red Shirt",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9782.webp",
        images: ["website_images/_DSC9782.webp", "website_images/_DSC9785.webp", "website_images/_DSC9790.webp"],
        descAr: "قميص أنيق بخامة عالية الجودة وقَصّة مريحة.",
        descEn: "An elegant shirt in high-quality fabric with a comfortable cut."
    },
    {
        id: 46,
        category: "shirts",
        nameAr: "قميص أسود",
        nameEn: "Black Shirt",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9903.webp",
        images: ["website_images/_DSC9903.webp", "website_images/_DSC9906.webp", "website_images/_DSC9908.webp"],
        descAr: "قميص أنيق بخامة عالية الجودة وقَصّة مريحة.",
        descEn: "An elegant shirt in high-quality fabric with a comfortable cut."
    },
    {
        id: 47,
        category: "shirts",
        nameAr: "قميص أزرق فاتح",
        nameEn: "Light Blue Shirt",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9912.webp",
        images: ["website_images/_DSC9918.webp", "website_images/_DSC9917.webp", "website_images/_DSC9916.webp"],
        descAr: "قميص أنيق بخامة عالية الجودة وقَصّة مريحة.",
        descEn: "An elegant shirt in high-quality fabric with a comfortable cut."
    },
    {
        id: 48,
        category: "pants",
        nameAr: "بنطلون أبيض واسع",
        nameEn: "White Wide-Leg Trousers",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0229.webp",
        images: ["website_images/_DSC0235.webp", "website_images/_DSC0237.webp", "website_images/_DSC0238.webp"],
        descAr: "بنطلون قماش بقَصّة مريحة وأنيقة تناسب العمل والمناسبات.",
        descEn: "Tailored trousers with a comfortable, elegant cut for work and occasions."
    },
    {
        id: 49,
        category: "pants",
        nameAr: "بنطلون أسود",
        nameEn: "Black Trousers",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0284.webp",
        images: ["website_images/_DSC0283.webp", "website_images/_DSC0285.webp", "website_images/_DSC0287.webp"],
        descAr: "بنطلون قماش بقَصّة مريحة وأنيقة تناسب العمل والمناسبات.",
        descEn: "Tailored trousers with a comfortable, elegant cut for work and occasions."
    },
    {
        id: 50,
        category: "pants",
        nameAr: "بنطلون خمري",
        nameEn: "Burgundy Trousers",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC9924.webp",
        images: ["website_images/_DSC9925.webp", "website_images/_DSC9927.webp", "website_images/_DSC9934.webp"],
        descAr: "بنطلون قماش بقَصّة مريحة وأنيقة تناسب العمل والمناسبات.",
        descEn: "Tailored trousers with a comfortable, elegant cut for work and occasions."
    },
    {
        id: 51,
        category: "pants",
        nameAr: "بنطلون جلد بني",
        nameEn: "Brown Leather Trousers",
        price: 15,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0516.webp",
        images: ["website_images/_DSC0517.webp", "website_images/_DSC0519.webp", "website_images/_DSC0521.webp"],
        descAr: "بنطلون قماش بقَصّة مريحة وأنيقة تناسب العمل والمناسبات.",
        descEn: "Tailored trousers with a comfortable, elegant cut for work and occasions."
    },
    {
        id: 52,
        category: "jeans",
        nameAr: "جينز أسود فليير",
        nameEn: "Dark Flare Jeans",
        price: 18,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0075.webp",
        images: ["website_images/_DSC0075.webp", "website_images/_DSC0076.webp", "website_images/_DSC0074.webp"],
        descAr: "جينز عالي الجودة بقَصّة تبرز الأنوثة وتناسب كل الإطلالات.",
        descEn: "High-quality jeans with a flattering cut that suits any look."
    },
    {
        id: 53,
        category: "jeans",
        nameAr: "جينز رمادي فاتح",
        nameEn: "Light Grey Jeans",
        price: 18,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0099.webp",
        images: ["website_images/_DSC0099.webp", "website_images/_DSC0100.webp", "website_images/_DSC0098.webp"],
        descAr: "جينز عالي الجودة بقَصّة تبرز الأنوثة وتناسب كل الإطلالات.",
        descEn: "High-quality jeans with a flattering cut that suits any look."
    },
    {
        id: 54,
        category: "skirts",
        nameAr: "تنورة سوداء بسحاب",
        nameEn: "Black Plaid Pencil Skirt",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0297.webp",
        images: ["website_images/_DSC0297.webp", "website_images/_DSC0298.webp", "website_images/_DSC0296.webp"],
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 59,
        category: "skirts",
        nameAr: "تنورة سوداء بأزرار",
        nameEn: "Black Button-Front Skirt",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0353.webp",
        images: ["website_images/_DSC0353.webp", "website_images/_DSC0354.webp", "website_images/_DSC0352.webp"],
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 60,
        category: "skirts",
        nameAr: "تنورة سوداء واسعة بحزام",
        nameEn: "Black Flared Belted Skirt",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0365.webp",
        images: ["website_images/_DSC0371.webp", "website_images/_DSC0368.webp", "website_images/_DSC0370.webp"],
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 61,
        category: "skirts",
        nameAr: "تنورة كحلي واسعة",
        nameEn: "Navy Flared Skirt",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0379.webp",
        images: ["website_images/_DSC0380.webp", "website_images/_DSC0381.webp", "website_images/_DSC0383.webp"],
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 62,
        category: "skirts",
        nameAr: "تنورة كاروهات بسلسلة",
        nameEn: "Plaid Skirt with Chain",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0395.webp",
        images: ["website_images/_DSC0395.webp", "website_images/_DSC0401.webp", "website_images/_DSC0404.webp"],
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 63,
        category: "skirts",
        nameAr: "تنورة بني واسعة بسلسلة",
        nameEn: "Brown Skirt with Chain",
        price: 25,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0408.webp",
        images: ["website_images/_DSC0408.webp", "website_images/_DSC0417.webp", "website_images/_DSC0421.webp"],
        descAr: "تنورة بقَصّة أنثوية وخامة فاخرة لإطلالة راقية.",
        descEn: "A feminine-cut skirt in a luxurious fabric for a sophisticated look."
    },
    {
        id: 64,
        category: "sport-sets",
        nameAr: "بدلة رياضية بيج",
        nameEn: "Beige Lounge Set",
        price: 22,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0485.webp",
        images: ["website_images/_DSC0485.webp", "website_images/_DSC0494.webp", "website_images/_DSC0497.webp"],
        descAr: "بدلة رياضية مريحة بخامة ناعمة، مثالية للاسترخاء والخروج.",
        descEn: "A comfortable sport set in soft fabric, perfect for lounging or going out."
    },
    {
        id: 66,
        category: "sport-sets",
        nameAr: "بدلة رياضية خمري",
        nameEn: "Burgundy Lounge Set",
        price: 22,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0573.webp",
        images: ["website_images/_DSC0573.webp", "website_images/_DSC0574.webp", "website_images/_DSC0572.webp"],
        descAr: "بدلة رياضية مريحة بخامة ناعمة، مثالية للاسترخاء والخروج.",
        descEn: "A comfortable sport set in soft fabric, perfect for lounging or going out."
    },
    {
        id: 68,
        category: "sport-velvet",
        nameAr: "بدلة مخمل رمادي",
        nameEn: "Grey Velour Tracksuit",
        price: 29,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0500.webp",
        images: ["website_images/_DSC0500.webp", "website_images/_DSC0511.webp", "website_images/_DSC0508.webp"],
        descAr: "بدلة رياضية من المخمل الناعم، مناسبة للمحجبات.",
        descEn: "A soft velour sport set, suitable for hijabi styling."
    },
    {
        id: 69,
        category: "sport-velvet",
        nameAr: "بدلة مخمل زيتي",
        nameEn: "Olive Velour Tracksuit",
        price: 29,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0556.webp",
        images: ["website_images/_DSC0558.webp", "website_images/_DSC0559.webp", "website_images/_DSC0563.webp"],
        descAr: "بدلة رياضية من المخمل الناعم، مناسبة للمحجبات.",
        descEn: "A soft velour sport set, suitable for hijabi styling."
    },
    {
        id: 70,
        category: "sport-sets",
        nameAr: "طقم رياضي بني",
        nameEn: "Brown Sport Set",
        price: 22,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0527.webp",
        images: ["website_images/_DSC0529.webp", "website_images/_DSC0531.webp", "website_images/_DSC0538.webp"],
        descAr: "بدلة رياضية مريحة بخامة ناعمة، مثالية للاسترخاء والخروج.",
        descEn: "A comfortable sport set in soft fabric, perfect for lounging or going out."
    },
    {
        id: 71,
        category: "leggings",
        nameAr: "ليجنج رياضي",
        nameEn: "Sport Leggings",
        price: 10,
        sizes: ["S", "M", "L", "XL"],
        img: "website_images/_DSC0581.webp",
        images: ["website_images/_DSC0581.webp", "website_images/_DSC0582.webp", "website_images/_DSC0580.webp"],
        descAr: "ليجنج رياضي مريح بخامة مرنة يناسب التمرين واليومي.",
        descEn: "Comfortable sport leggings in a stretchy fabric for workouts and everyday."
    }
];

const categories = [
    { id: "all", nameAr: "الكل", nameEn: "All Items" },
    { id: "suits", nameAr: "أطقم رسمية", nameEn: "Formal Suits" },
    { id: "tricot-sets", nameAr: "أطقم تريكو تنورة", nameEn: "Knit Skirt Sets" },
    { id: "shirts", nameAr: "قمصان", nameEn: "Shirts" },
    { id: "blouses", nameAr: "بلايز", nameEn: "Blouses" },
    { id: "cut-body", nameAr: "كت / بودي", nameEn: "Crop & Bodysuits" },
    { id: "pants", nameAr: "بنطلون", nameEn: "Trousers" },
    { id: "jeans", nameAr: "جينز", nameEn: "Jeans" },
    { id: "skirts", nameAr: "تنانير", nameEn: "Skirts" },
    { id: "sport-jeans", nameAr: "بدلات رياضة بجينز", nameEn: "Sport Sets with Jeans" },
    { id: "sport-velvet", nameAr: "بدلات مخمل", nameEn: "Velvet Sets" },
    { id: "sport-sets", nameAr: "بدلات رياضية", nameEn: "Sport Sets" },
    { id: "leggings", nameAr: "ليجنج", nameEn: "Leggings" },
    { id: "jackets", nameAr: "جواكيت", nameEn: "Jackets" },
    { id: "tricot", nameAr: "تريكو", nameEn: "Knitwear" }
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
        storyText: "حيث تلتقي الأناقة التركية بالذوق الراقي. نقدم لكِ أحدث صيحات الموضة النسائية لتكوني دائماً في قمة التألق وثقة.",
        lookbookTitle: "التشكيلة المميزة",
        lbSuits: "أطقم رسمية", lbJackets: "جواكيت", lbTricot: "تريكو", lbSkirts: "تنانير", lbTops: "بلايز",
        lbShop: "اكتشفي التشكيلة",
        cartTitle: "حقيبة التسوق",
        cartEmpty: "حقيبة التسوق فارغة",
        labelSubtotal: "المجموع الفرعي:",
        labelDiscount: "خصم عرض 2 بـ 20:",
        promoApplied: "تم تطبيق عرض 2 بـ 20 ✅",
        promoOdd: "أضيفي قطعة ثانية من البلايز واحصلي عليها بـ 20 دينار",
        suitNote: "✓ التوصيل شامل مع الأطقم الرسمية",
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
        lbSuits: "Formal Suits", lbJackets: "Jackets", lbTricot: "Tricot & Knitwear", lbSkirts: "Skirts", lbTops: "Blouses",
        lbShop: "Discover Collection",
        cartTitle: "Shopping Bag",
        cartEmpty: "Your bag is empty",
        labelSubtotal: "Subtotal:",
        labelDiscount: "2-for-20 discount:",
        promoApplied: "2-for-20 offer applied ✅",
        promoOdd: "Add a second blouse to get it for 20 JOD",
        suitNote: "✓ Delivery included with formal suits",
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
    const visibleCategories = categories.filter(cat =>
        cat.id === "all" || products.some(p => p.category === cat.id)
    );
    visibleCategories.forEach(cat => {
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
                <div class="product-img-box" id="product-img-box-${p.id}" role="button" tabindex="0" aria-label="${escapeAttr(name)}" onclick="openQuickView(${p.id})">
                    <img id="main-img-${p.id}" src="${escapeAttr(p.img)}" alt="${escapeAttr(name)}" loading="lazy" decoding="async">
                    ${badge ? `<span class="badge-sale">${escapeHtml(badge)}</span>` : ""}
                    ${soldOut ? `<span class="badge-soldout">${t("soldOut")}</span>` : ""}
                    ${soldOut ? "" : `<button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">${t("addToBagShort")}</button>`}
                </div>
                ${p.images && p.images.length > 1 ? `
                <div class="product-thumbs">
                    ${p.images.map((src, i) => `<img src="${escapeAttr(src)}" class="${i === 0 ? 'active' : ''}" alt="thumb" onclick="changeProductImage(${p.id}, '${escapeAttr(src)}', this)">`).join("")}
                </div>` : ""}
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

function changeProductImage(productId, src, thumbEl) {
    const mainImg = document.getElementById(`main-img-${productId}`);
    if (mainImg) {
        mainImg.src = src;
    }
    const thumbs = thumbEl.parentElement.querySelectorAll("img");
    thumbs.forEach(t => t.classList.remove("active"));
    thumbEl.classList.add("active");
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
            <img id="modal-main-img" src="${escapeAttr(p.img)}" alt="${escapeAttr(name)}" decoding="async">
            ${p.images && p.images.length > 1 ? `
            <div class="modal-thumbs">
                ${p.images.map((src, i) => `<img src="${escapeAttr(src)}" class="${i === 0 ? 'active' : ''}" alt="thumb" onclick="changeModalImage('${escapeAttr(src)}', this)">`).join("")}
            </div>` : ""}
        </div>
        <div class="modal-details">
            <h2 class="modal-title">${escapeHtml(name)}</h2>
            <p class="modal-price">${formatPrice(p.price)}${p.oldPrice ? ` <span class="old-price">${formatPrice(p.oldPrice)}</span>` : ""}</p>
            ${p.promo2for20 ? `<p class="modal-promo">🎁 ${currentLang === "ar" ? "عرض 2 بـ 20 دينار — وفّري 4 دنانير" : "2 for 20 JOD — save 4 JOD"}</p>` : ""}
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

function changeModalImage(src, thumbEl) {
    const mainImg = document.getElementById("modal-main-img");
    if (mainImg) mainImg.src = src;
    const thumbs = thumbEl.parentElement.querySelectorAll("img");
    thumbs.forEach(t => t.classList.remove("active"));
    thumbEl.classList.add("active");
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

/* 2-for-20 promo: every pair of blouses costs 20 JOD instead of 24. */
const PROMO_2FOR20 = { unitPrice: 12, pairPrice: 20 };

function getPromoState() {
    let qty = 0;
    let subtotal = 0;
    cart.forEach(i => {
        const p = products.find(x => x.id === i.id);
        if (!p) return;
        subtotal += p.price * i.qty;
        if (p.promo2for20) qty += i.qty;
    });
    const pairs = Math.floor(qty / 2);
    const discount = pairs * Math.max(0, PROMO_2FOR20.unitPrice * 2 - PROMO_2FOR20.pairPrice);
    return { qty, pairs, discount, subtotal };
}

function renderTotals() {
    const govSelect = document.getElementById("gov-select");
    const selectedGov = govSelect ? governorates.find(g => g.id === govSelect.value) : null;
    const baseFee = selectedGov ? selectedGov.fee : 0;
    const freeDelivery = cart.length > 0 && cart.every(i => {
        const p = products.find(x => x.id === i.id);
        return p && p.freeDelivery;
    });
    const fee = freeDelivery ? 0 : baseFee;

    const { qty: promoQty, pairs, discount, subtotal } = getPromoState();
    const total = Math.max(0, subtotal - discount) + fee;

    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");
    const deliverEl = document.getElementById("val-delivery");

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(total);

    const promoRow = document.getElementById("promo-row");
    const discountEl = document.getElementById("cart-discount");
    if (promoRow && discountEl) {
        if (discount > 0) {
            promoRow.hidden = false;
            discountEl.textContent = "-" + formatPrice(discount);
        } else {
            promoRow.hidden = true;
        }
    }

    const promoNote = document.getElementById("promo-note");
    if (promoNote) {
        if (promoQty >= 2 && pairs > 0) {
            promoNote.hidden = false;
            promoNote.className = "cart-promo-note applied";
            promoNote.textContent = `${t("promoApplied")} — ${currentLang === "ar" ? "وفّرتِ" : "You saved"} ${formatPrice(discount)}`;
        } else if (promoQty === 1) {
            promoNote.hidden = false;
            promoNote.className = "cart-promo-note hint";
            promoNote.textContent = t("promoOdd");
        } else {
            promoNote.hidden = true;
        }
    }

    const suitNote = document.getElementById("suit-note");
    if (suitNote) {
        suitNote.hidden = !freeDelivery;
        if (freeDelivery) suitNote.textContent = t("suitNote");
    }

    if (deliverEl) {
        if (freeDelivery) {
            deliverEl.textContent = currentLang === "ar" ? "شامل التوصيل" : "Included";
        } else if (selectedGov) {
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

    const freeDelivery = cart.every(i => {
        const p = products.find(x => x.id === i.id);
        return p && p.freeDelivery;
    });
    const deliveryFee = freeDelivery ? 0 : gov.fee;
    const promo = getPromoState();
    const discount = promo.discount;
    const total = Math.max(0, subtotal - discount) + deliveryFee;
    const deliveryLabel = freeDelivery
        ? (currentLang === "ar" ? "شامل التوصيل" : "Included")
        : formatPrice(deliveryFee);
    const discountTxt = discount > 0
        ? (currentLang === "ar"
            ? `\nخصم عرض 2 بـ 20: -${formatPrice(discount)}`
            : `\n2-for-20 discount: -${formatPrice(discount)}`)
        : "";
    const header = currentLang === "ar"
        ? "مرحباً، أود إتمام طلبي من The I Boutique:\n\n"
        : "Hello, I would like to place an order from The I Boutique:\n\n";

    const footerTxt = currentLang === "ar"
        ? `\nالمجموع الفرعي: ${formatPrice(subtotal)}${discountTxt}\nرسوم التوصيل (${govName}): ${deliveryLabel}\nالمجموع الكلي: ${formatPrice(total)}\n\n` +
          `الاسم: ${name}\nالهاتف: ${phone}\nالمحافظة: ${govName}\nالعنوان: ${address}` + (note ? `\nملاحظات: ${note}` : "")
        : `\nSubtotal: ${formatPrice(subtotal)}${discountTxt}\nDelivery (${govName}): ${deliveryLabel}\nTotal: ${formatPrice(total)}\n\n` +
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