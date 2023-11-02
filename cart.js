import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const cardContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);


cardContainer.addEventListener("click", (event)=>{
    cart = cart.filter(({_id}) => _id !== event.target.dataset.id);
   cardContainer.innerHTML = "";
   createProductCard(cart, cardContainer, findProductInCart, "cart");
    localStorage.setItem("cart", JSON.stringify(cart));
});
createProductCard(cart, cardContainer, findProductInCart, "cart");

