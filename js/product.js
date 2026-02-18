const categories = {
  1: "Laptop",
  2: "Desktop",
  3: "Accessory",
  4: "Printer",
  5: "Projector",
  6: "Network",
  7: "Toners",
  8: "Smartphone",
  9: "Cameras",
  10: "Laptop Bag",
  11: "Crossbody Bag",
  12: "Backpack",
  13: "Chest Bag"
};

const products = [
  // ==================== LAPTOPS ====================
  {id:101,name:"HP Envy X360 Brand",price:170000,oldPrice:180000,categoryId:1,image:"img/hp envy.jpg",description:"Intel Iris Xe Graphics, Backlight Keyboard, 14 inch FHD, 13th Gen Core i7, 16GB, 1TB SSD", specs:{Processor:"Intel Core i7 13th Gen", RAM:"16GB", Storage:"1TB SSD", Display:"14-inch FHD", Graphics:"Intel Iris Xe"}},
  {id:102,name:"HP EliteBook 840 G5",price:30000,oldPrice:35000,categoryId:1,image:"img/new2.jpg",description:"Intel Core i7 10th Gen, 14 FHD 840 G5 - 8GB / 256GB", specs:{Processor:"Intel Core i7 10th Gen", RAM:"8GB", Storage:"256GB SSD", Display:"14-inch FHD", Graphics:"Intel HD"}},
  {id:103,name:"HP EliteBook 840 G7",price:45000,oldPrice:50000,categoryId:1,image:"img/new.webp",description:"Intel Core i7 10th Gen, 14 FHD 840 G7 - 16GB / 512GB", specs:{Processor:"Intel Core i7 10th Gen", RAM:"16GB", Storage:"512GB SSD", Display:"14-inch FHD", Graphics:"Intel HD"}},
  {id:104,name:"Lenovo IdeaPad Flex 5",price:39000,oldPrice:45000,categoryId:1,image:"img/lenovo2.webp",description:"Integrated Intel Iris Xe graphics 512SSD / 16GB", specs:{Processor:"Intel Core i5 11th Gen", RAM:"16GB", Storage:"512GB SSD", Display:"14-inch FHD", Graphics:"Intel Iris Xe"}},
  {id:105,name:"Lenovo Yoga X1",price:22999,oldPrice:25000,categoryId:1,image:"img/lenovo.webp",description:"Thinkpad X1 Yoga 256/8GB RAM Gen5 14 inch FHD, Touchscreen Laptop", specs:{Processor:"Intel Core i5 Gen5", RAM:"8GB", Storage:"256GB SSD", Display:"14-inch FHD Touch", Graphics:"Intel HD"}},
  {id:106,name:"Dell Latitude 7490",price:20999,oldPrice:25000,categoryId:1,image:"img/dell.jpg",description:"Intel Core i5, 8GB RAM, 256GB SSD, 8th Gen, 14 inch Display", specs:{Processor:"Intel Core i5 8th Gen", RAM:"8GB", Storage:"256GB SSD", Display:"14-inch FHD", Graphics:"Intel HD"}},
  {id:107,name:"Dell Precision 5570",price:34999,oldPrice:40000,categoryId:1,image:"img/dell.jpeg",description:"16GB/512GB, Core i7 8th Gen, Intel Processor 1.6-1.8GHz", specs:{Processor:"Intel Core i7 8th Gen", RAM:"16GB", Storage:"512GB SSD", Display:"15.6-inch FHD", Graphics:"Intel UHD"}},
  {id:108,name:"Macbook Pro A1708",price:29000,oldPrice:35000,categoryId:1,image:"img/Macbook2017.webp",description:"Intel Core i5-6360U, 8GB RAM, 256GB SSD, 13.3 LED IPS, Intel Iris Graphics", specs:{Processor:"Intel Core i5-6360U", RAM:"8GB", Storage:"256GB SSD", Display:"13.3-inch LED IPS", Graphics:"Intel Iris"}},
  {id:109,name:"Macbook Pro 13 Retina",price:88000,oldPrice:95000,categoryId:1,image:"img/mac1.jpg",description:"Intel Core I7 13th gen, 32GB RAM, 512GB SSD, Retina Display", specs:{Processor:"Intel Core i7 13th Gen", RAM:"32GB", Storage:"512GB SSD", Display:"13-inch Retina", Graphics:"Intel Iris"}},

  // ==================== DESKTOPS ====================
  {id:110,name:"Dell Optiplex 7040 19inch",price:24999,oldPrice:28000,categoryId:2,image:"img/dellopti.webp",description:"Intel i5-6500, 8GB RAM, 500GB HDD", specs:{Processor:"Intel Core i5-6500", RAM:"8GB", Storage:"500GB HDD", Graphics:"Intel HD", Display:"19-inch"}},
  {id:111,name:"HP Desktop 19inch",price:14500,oldPrice:18000,categoryId:2,image:"img/hp-desk.webp",description:"Intel Core i5 3.40GHz, 4GB RAM, 500GB HDD, 19\" Monitor, Keyboard & Mouse", specs:{Processor:"Intel Core i5 3.4GHz", RAM:"4GB", Storage:"500GB HDD", Graphics:"Intel HD", Display:"19-inch"}},
  {id:112,name:"All-in-One HP 205",price:50000,oldPrice:55000,categoryId:2,image:"img/hp-all.webp",description:"22\" FHD, AMD Ryzen 3050U, 4GB RAM, 1TB HDD, Windows 10 Pro", specs:{Processor:"AMD Ryzen 3050U", RAM:"4GB", Storage:"1TB HDD", Graphics:"AMD Radeon Vega 8", Display:"22-inch FHD"}},
  {id:113,name:"Lenovo Mini-PC M710q",price:18500,oldPrice:20000,categoryId:2,image:"img/lenovo-mini.jpg",description:"8GB RAM, 128GB SSD, Intel i5", specs:{Processor:"Intel Core i5", RAM:"8GB", Storage:"128GB SSD", Graphics:"Intel HD", Display:"None"}},
  {id:114,name:"HP Mini-PC EliteDesk 705 G4",price:18000,oldPrice:20000,categoryId:2,image:"img/hpdsk.webp",description:"Ryzen 5 2400G, 16GB RAM, 256GB SSD", specs:{Processor:"AMD Ryzen 5 2400G", RAM:"16GB", Storage:"256GB SSD", Graphics:"AMD Radeon Vega 11", Display:"None"}},
  {id:115,name:"Lenovo Desktop ThinkCentre",price:15000,oldPrice:18000,categoryId:2,image:"img/lenovodsk.webp",description:"Core i5 8th Gen, 8GB RAM, 500GB HDD", specs:{Processor:"Intel Core i5 8th Gen", RAM:"8GB", Storage:"500GB HDD", Graphics:"Intel HD", Display:"None"}},
  {id:116,name:"HP Gaming PC Pavilion",price:60000,oldPrice:65000,categoryId:2,image:"img/gaming1.webp",description:"Core i5 10400f, 16GB/512GB, 3.0GHz, 10th Gen", specs:{Processor:"Intel Core i5 10400F", RAM:"16GB", Storage:"512GB SSD", Graphics:"Intel UHD", Display:"None"}},
  {id:117,name:"Lenovo Gaming PC ThinkStation",price:46000,oldPrice:50000,categoryId:2,image:"img/gaming2.webp",description:"Intel Xeon W-2123, 16GB RAM, 256GB SSD, Nvidia Quadro P2000", specs:{Processor:"Intel Xeon W-2123", RAM:"16GB", Storage:"256GB SSD", Graphics:"Nvidia Quadro P2000", Display:"None"}},

  // ==================== ACCESSORIES ====================
  {id:118,name:"Gaming Headset",price:4500,oldPrice:6000,categoryId:3,image:"img/product03.png",description:"RGB Noise Canceling", specs:{}},
  {id:121,name:"External SSD 2TB",price:23000,oldPrice:25000,categoryId:3,image:"img/external.jpeg",description:"Dahua T7 Portable SSD 2TB USB 3.2 Gen2", specs:{}},
  {id:122,name:"VGA Display Cable",price:500,oldPrice:700,categoryId:3,image:"img/vga.jpg",description:"Computer-monitor VGA display 1M", specs:{}},
  {id:123,name:"HDMI to VGA Adapter",price:1500,oldPrice:2000,categoryId:3,image:"img/HDMI-VGA.jpg",description:"1080px for PC/laptop/Desktops", specs:{}},
  {id:124,name:"USB Keyboard Wired",price:1500,oldPrice:1800,categoryId:3,image:"img/wired.jpg",description:"Logitech K120 Wired Keyboard for Windows, Plug and Play", specs:{}},
  {id:125,name:"Wireless Keyboard & Mouse Combo",price:4000,oldPrice:4500,categoryId:3,image:"img/keymouse.png",description:"Hp-655-wireless-keyboard-and-mouse-combo", specs:{}},
  {id:126,name:"Wireless Mouse",price:600,oldPrice:800,categoryId:3,image:"img/mouse.webp",description:"Wireless + Bluetooth mouse", specs:{}},
  {id:127,name:"Laptop Charger HP",price:1500,oldPrice:1800,categoryId:3,image:"img/hpcharger.webp",description:"HP 19.5V-2.31A 45W Blue Pin Adapter Original", specs:{}},
  {id:128,name:"Hard Disk Drive SATA 500GB",price:2000,oldPrice:2500,categoryId:3,image:"img/storage1.jpeg",description:"500GB SATA Drive", specs:{}},
  {id:129,name:"ASUS Motherboard B760M-A",price:2000,oldPrice:2500,categoryId:3,image:"img/asusboard.jpg",description:"DDR5 Micro-ATX Gaming Motherboard", specs:{}},

  // ==================== PRINTERS ====================
  {id:130,name:"HP Inkjet All-in-One",price:24500,oldPrice:28000,categoryId:4,image:"img/hp printer.webp",description:"Inkjet, Ethernet WIFI support", specs:{}},
  {id:131,name:"Canon All-in-One Pro",price:23999,oldPrice:27000,categoryId:4,image:"img/canone2.webp",description:"Printing, photocopying/scanning", specs:{}},
  {id:132,name:"Canon All-in-One",price:10999,oldPrice:13000,categoryId:4,image:"img/canon.png",description:"Canon printer, WIFI support", specs:{}},
  {id:133,name:"Epison Printer L3250",price:20999,oldPrice:23000,categoryId:4,image:"img/epson-l3250.jpg",description:"WIFI/Bluetooth/USB enabled", specs:{}},

  // ==================== PROJECTORS ====================
  {id:134,name:"T5 Wifi Projector",price:25999,oldPrice:28000,categoryId:5,image:"img/t5.webp",description:"T5 wifi projector with HD camera", specs:{}},
  {id:135,name:"Epson EB-E01 Projector",price:45000,oldPrice:48000,categoryId:5,image:"img/espon.webp",description:"XGA 3300 Lumens Projector, Portable and quick to set up", specs:{}},

  // ==================== NETWORK ====================
  {id:136,name:"DP-LINK POE Switch",price:48500,oldPrice:52000,categoryId:6,image:"img/dlink.png",description:"D-Link DGS-1210-28P 28-Port Gigabit PoE Switch", specs:{}},
  {id:137,name:"Starlink Full Kit Gen4",price:48000,oldPrice:50000,categoryId:6,image:"img/starlink.jpg",description:"Standard Starlink kit version 4 gen3", specs:{}},
  {id:138,name:"4G M-Wifi Modem",price:2500,oldPrice:3000,categoryId:6,image:"img/modem.webp",description:"Portable SIM card 4G WiFi", specs:{}},
  {id:139,name:"Mikrotik Router RB750GR3",price:7000,oldPrice:9000,categoryId:6,image:"img/mikrouter.webp",description:"Mikrotik hEX Router", specs:{}},
  {id:140,name:"Hikvision Cat6 Cable 305M",price:17500,oldPrice:20000,categoryId:6,image:"img/cat6.webp",description:"Orange 305m CAT6 U/UTP Network Cable", specs:{}},

  // ==================== TONERS ====================
  {id:141,name:"Epson ECOTANK",price:1500,oldPrice:1800,categoryId:7,image:"img/epsonink.webp",description:"Epson pure Cyan, Yellow, Majenta, Blue, Black econtank bottles", specs:{}},
  {id:142,name:"Kyocera Minolta Toner",price:4000,oldPrice:4500,categoryId:7,image:"img/ky2.jpg",description:"Konica Minolta Bizhub C220 /C280 /C360 Toner TN-216/319", specs:{}},
  {id:143,name:"HP LaserJet Toner 59A",price:12000,oldPrice:14000,categoryId:7,image:"img/lasertoner.webp",description:"Original LaserJet Toner Cartridge", specs:{}},

  // ==================== SMARTPHONES ====================
  {id:120,name:"Samsung Galaxy S22",price:85000,oldPrice:95000,categoryId:8,image:"img/product05.png",description:"128GB Storage", specs:{}},

  // ==================== CAMERAS ====================
  {id:119,name:"Canon Camera",price:55000,oldPrice:65000,categoryId:9,image:"img/product04.png",description:"24MP HD Camera", specs:{}},

    // ==================== BAGS ====================
  {id:144,name:"Men's Chest Bag",price:1000,oldPrice:1400,categoryId:13,image:"img/chestbag.webp",description:"Charging port PU leather chest bag, stylish and compact for daily travel", specs:{}},
  {id:145,name:"Laptop Backpack",price:1850,oldPrice:2500,categoryId:10,image:"img/laptopbag.png",description:"Durable laptop backpack with padded compartments for device protection", specs:{}},
  {id:146,name:"Crossbody Bag",price:650,oldPrice:1200,categoryId:11,image:"img/crossbag.png",description:"Lightweight crossbody bag with secure zipper pockets for essentials", specs:{}},
  {id:147,name:"Messenger Shoulder Bag",price:980,oldPrice:1500,categoryId:12,image:"img/messengerbag.png",description:"Stylish messenger bag ideal for work, school, and travel use", specs:{}},
  {id:148,name:"Casual Backpack",price:1200,oldPrice:1800,categoryId:12,image:"img/backpack.png",description:"Spacious leisure backpack with multiple compartments and water-resistant fabric", specs:{}}
];


