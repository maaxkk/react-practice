import React from 'react'
import '../styles/Navbar.css'
import reactLogo from '../assets/react-icon-small.png'

function Navbar({darkMode, toggleDarkMode}) {
    return (
        <nav className={darkMode ? 'dark' : ''}>
            <img className={'nav--react-logo'} src={reactLogo} alt="React Logo"/>
            <h1 className={'nav--react-facts'}>ReactFacts</h1>
            <div className={'toggler'}>
                <p className={'toggler--light'}>Light</p>
                <div className={'toggler--slider'} onClick={toggleDarkMode}>
                    <div className={'toggler--slider--circle'}>

                    </div>
                </div>
                <p className={'toggler--dark'}>Dark</p>
            </div>
        </nav>
    )
}

export {Navbar}
