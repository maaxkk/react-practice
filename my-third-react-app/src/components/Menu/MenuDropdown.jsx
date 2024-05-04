import React, {useContext} from "react";
import {MenuContext} from "./Menu.jsx";

export default function MenuDropdown({children}) {
    const value = useContext(MenuContext)
    return (
        <>
            {/*
            {<div className="menu-dropdown">}
            {{open ?}
            {    React.Children.map(children, (child )=> {}
            {        return React.cloneElement( child, {}
            {            open: open,}
            {            toggle: toggle,}
            {        })}
            {    })}
            {: null}}
            {</div>}
            */}
            <div className="menu-dropdown" aria-hidden={!open} id={value[2]}> {value[0] ? children : null} </div>
        </>
    )
}

