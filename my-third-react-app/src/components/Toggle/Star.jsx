import React from 'react';
import {BsStar, BsStarFill} from "react-icons/all.js";

function Star() {
    const [starred, setStarred] = React.useState(false)

    function toggle(event) {
        event.stopPropagation()
        setStarred(prev => !prev)
        console.log('works in star')
    }

    return (
        starred ?
            <BsStarFill className="star filled" onClick={toggle} /> :
            <BsStar className="star " onClick={toggle} />
    )
}

export default Star;