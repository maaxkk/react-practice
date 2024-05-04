import {Button} from "../Button.jsx";
import {useContext} from "react";
import {MenuContext} from "./Menu.jsx";

export default function MenuButton({ children, open, toggle }) {
    const value = useContext(MenuContext)
    return (
        <Button onClick={value[1]} aria-expanded={value[0]} aria-haspopup={true} aria-controls={value[2]}>{children}</Button>
    )
}