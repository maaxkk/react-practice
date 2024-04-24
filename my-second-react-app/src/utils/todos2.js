let nextId = 0;
let calls = 0;

export function getVisibleTodos(todos, showActive) {
    console.log(`getVisibleTodos() was called ${++calls} times`);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;
    return visibleTodos;
}

export function createTodo2(text, completed = false) {
    return {
        id: nextId++,
        text,
        completed
    };
}

export const initialTodos2 = [
    createTodo2('Get apples', true),
    createTodo2('Get oranges', true),
    createTodo2('Get carrots'),
];
