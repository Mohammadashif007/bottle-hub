import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles_container.css';
import Cart from "../Cart/Cart";
import { getStoredCart, removeItemFromCart, saveCartToLocalStorage } from "../../utilities/localStorage";

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

    // load cart from local
    useEffect(() => {
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles)
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id == id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            setAddCart(savedCart)
        }
    },[bottles])


    const bottleAddToCart = (cartBottle) => {
        const newCart = [...addCart, cartBottle];
        setAddCart(newCart);
        saveCartToLocalStorage(cartBottle.id)
    }

    const handleCartItemDelete = (cartInfo) => {
        console.log(cartInfo.id);
        const newItems = addCart.filter(removeCart => removeCart.id != cartInfo.id);
        setAddCart(newItems)
        removeItemFromCart(cartInfo.id);
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
                <Cart addCart={addCart} handleCartItemDelete={handleCartItemDelete}></Cart>
            </div>
        </div>
    );
};

export default Bottles_container;
