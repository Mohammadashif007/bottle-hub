import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles_container.css';
import Cart from "../Cart/Cart";

const Bottles_container = () => {
    const [bottles, setBottles] = useState([]);
    const [addCart, setAddCart] = useState([]);

    useEffect(() => {
        const url = "../../../public/bottle.json";
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setBottles(data);
        }
        fetchData();
    }, []);

    const bottleAddToCart = (cartBottle) => {
        const newCart = [...addCart, cartBottle];
        setAddCart(newCart);
    }

    // const addCartInfo = addCart.map(info => info);
    // console.log(addCartInfo)

    return (
        <div>
            <h1>Pick Up your favorite one</h1>
            <div className="shop-container">
                <div className="bottles-container">
                    {bottles.map((bottle) => (
                        <Bottle key={bottle.id} bottle={bottle}  bottleAddToCart={bottleAddToCart}></Bottle>
                    ))}
                </div>
                <Cart addCart={addCart}></Cart>
            </div>
        </div>
    );
};

export default Bottles_container;
