import React, {useState} from "react";

import {Navbar} from './components/Navbar.jsx'
import {Main} from './components/Main.jsx'
import './styles/App.css'

function App() {
    const [darkMode, setDarkMode] = useState(true)
    function toggleMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className={'container'}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}

export {App}