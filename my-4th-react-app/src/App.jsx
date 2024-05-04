import React, {useState} from 'react'
import {Counter} from "./components/Counter.jsx";
import {ClassCounter} from "./components/ClassCounter.jsx";
import './styles/App.css'
import PostItem from "./components/PostItem.jsx";
import PostList from "./components/PostList.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])

    return (
        <div className={'App'}>
            <form action="">
                <myInput type="text" placeholder={'Post title'}/>
                <myInput type="text" placeholder={'Post description'}/>
                <MyButton disabled>Create post</MyButton>
            </form>
            <PostList posts={posts} title={'Posts about JS'}/>
        </div>
    )
}

export default App
