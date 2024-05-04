import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import React, {useId, useState} from "react";

export const MenuContext = React.createContext()

function Menu({children}) {

    const [open, setOpen] = useState(true)
    const menuId = useId();
    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={[open, toggle, menuId]}>
            <div className="menu" role={'menu'}>
                {/*{React.Children.map(children, (child) => {*/}
                {/*    return React.cloneElement(child, {*/}
                {/*        open: open,*/}
                {/*        toggle: toggle*/}
                {/*    })*/}
                {/*})}*/}
                {children}
            </div>
        </MenuContext.Provider>
    )
}


export {Menu}