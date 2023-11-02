import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";
import { createHorizontalProductCard } from "./createHorizontalProductCard.js";

const cardContainer = document.getElementById("cart");


let cart = JSON.parse(localStorage.getItem("cart")) || [];
//console.log(cart);


cardContainer.addEventListener("click", (event)=>{
    console.log("heloo")
    cart = cart.filter(({_id}) => _id !== event.target.dataset.id);
   cardContainer.innerHTML = "";
   createHorizontalProductCard(cart, cardContainer);
    localStorage.setItem("cart", JSON.stringify(cart));
});
//createProductCard(cart, cardContainer, findProductInCart, "cart");
createHorizontalProductCard(cart, cardContainer);

