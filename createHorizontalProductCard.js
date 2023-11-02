export const createHorizontalProductCard = (products, parentElement) => {
    
    for (let product of products){

        /**------------Initialation of Card Container---------------- */
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-horizontal","d-flex","shadow");
        /**-------------------------------------------------------------- */



        /**----------------Creation of Image Container------------------- */
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-hori-image-container","relative");

        const image = document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src", product.img);
        image.setAttribute("alt", product.name);

        imageContainer.appendChild(image);
        cardContainer.appendChild(imageContainer);
        /**------------------------------------------------------------- */



        /**--------------Initialization of Card Deatils Container--------------- */
        const cardDetailsContainer = document.createElement("div");
        cardDetailsContainer.classList.add("card-details", "d-flex", "direction-column");
        /**---------------------------------------------------------------------- */

        /**----------------Creation Brand Name Container----------------------------- */
        const brandContainer = document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText = product.brand;
    
        cardDetailsContainer.appendChild(brandContainer);
        /**------------------------------------------------------------------------ */
    
    
        /**-----------Creation of Card Dstails Container-------------------*/
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");
        /**--------------------------------------------------------------- */

        /**----------------Creation of Product Name Container-------------------- */
        //Product Name
        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        descriptionContainer.appendChild(name);
    
        //Product Price
        const price = document.createElement("p");
        price.classList.add("card-price", "gap");
        price.innerText = `Rs. ${product.newPrice}`;
    
        //Old Price
        const oldPrice = document.createElement("span");
        oldPrice.classList.add("price-strike-through", "gap");
        oldPrice.innerText = `Rs. ${product.oldPrice}`;
        price.appendChild(oldPrice);
        
        //Discount Value
        const discount = document.createElement("span");
        discount.classList.add("discount", "padding-all-8", "gap");
        discount.innerText = `(${product.discount}% OFF)`;
        price.appendChild(discount);
    
        descriptionContainer.appendChild(price);
        cardDetailsContainer.appendChild(descriptionContainer);

        /**----------Quantity Container---------- */
        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container", "d-flex", "gap");

        const quantityContainertitle = document.createElement("p");
        quantityContainertitle.classList.add("q-title");
        quantityContainertitle.innerText = "Quantity";

        quantityContainer.appendChild(quantityContainertitle);

        /**-----Quantity---- */
        const quantity = document.createElement("div");
        quantity.classList.add("count-container", "d-flex", "align-center", "gap");

        const incBtn = document.createElement("button");
        incBtn.classList.add("count");
        incBtn.innerText = "+";
        const value = document.createElement("span");
        value.classList.add("count-value");
        value.innerText = "1";

        const decBtn = document.createElement("button");
        decBtn.classList.add("count");
        decBtn.innerText = "-";

        quantity.appendChild(incBtn);
        quantity.appendChild(value);
        quantity.appendChild(decBtn);

        quantityContainer.appendChild(quantity);
        cardDetailsContainer.appendChild(quantityContainer);

        /**-------------------CTA Button-------------------------------- */
        const ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn", "d-flex", "gap");
        const removeBtn = document.createElement("button");
        removeBtn.classList.add(
            "button",
            "hori-btn",
            "btn-primary",
            "btn-icon",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin"
            )
        

        removeBtn.setAttribute("data-id", product._id);
        removeBtn.innerText = "Remove";
        ctaButton.appendChild(removeBtn);

        const saveBtn = document.createElement("button");
        saveBtn.classList.add(
            "button",
            "hori-btn",
            "btn-primary",
            "btn-icon",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin"
            )
        

        saveBtn.setAttribute("data-id", product._id);
        saveBtn.innerText = "Save To Wishlist";
        ctaButton.appendChild(saveBtn);

        cardDetailsContainer.appendChild(ctaButton);
        cardContainer.appendChild(cardDetailsContainer);

        parentElement.appendChild(cardContainer);

    
    
        



        /**--------------------------------------------------------------- */
    }
}