// ==================== CART ====================
let cart = [];

const categoryMap = {
  "all": [1,2,3,4,5,6,7,8,9],
  "desktop": [2],
  "laptop": [1],
  "printer": [4],
  "phone": [8],
  "camera": [9],
  "accessory": [3],
  "bags": [10,11,12,13],
  "laptopbag": [10],
  "crossbody": [11],
  "backpacks": [12],
  "chestbag": [13]
};
// ==================== LOAD PRODUCTS ====================
function loadProducts(category = "all") {
    const container = document.getElementById("productContainer");
    if (!container) return;
    container.innerHTML = "";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "10px";

    const categoryIds = categoryMap[category.toLowerCase()] || [];
    const filtered = products.filter(p => categoryIds.includes(p.categoryId));

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.style.flex = "0 0 19%";
        card.style.padding = "10px";
        card.style.boxSizing = "border-box";

        card.innerHTML = `
        <div class="product border p-2 h-100 product-card">
            <div class="product-img" onclick="showProductModal(${p.id})" style="position:relative; cursor:pointer;">
                <img src="${p.image}" class="img-fluid" style="max-height:150px; object-fit:contain;">
                <div class="floating-buttons" style="position:absolute; bottom:5px; right:5px; display:flex; gap:5px;">
                    <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">🛒</button>
                    <button class="buy-btn" onclick="event.stopPropagation(); sendToWhatsApp(${p.id})">Buy</button>
                </div>
            </div>
            <div class="product-body mt-2">
                <p>${categories[p.categoryId]}</p>
                <h3>${p.name}</h3>
                <h4 style="color: #ff9800;">
                    Ksh ${p.price.toLocaleString()} 
                    <del style="color: #ff9800;">Ksh ${p.oldPrice.toLocaleString()}</del>
                </h4>
            </div>
        </div>`;
        container.appendChild(card);
    });

    updateCartUI();
}

