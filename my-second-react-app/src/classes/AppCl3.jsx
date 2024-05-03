import React, {Fragment, useState} from "react";

const FunctionalInput = ({name}) => {
    const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((todo) => [...todo, inputVal]);
        setInputVal("");
    };

    return (
        <section>
            <h3>{name}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task-entry">Enter a task: </label>
                <input
                    type="text"
                    name="task-entry"
                    value={inputVal}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </section>
    );
};

export {FunctionalInput};


// Class version
class ClassInputCl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            inputVal: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value,
        }));
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState((state) => ({
            todos: state.todos.concat(state.inputVal),
            inputVal: "",
        }));
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                {/* The input field to enter To-Do's */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input type="text"
                           name={'task-entry'}
                           value={this.state.inputVal}
                           onChange={this.handleInputChange}
                    />
                    <button type={'submit'}>Submit</button>
                </form>
                <h4>All the tasks!</h4>
                {/* The list of all the To-Do's, displayed */}
                <ul>
                    {this.state.todos.map((todo) => {
                        return (
                            <Fragment key={todo}>
                                <li key={todo}>{todo}</li>
                                <button>Delete</button>
                            </Fragment>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export {ClassInputCl}