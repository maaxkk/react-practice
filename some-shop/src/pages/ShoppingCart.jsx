import React, {useContext} from 'react';
import data from '../utils/data.js'
import {CartContext} from "../App.jsx";
import classes from '../styles/ShoppingCart.module.css'
import CandleItem from "../components/CandleItem.jsx";

function ShoppingCart(props) {
    const {cart, addItem} = useContext(CartContext)
    const itemsInCart = data.filter(item => {
        if (cart.itemsId.hasOwnProperty(item.id)) return item
    })
    console.log(itemsInCart)
    return (
        <div className={classes.itemsList}>
            <h1>test</h1>
            {itemsInCart.map(item =>
                <CandleItem {...item}/>
            )}
        </div>
    );
}

export default ShoppingCart;