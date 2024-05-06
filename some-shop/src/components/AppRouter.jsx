import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Candles from "../pages/Candles.jsx";
import ShoppingCart from "../pages/ShoppingCart.jsx";

export const CartContext = createContext()


function AppRouter(props) {
    const [cart, setCart] = useState({
        count: 0,
        totalPrice: 0,
        itemsId: {},
    })

    function addItem(price, id) {
        setCart(prevCart => {
            let nextItemsIds = {...prevCart.itemsId}
            if (prevCart.itemsId.hasOwnProperty(id)) {
                nextItemsIds[id] += 1;
            } else nextItemsIds[id] = 1;
            return {
                ...prevCart,
                count: prevCart.count + 1,
                totalPrice: prevCart.totalPrice + price,
                itemsId: nextItemsIds,
            };
        })
    }

    return (
        <>
            <CartContext.Provider value={{cart, addItem}}>
                <Routes>
                    <Route path={'/'} element={<Candles/>}></Route>
                    <Route path={'/cart'} element={<ShoppingCart/>}></Route>
                </Routes>
            </CartContext.Provider>
        </>
    );
}

export default AppRouter;