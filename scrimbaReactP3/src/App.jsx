import {useState} from 'react'
import './styles/App.css'
import {Header} from "./components/Header.jsx";
import {Meme} from "./components/Meme.jsx";

function App() {

    return (
        <div>
            <Header/>
            <Meme/>
        </div>
    )
}

export default App
