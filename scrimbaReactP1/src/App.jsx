import React from "react";

import {Navbar} from './components/Navbar.jsx'
import {Main} from './components/Main.jsx'
import './styles/App.css'

function App() {
    return (
        <div className={'container'}>
            <Navbar/>
            <Main/>
        </div>
    )
}

export {App}