
const categories = {
  1:"Laptops",
  2:"Desktops",
  3: "Smartphones",
  4:"Accessories",
  5:"Cameras"
};



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
