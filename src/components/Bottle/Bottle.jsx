import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, bottleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle-info'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <button onClick={() => bottleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;