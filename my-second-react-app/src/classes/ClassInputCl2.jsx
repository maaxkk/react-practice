import React, {Component, Fragment} from "react";

class CounterCl2 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log('Counter render')
        return (
            <p>Total tasks: {this.props.tasks.length}</p>
        )
    }
}

class ClassInputCl2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [{title: 'Just some demo tasks', id: Math.random(), edit: false}, {
                title: 'As an example',
                id: Math.random(),
                edit: false
            },],
            inputVal: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value,
        }));
    }

    handleDelete(id) {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(task => task.id !== id),
                inputVal: prevState.inputVal,
            }
        })
    }

    handleChange(event, id) {
        this.setState(prevState => {
            const editedTodos = [...prevState.todos]
            editedTodos.map(todo => {
                if (todo.id === id) {
                    todo.title = event.target.value
                }
                return todo
            })
            return {
                todos: editedTodos,
                inputVal: prevState.inputVal
            }
        })
    }

    handleClick(id) {
        this.setState(prevState => {
            const newTodos = [...prevState.todos]
            newTodos.map(todo => {
                if (todo.id === id) {
                    todo.edit = true;
                }
                return todo;
            })
            return {
                todos: prevState.todos,
                inputVal: prevState.inputVal,
            }
        })
    }

    handleResubmit(id) {
        this.setState(prevState => {
            const newTodos = [...prevState.todos]
            newTodos.map(todo => {
                if (todo.id === id) {
                    todo.edit = false;
                }
                return todo;
            })
            return {
                todos: prevState.todos,
                inputVal: prevState.inputVal,
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            todos: [...state.todos, {title: state.inputVal, id: Math.random(), edit: false}],
            inputVal: '',
        }));
    }

    render() {
        console.log('render')
        console.log(this.state.todos)
        return (
            <section>
                <CounterCl2 tasks={this.state.todos}/>
                {/* eslint-disable-next-line react/prop-types */}
                <h3>{this.props.name}</h3>
                {/* The input field to enter To-Do's */}
                <form onSubmit={this.handleSubmit}>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input
                        type="text"
                        name="task-entry"
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks!</h4>
                {/* The list of all the To-Do's, displayed */}
                <ul>
                    {this.state.todos.map((todo) => {
                        return (
                            <Fragment key={todo.id}>
                                {
                                    todo.edit
                                        ? <input
                                            value={todo.title}
                                            onChange={(e) => this.handleChange(e, todo.id)}
                                            type={'text'}
                                        /> : <li key={todo.title}>{todo.title}</li>
                                }
                                <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
                                {
                                    todo.edit
                                        ? <button onClick={() => this.handleResubmit(todo.id)}>Resubmit</button>
                                        : <button onClick={() => this.handleClick(todo.id)}>Edit</button>
                                }
                            </Fragment>
                        )
                    })}
                </ul>
            </section>
        );
    }
}

export default ClassInputCl2;