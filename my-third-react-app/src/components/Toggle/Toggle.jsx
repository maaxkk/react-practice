import React, {createContext, useState} from 'react';
import ToggleButton from "./ToggleButton.jsx";

export const ToggleContext = createContext()

function Toggle(props) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(prevOn => !prevOn)
        console.log('works')
    }

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {props.children}
            <ToggleButton/>
        </ToggleContext.Provider>
    );
}

export default Toggle;