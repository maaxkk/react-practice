import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Clock} from "./components/PracticeEffect.jsx";
import ChatApp from "./components/Chat.jsx";
import {ChatCh1, DotAppCh2} from "./Challenges/UseEffCh1.jsx";
import {DotAppCh3} from "./Challenges/UseEffCh3.jsx";
import TestUseEffect from "./TestUseEffect.jsx";
import {ChatAppCh4} from "./Challenges/useEffCh4.jsx";
import Page from "./Challenges/useEffCh5.jsx";
import {CountInputChanges, CountSecrets} from "./article/LearnUseEff.jsx";
import TableApp from "./article/ThinkReact.jsx";
import {TodoList, TodoList2} from "./Challenges/NoEffCh1.jsx";
import ContactManager from "./Challenges/NoEffCh3.jsx";
import FormCh4 from "./Challenges/NoEffCh4.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <FormCh4/>
            {/*<ContactManager/>*/}
            {/*<TodoList2/>*/}
            {/*<TodoList/>*/}
            {/*<TableApp/>*/}
            {/*<CountSecrets/>*/}
            {/*<CountInputChanges/>*/}
            {/*<Page/>*/}
            {/*<ChatAppCh4 />*/}
            {/*<TestUseEffect/>*/}
            {/*<DotAppCh3/>*/}
            {/*<DotAppCh2/>*/}
            {/*<ChatCh1/>*/}
            {/*<ChatApp/>*/}
            {/*<Clock/>*/}
        </>
    )
}

export default App
