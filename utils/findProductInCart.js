export const findProductInCart = (cart, prodId) => {
    //here we are checking if the product is already added in the cart
    //fisrt we check if cart not empty
    //second we check if length of products is not less than 0
    //third we check if the id matched with the any product's id in cart
    const isProductInCart = cart && cart.length>0 && cart.some(({_id})=>_id === prodId);
    return isProductInCart;
}