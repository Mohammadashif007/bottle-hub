import React from 'react';
import './CartDetails.css';
import { FaTrash } from 'react-icons/fa';



const CartDetails = ({cartInfo, handleCartItemDelete}) => {
    const {name, price} = cartInfo;
    return (
        <div className='cart-info'>
            <h4>{name}</h4>
            <h4>{price}</h4>
            <i onClick={() => handleCartItemDelete(cartInfo)}> <FaTrash/></i>
        </div>
    );
};

export default CartDetails;