import React from "react";
import CartDetails from "../CartDetails/CartDetails";

const Cart = ({ addCart, handleCartItemDelete }) => {
    // console.log(addCart);
    return (
        <div>
            <h3>You picked up</h3>
            {addCart.map((cartInfo) => <CartDetails key={cartInfo.id} cartInfo={cartInfo} handleCartItemDelete={handleCartItemDelete}></CartDetails>)}
        </div>
    );
};

export default Cart;
