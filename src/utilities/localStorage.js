const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return [];

}

const saveCartToLocalStorage = id => {
    const storedCart = getStoredCart();
    storedCart.push(id);

    // Set to ls
    setToLocalStorage(storedCart)
}


const setToLocalStorage = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringify);
}

const removeItemFromCart = id => {
    const storedCart = getStoredCart();
    const remainingCart = storedCart.filter(cart => cart !== id);
    setToLocalStorage(remainingCart); 
}


export {saveCartToLocalStorage, getStoredCart, removeItemFromCart};