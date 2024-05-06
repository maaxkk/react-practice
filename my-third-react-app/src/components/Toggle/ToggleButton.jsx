import React, {useContext} from 'react';
import {ToggleContext} from "./Toggle.jsx";

function ToggleButton(props) {
    const {toggle} = useContext(ToggleContext)
    return (
        <div onClick={toggle}>{props.children}</div>
    );
}

export default ToggleButton;