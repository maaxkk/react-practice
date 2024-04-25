import {useState} from 'react'

import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {Card} from "./components/Card.jsx";
import data from './utils/data.js'

function App() {
    const dataArr = data.map(item => {
        return <Card
            key={item.id}
            item={item} />
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className={'app--cards-list'}>
                {dataArr}
            </section>
        </div>
    )
}

export default App