// ==================== CART FUNCTIONS ====================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });

    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartContainer = document.getElementById("cartContainer");
    if (!cartCount || !cartContainer) return;

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.innerText = totalQty;

    cartContainer.innerHTML = "";
    if (cart.length === 0) {
        cartContainer.style.display = "none";
        return;
    }

    cartContainer.style.display = "block";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.marginBottom = "5px";
        div.innerHTML = `
            <span>${item.name} x ${item.qty}</span>
            <span>Ksh ${(item.price * item.qty).toLocaleString()}</span>
            <button onclick="removeFromCart(${item.id})" style="padding:0 5px; cursor:pointer;">❌</button>`;
        cartContainer.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.style.fontWeight = "bold";
    totalDiv.style.marginTop = "10px";
    totalDiv.innerText = `Total: Ksh ${total.toLocaleString()}`;
    cartContainer.appendChild(totalDiv);
}

// ==================== WHATSAPP ====================
function sendToWhatsApp(productId = null) {
    let message = "Hello, I want to order the following items:\n\n";

    if (productId) {
        const p = products.find(x => x.id === productId);
        if (!p) return;
        message += `Name: ${p.name}\nPrice: Ksh ${p.price.toLocaleString()}\nDescription: ${p.description}\nImage: ${window.location.origin}/${p.image}`;
    } else {
        if (cart.length === 0) return alert("Your cart is empty!");
        cart.forEach(item => message += `${item.name} x ${item.qty} - Ksh ${(item.price * item.qty).toLocaleString()}\n`);
        const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        message += `\nTotal: Ksh ${total.toLocaleString()}`;
    }

    const phoneNumber = "254708466793";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// ==================== PRODUCT MODAL ====================
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("productModal");
    const content = document.getElementById("modalContent");

    let specsHtml = "<ul>";
    for (const key in product.specs) specsHtml += `<li><strong>${key}:</strong> ${product.specs[key]}</li>`;
    if (Object.keys(product.specs).length === 0) specsHtml += "<li>No specs available</li>";
    specsHtml += "</ul>";

    content.innerHTML = `
    <div style="display:flex; gap:15px; flex-wrap:wrap;">
        <div style="flex:1 1 40%; text-align:center;">
            <img src="${product.image}" style="width:100%; max-height:300px; object-fit:contain;">
        </div>
        <div style="flex:1 1 55%;">
            <h2>${product.name}</h2>
            <p style="font-size:14px; color:#666;">Category: ${categories[product.categoryId]}</p>
            <h3 style="color: #ff9800;">Ksh ${product.price.toLocaleString()}</h3>
            <del style="color: #ff9800;">Ksh ${product.oldPrice.toLocaleString()}</del>
            <p style="margin-top:10px;">${product.description}</p>
            <h4>Features & Specs</h4>
            ${specsHtml}
            <div style="margin-top:20px; display:flex; gap:10px;">
                <button class="modal-cart-btn" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
                <button class="modal-buy-btn" onclick="sendToWhatsApp(${product.id})">Buy Now</button>
            </div>
        </div>
    </div>`;

    modal.style.display = "flex";
    document.getElementById("closeModal").onclick = () => modal.style.display = "none";
}

