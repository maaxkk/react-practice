import {useEffect, useMemo, useState} from "react";
import {createTodo, initialTodos} from "../utils/todos.js";
import { initialTodos2, createTodo2, getVisibleTodos } from '../utils/todos2.js';


function TodoList() {
    const [todos, setTodos] = useState(initialTodos)
    const [showActive, setShowActive] = useState(false);

    // const [visibleTodos, setVisibleTodos] = useState([]);
    // const [activeTodos, setActiveTodos] = useState([]);
    // const [footer, setFooter] = useState(null);

    const activeTodos = todos.filter(todo => !todo.completed)
    let visibleTodos = []
    if (showActive) visibleTodos = activeTodos
    else visibleTodos = todos

    // useEffect(() => {
    //     setVisibleTodos(showActive ? activeTodos : todos);
    // }, [showActive, todos, activeTodos]);


    // useEffect(() => {
    //     setActiveTodos(todos.filter(todo => !todo.completed));
    // }, [todos]);

    // useEffect(() => {
    //     setFooter(
    //         <footer>
    //             {activeTodos.length} todos left
    //         </footer>
    //     );
    // }, [activeTodos]);

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])}/>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            {/*{footer}*/}
            {activeTodos.length} todos left
        </>
    );
}


// Ch.2

function NewTodo({onAdd}) {
    const [text, setText] = useState('');

    function handleAddClick() {
        setText('');
        onAdd(createTodo(text));
    }

    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={handleAddClick}>
                Add
            </button>
        </>
    );
}




function TodoList2() {
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    const [text, setText] = useState('');

    // useMemo caches value between re-renders, and if dependencies are the same, it does not do new recalculating
    const visibleTodos = useMemo(() => {
        return getVisibleTodos(todos, showActive)
    }, [todos, showActive])

    // const [visibleTodos, setVisibleTodos] = useState([]);
    //
    // useEffect(() => {
    //     setVisibleTodos(getVisibleTodos(todos, showActive));
    // }, [todos, showActive]);

    function handleAddClick() {
        setText('');
        setTodos([...todos, createTodo(text)]);
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAddClick}>
                Add
            </button>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
        </>
    );
}

export {TodoList, TodoList2}
