import React, {useContext} from 'react';
import data from '../utils/data.js'
import {CartContext} from "../App.jsx";
import classes from '../styles/ShoppingCart.module.css'
import CandleItem from "../components/CandleItem.jsx";
import Navbar from "../components/UI/Navbar/Navbar.jsx";


function ShoppingCart(props) {
    const {cart, addItem} = useContext(CartContext)
    const itemsInCart = data.filter(item => {
        if (cart.itemsId.hasOwnProperty(item.id)) return item
    })
    return (
        <>
            <Navbar/>
            <div className={classes.mainContent}>
                <h2>Shopping cart</h2>
                <div className={classes.candlesList}>
                    {itemsInCart.map(item =>
                        <CandleItem {...item}/>
                    )}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;