// ==================== SEARCH SYSTEM ====================
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    const suggestionBox = document.createElement("div");
    suggestionBox.style.position = "absolute";
    suggestionBox.style.background = "#fff";
    suggestionBox.style.border = "1px solid #ddd";
    suggestionBox.style.width = searchInput.offsetWidth + "px";
    suggestionBox.style.zIndex = "999";
    suggestionBox.style.maxHeight = "200px";
    suggestionBox.style.overflowY = "auto";
    suggestionBox.style.display = "none";
    searchInput.parentNode.appendChild(suggestionBox);

    searchInput.addEventListener("keyup", function () {
        const text = this.value.toLowerCase().trim();
        suggestionBox.innerHTML = "";
        if (!text) { suggestionBox.style.display = "none"; loadProducts("all"); return; }

        const matches = products.filter(p =>
            p.name.toLowerCase().includes(text) ||
            (p.description && p.description.toLowerCase().includes(text)) ||
            categories[p.categoryId].toLowerCase().includes(text)
        );

        renderSearchResults(matches);

        matches.slice(0,5).forEach(p => {
            const item = document.createElement("div");
            item.innerText = p.name;
            item.style.padding = "6px";
            item.style.cursor = "pointer";
            item.onmouseenter = () => item.style.background="#f1f1f1";
            item.onmouseleave = () => item.style.background="#fff";
            item.onclick = () => { searchInput.value = p.name; suggestionBox.style.display="none"; renderSearchResults([p]); };
            suggestionBox.appendChild(item);
        });

        suggestionBox.style.display = matches.length ? "block" : "none";
    });

    document.addEventListener("click", e => {
        if (!searchInput.contains(e.target)) suggestionBox.style.display = "none";
    });
}

