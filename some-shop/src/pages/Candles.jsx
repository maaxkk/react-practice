import {createContext, useState} from "react";
import data from "../utils/data.js";
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import CandlesFilter from "../components/CandlesFilter.jsx";
import CandlesList from "../components/CandlesList.jsx";

export const CartContext = createContext()

function Candles() {
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
        <div>
            <CartContext.Provider value={{cart, addItem}}>
                <Navbar/>
                <CandlesFilter categories={['Therapy', 'Classics', 'Aroma']}/>
                <CandlesList candles={candles}/>
            </CartContext.Provider>
        </div>
    )
}

export default Candles
