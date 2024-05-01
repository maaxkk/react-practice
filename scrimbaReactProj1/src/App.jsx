import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header.jsx";
import {Content} from "./components/Content.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {

  return (
    <section className={'card'}>
      <Header />
      <Content />
      <Footer />
    </section>
  )
}

export default App
