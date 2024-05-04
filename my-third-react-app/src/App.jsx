import {createContext, useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './switchTheme.css'
import {Button} from "./components/Button.jsx";
import {FaAtom} from "react-icons/fa";
import {Avatar} from "./components/Avatar.jsx";
import BZ from './images/bob.jpg'
import Menu from "./components/Menu/index.js";
import Header from "./components/Header.jsx";
import Button2 from "./components/Button2.jsx";

const ThemeContext = createContext()

function App() {
    // const [theme, setTheme] = useState('dark')
    const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash']

    // function handleChangeTheme() {
    //     setTheme(prevTheme => {
    //         if (prevTheme === 'light') return 'dark'
    //         else return 'light'
    //     })
    // }

    return (
        <>
        {/* <ThemeContext.Provider value={[theme, handleChangeTheme]}>*/}
        {/*     <div className={`container ${theme}-theme`}>*/}
        {/*         <Header/>*/}
        {/*         <Button2/>*/}
        {/*     </div>*/}

            <Menu>
                <Menu.Button>Sports</Menu.Button>
                <Menu.Dropdown>
                    {sports.map(sport => {
                        return <Menu.Item key={sport}>{sport}</Menu.Item>
                    })}
                </Menu.Dropdown>
            </Menu>


            {/*<Avatar src={BZ} alt={'Image of Bob Ziroll'}/>*/}

            {/*<Avatar>BZ</Avatar>*/}
            {/*<Avatar>BZ</Avatar>*/}

            {/*<Avatar></Avatar>*/}
            {/*<Avatar></Avatar>*/}

            {/*<Button variant={'success'} size={'sm'}>*/}
            {/*    /!* Icon goes here *!/*/}
            {/*    <FaAtom/>*/}
            {/*    Success*/}
            {/*</Button>*/}
            {/*<Button variant={'warning'}>*/}
            {/*    /!* Icon goes here *!/*/}
            {/*    <FaAtom/>*/}
            {/*    Warning*/}
            {/*</Button>*/}
            {/*<Button variant={'danger'} size={'lg'}>*/}
            {/*    /!* Icon goes here *!/*/}
            {/*    <FaAtom/>*/}
            {/*    Danger*/}
            {/*</Button>*/}
        {/*</ThemeContext.Provider>*/}
       </>
    )
}

export default App
export {ThemeContext}
