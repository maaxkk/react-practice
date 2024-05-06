import {createContext, useState} from 'react'
import './App.css'
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import data from './utils/data.js'
import {Route, Routes} from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Candles from "./pages/Candles.jsx";

export const CartContext = createContext()

function App() {
    const [candles, setCandles] = useState(data)
    const [cart, setCart] = useState({
        count: 0,
        totalPrice: 0,
        itemsId: {},
    })
    const [filter, setFilter] = useState({
        sort: '',
        query: '',
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
        <div className={'app'}>
            <CartContext.Provider value={{cart, addItem}}>
                <Routes>
                    <Route path={'/'} element={<Candles/>}></Route>
                    <Route path={'/cart'} element={<ShoppingCart/>}></Route>
                </Routes>
            </CartContext.Provider>
        </div>
    )
}

export default App
