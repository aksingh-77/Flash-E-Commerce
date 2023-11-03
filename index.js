import { products } from "./db/products.js";
import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const productContainer = document.getElementById("products");
const filterContainer = document.querySelector(".side-bar");

let cart = JSON.parse(localStorage.getItem("cart")) || [];



/** Add to Cart Button Logic */
productContainer.addEventListener("click", (event)=>{
   const isProductInCart = findProductInCart(cart, event.target.dataset.id); 
   if(!isProductInCart){
        const productToAddCart = products.filter(({_id})=>_id === event.target.dataset.id);
        cart = [...cart, ...productToAddCart];
        localStorage.setItem("cart", JSON.stringify(cart));
        const cartButton = event.target;
        cartButton.innerHTML = "Go To Cart <span class='material-icons-outlined'>shopping_cart</span>"
        console.log(cart);
   }else{
    location.href="cart.html";
   }
})

// -------------Filter Container Login----------------------
filterContainer.addEventListener("click", (event) => {
    const updatedProducts = products.filter(({rating}) =>rating>=Number(event.target.dataset.rating));
    productContainer.innerHTML = "";
    createProductCard(updatedProducts, productContainer, findProductInCart, "products");
});

createProductCard(products, productContainer, findProductInCart, "products");

