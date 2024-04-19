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
import {FeedbackForm, FeedbackForm2, Form, GalleryCh4} from "./challenges/Challenges4.jsx";
import {GalleryRender} from "./main/Rendering2.jsx";
import {Person} from "./main/moreOnState.jsx";
import {useState} from "react";
import {CounterMore, FormMore, FormMore2, TrafficLight} from "./main/MoreStates.jsx";
import {FeedbackFormMore, FormMore3, MovingDot, TestApp} from "./main/MoreStates2.jsx";
import {Menu3, TravelPlan} from "./main/MoreStates3.jsx";
import {AppClock, TravelPlan2} from "./challenges/Challenges5.jsx";
import {MailClient, MailClient2} from "./challenges/Challenges5-2.jsx";
import {Accordion, FilterableList, SyncedInputs} from "./main/SharingState.jsx";

//infinite loop
function Component() {
    const [count, setCount] = useState(0);
    // console.log(count)
    setCount(count + 1);

    return <h1>{count}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FilterableList/>*/}
        {/*<SyncedInputs/>*/}
        {/*<Accordion/>*/}
        {/*<MailClient2/>*/}
        {/*<MailClient/>*/}
        {/*<TravelPlan2/>*/}
        {/*<AppClock/>*/}
        {/*<TravelPlan/>*/}
        {/*<Menu3/>*/}
        {/*<TestApp/>*/}
        {/*<FormMore3/>*/}
        {/*<FeedbackFormMore/>*/}
        {/*<MovingDot/>*/}
        {/*<TrafficLight/>*/}
        {/*<FormMore2/>*/}
        {/*<FormMore />*/}
        {/*<CounterMore/>*/}
        <Person/>
        {/*<Component/>*/}
        {/*<GalleryRender/>*/}
        {/*<FeedbackForm2/>*/}
        {/*<FeedbackForm/>*/}
        {/*<Form/>*/}
        {/*<GalleryCh4/>*/}
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
