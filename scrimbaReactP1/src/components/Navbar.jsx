import React from 'react'
import '../styles/Navbar.css'
import reactLogo from '../assets/react-icon-small.png'

function Navbar() {
    return (
        <nav>
            <img className={'nav--react-logo'} src={reactLogo} alt="React Logo"/>
            <h1 className={'nav--react-facts'}>ReactFacts</h1>
            <h2 className={'nav--react-course'}>React Course - Project 1</h2>
        </nav>
    )
}

export {Navbar}
