import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import classes from "./MyButton.module.css";

function MyButton(props) {
    return (
        <button {...props} className={classes.myButton}>{props.price} $ | <FaShoppingCart/> {props.count}</button>
    );
}

export default MyButton;