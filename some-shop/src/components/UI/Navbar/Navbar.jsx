import React, {useContext} from 'react';
import candleLogo from '../../../assets/candle.png'
import classes from './Navbar.module.css'
import MyInput from "../Input/MyInput.jsx";
import MyButton from "../Button/MyButton.jsx";
import {CartContext} from "../../../App.jsx";
import {Link} from "react-router-dom";

function Navbar(props) {
    const {cart, addItem} = useContext(CartContext)
    return (
        <header className={classes.header}>
            <div className={classes.logoWrapper}>
                <img className={classes.logo} src={candleLogo} alt={'Image of logo'}/>
                <div>
                    <h1 className={classes.title}>REACT CANDLES V2</h1>
                    <p className={classes.subtitle}>made with love ❤ </p>
                </div>
            </div>
            <div className={classes.inputWrapper}>
                <MyInput placeholder={'Search candles...'}/>
            </div>
            <div className={classes.cartButton}>
                <Link to={'/cart'}>
                    <MyButton price={cart.totalPrice} count={cart.count}/>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;