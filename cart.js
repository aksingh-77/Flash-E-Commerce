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
    location.reload();
});
//createProductCard(cart, cardContainer, findProductInCart, "cart");
createHorizontalProductCard(cart, cardContainer);


/**------------------Cart Total Section-------------------------- */
const cartLength = document.querySelector(".item-count");

//We are getting the value of cart from localstorage so that
//if the cart is updated it would be updated in localstorage also
//and the Price details also will be updated
cartLength.innerText= JSON.parse(localStorage.getItem("cart")).length;
//--------------------------------------------------------------------//


//Price of Products---------------------------------------------//
const productPrice = document.querySelector(".product-price");
//console.log(productPrice);
const priceAfterDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc, cur) => acc+cur.newPrice, 0);
console.log(priceAfterDiscount);
productPrice.innerText = priceAfterDiscount;

const discount = document.querySelectorAll(".discount-amount");
//console.log(discount);
const priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc, cur) => acc+cur.oldPrice, 0);
for (let element of discount){
    element.innerText = priceBeforeDiscount - priceAfterDiscount;
}

const totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount + 100;


