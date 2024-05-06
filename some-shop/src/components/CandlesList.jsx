import React from 'react';
import CandleItem from "./CandleItem.jsx";
import classes from "../styles/CandlesList.module.css";

function CandlesList({candles}) {
    return (
        <div className={classes.mainContent}>
            <h2 className={''}>All candles</h2>
            <div className={classes.candlesList}>
                {candles.map(candle =>
                    <CandleItem {...candle}/>
                )}
            </div>
        </div>
    );
}

export default CandlesList;