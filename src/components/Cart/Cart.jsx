import React from "react";
import CartDetails from "../CartDetails/CartDetails";

const Cart = ({ addCart }) => {
    console.log(addCart);
    return (
        <div>
            <h3>You picked up</h3>
            {addCart.map((cartInfo) => <CartDetails key={cartInfo.id} cartInfo={cartInfo}></CartDetails>)}
        </div>
    );
};

export default Cart;
