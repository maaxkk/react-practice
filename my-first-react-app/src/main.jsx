import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Greeting, FixErrors, FixErrors2, FixErrors3} from './intro/Greeting.jsx'
import {Avatar, TodoList} from './Avatar.jsx'
import {Counter} from './intro/Counter.jsx'
import {PackingList} from "./Conditionals.jsx";
import {PackingList2, DrinkList} from './challenges/Challenges.jsx';
import './index.css'
import {List} from "./main/Rendering.jsx";
import {List3, RecipeList, Poem} from "./challenges/Challenges2.jsx";
import {App2, Profile, Profile4} from "./main/Props.jsx";
import {Gallery, Profile2Ch3, ProfileCh3} from "./challenges/Challenges3.jsx";
import {ChangeColor, Page} from "./main/States.jsx";
import {GalleryCh4} from "./challenges/Challenges4.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GalleryCh4/>
        {/*<Page />*/}
        {/*<GallerySt />*/}
        {/*<ChangeColor />*/}
        {/*<Profile2Ch3 />*/}
        {/*<ProfileCh3/>*/}
        {/*<Gallery />*/}
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
        {/*<Counter/>*/}
    </React.StrictMode>,
)
