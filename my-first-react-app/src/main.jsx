import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Greeting, FixErrors, FixErrors2, FixErrors3} from './Greeting.jsx'
import {Avatar, TodoList} from './Avatar.jsx'
import {Counter} from './Counter.jsx'
import {PackingList} from "./Conditionals.jsx";
import {PackingList2, DrinkList} from './Challenges.jsx';
import './index.css'
import {List} from "./Rendering.jsx";
import {List3, RecipeList, Poem} from "./Challenges2.jsx";
import {App2, Profile, Profile4} from "./Props.jsx";
import {Gallery} from "./Challenges3.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Gallery />
        {/*<Profile4/>*/}
        {/*<Profile />*/}
        {/*<App2 />*/}
        {/*<App />*/}
        {/*<PackingList />*/}
        {/*<PackingList2 />*/}
        {/*<DrinkList />*/}
        {/*<List />*/}
        {/*<List3 />*/}
        {/*<Poem/>*/}
        {/*<RecipeList />*/}
        {/*<Greeting/>*/}
        {/*<Avatar/>*/}
        {/*<TodoList/>*/}
        {/*<FixErrors/>*/}
        {/*<FixErrors2/>*/}
        {/*<FixErrors3/>*/}
        <Counter/>
    </React.StrictMode>,
)
