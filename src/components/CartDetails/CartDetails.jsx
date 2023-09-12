import React from 'react';
import './CartDetails.css';

const CartDetails = ({cartInfo}) => {
    const {name, price} = cartInfo;
    return (
        <div className='cart-info'>
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
    );
};

export default CartDetails;