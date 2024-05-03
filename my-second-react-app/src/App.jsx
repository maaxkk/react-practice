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
import AppCl from "./classes/AppCl.jsx";
import AppCl2 from "./classes/AppCl2.jsx";
import {CounterCl} from "./classes/CounterCl.jsx";
import {CardCl} from "./classes/CardCl.jsx";
import {FormCl, LifeCycle} from "./classes/LifeCycle.jsx";
import {ClassInputCl, FunctionalInput} from "./classes/AppCl3.jsx";
import ClassInputCl2 from "./classes/ClassInputCl2.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <ClassInputCl2 />
            {/*{ClassInputCl}*/}
            {/*<FunctionalInput/>*/}
            {/*<FormCl/>*/}
            {/*<LifeCycle/>*/}
            {/*<CardCl />*/}
            {/*<CounterCl/>*/}
            {/*<AppCl2/>*/}
            {/*<AppCl type={'Class'}/>*/}
            {/*<FormCh4/>*/}
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
