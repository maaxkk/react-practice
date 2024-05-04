import {useContext} from "react";
import {ThemeContext} from "../App.jsx";

export default function Header() {
    const value = useContext(ThemeContext)
    console.log(value)
    return (
        <header className={`${value[0]}-theme`}>
            <h1>{value[0] === 'light' ? 'Light' : 'Dark'}</h1>
        </header>
    )
}