// ==================== RENDER SEARCH RESULTS ====================
function renderSearchResults(list){
    const container = document.getElementById("productContainer");
    container.innerHTML = "";
    container.style.display="flex";
    container.style.flexWrap="wrap";
    container.style.gap="10px";

    if(list.length===0){ container.innerHTML="<h3>No products found</h3>"; return; }

    list.forEach(p=>{
        const card = document.createElement("div");
        card.style.flex="0 0 19%";
        card.style.padding="10px";

        card.innerHTML = `
        <div class="product border p-2 h-100 product-card">
            <div class="product-img" onclick="showProductModal(${p.id})" style="position:relative; cursor:pointer;">
                <img src="${p.image}" class="img-fluid" style="max-height:120px; object-fit:contain;">
                <div class="floating-buttons" style="position:absolute; bottom:5px; right:5px; display:flex; gap:5px;">
                    <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">🛒</button>
                    <button class="buy-btn" onclick="event.stopPropagation(); sendToWhatsApp(${p.id})">Buy</button>
                </div>
            </div>
            <div class="product-body mt-2">
                <p>${categories[p.categoryId]}</p>
                <h3>${p.name}</h3>
                <h4 style="color: #ff9800;">
                    Ksh ${p.price.toLocaleString()} 
                    <del style="color: #ff9800;">Ksh ${p.oldPrice.toLocaleString()}</del>
                </h4>
            </div>
        </div>`;
        container.appendChild(card);
    });
}

// ==================== INITIAL LOAD ====================
window.onload = () => loadProducts("all");

// added json
