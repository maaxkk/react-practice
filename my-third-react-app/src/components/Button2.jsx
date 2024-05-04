import React, {useContext} from "react"
import {ThemeContext} from "../App.jsx";

export default function Button2() {
    const value = useContext(ThemeContext)
    console.log(value[1])
    return (
        <button onClick={value[1]} className={`${value[0]}-theme`}>
            Switch Theme
        </button>
    )
}