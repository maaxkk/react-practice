import React from 'react';
import MyRadio from "./UI/Radio/MyRadio.jsx";
import classes from '../styles/CandlesFilter.module.css'

function CandlesFilter({categories}) {

    return (
        <div className={classes.filter}>
            {categories.map(category =>
                <MyRadio name={'123'} category={category} type={'radio'}/>
            )}
        </div>
    );
}

export default CandlesFilter;