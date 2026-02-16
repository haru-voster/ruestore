
const categories = {
  1:"Laptops",
  2:"Desktops",
  3: "Smartphones",
  4:"Accessories",
  5:"Cameras"
};

const products = [
{id:101,name:"HP EliteBook 840",price:98000,oldPrice:105000,categoryId:1,image:"./img/product01.png",description:"Core i7,16GB RAM,512 SSD"},
{id:102,name:"Dell Optiplex",price:72000,oldPrice:80000,categoryId:2,image:"./img/product02.png",description:"Core i5 Desktop Set"},
{id:103,name:"Gaming Headset",price:4500,oldPrice:6000,categoryId:4,image:"./img/product03.png",description:"RGB Noise Canceling"},
{id:104,name:"Canon Camera",price:55000,oldPrice:65000,categoryId:5,image:"./img/product04.png",description:"24MP HD Camera"},
{id:105,name:"Samsung Galaxy S22",price:85000,oldPrice:95000,categoryId:3,image:"./img/product05.png",description:"128GB Storage"},
{id:101,name:"HP EliteBook 840",price:98000,oldPrice:105000,categoryId:1,image:"./img/product01.png",description:"Core i7,16GB RAM,512 SSD"},
{id:102,name:"Dell Optiplex",price:72000,oldPrice:80000,categoryId:2,image:"./img/product02.png",description:"Core i5 Desktop Set"},
{id:103,name:"Gaming Headset",price:4500,oldPrice:6000,categoryId:4,image:"./img/product03.png",description:"RGB Noise Canceling"},
{id:104,name:"Canon Camera",price:55000,oldPrice:65000,categoryId:5,image:"./img/product04.png",description:"24MP HD Camera"},
{id:105,name:"Samsung Galaxy S22",price:85000,oldPrice:95000,categoryId:3,image:"./img/product05.png",description:"128GB Storage"}
];

function loadProducts(category="all"){
const container=document.getElementById("productContainer");
container.innerHTML="";

const filtered = category==="all"
? products
: products.filter(p=>categories[p.categoryId].toLowerCase().includes(category));

let html="";

filtered.forEach(p=>{
html+=`
<div class="col-md-3 col-xs-6">
<div class="product">
<div class="product-img">
<img src="${p.image}">
</div>
<div class="product-body">
<p class="product-category">${categories[p.categoryId]}</p>
<h3 class="product-name">${p.name}</h3>
<h4 class="product-price">Ksh ${p.price.toLocaleString()}
<del class="product-old-price">Ksh ${p.oldPrice.toLocaleString()}</del>
</h4>
<p>${p.description}</p>
</div>
</div>
</div>
`;
});

container.innerHTML=html;
}

window.onload=()=>loadProducts();
