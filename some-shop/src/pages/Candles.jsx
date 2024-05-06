import {useState} from "react";
import data from "../utils/data.js";
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import CandlesFilter from "../components/CandlesFilter.jsx";
import CandlesList from "../components/CandlesList.jsx";


function Candles() {
    const [candles, setCandles] = useState(data)

    const [filter, setFilter] = useState({
        category: 'All',
        query: '',
        sort: '',
    })

    const categories = []
    candles.forEach((candle) => {
        for (let candleCategory of candle.category) {
            if (categories.includes(candleCategory)) continue;
            categories.push(candleCategory);
        }
    })

    console.log(categories)

    return (
        <div>
            <Navbar filter={filter} setFilter={setFilter}/>
            <CandlesFilter categories={categories} filter={filter} setFilter={setFilter}/>
            <CandlesList candles={candles} filter={filter}/>
        </div>
    )
}

export default Candles
