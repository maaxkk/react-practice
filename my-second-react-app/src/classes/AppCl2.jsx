import React from "react";

class AppCl2 extends React.Component {

    /**
     * If you can't use class fields in your class components
     * for some reason, then you'll need to make use of the
     * class' `constructor` method to initialize your state object.
     * The first line of the constructor method should be a call
     * to `super()` like you see below, and then you can add your
     * state variable as a property attached to `this`
     */
    constructor(props) {
        super(props)
        this.state = {
            goOut: "Yes"
        }
        this.toggleGoOut = this.toggleGoOut.bind(this)
    }

    /**
     * If you can't use arrow functions for your class methods,
     * you'll need to make sure to `bind` them inside the
     * constructor above.
     */


    /**
     * A class component with state will ALWAYS save state in a class
     * instance variable called `state`, which will always be an object.
     * The individual values you save in state will be properties on
     * the `state` object.
     *
     * The simplest (and more modern) way to delcare new state in a
     * class component is to just use a "class field" declaring state
     * as an object, like you see below.
     *
     * Then, throughout the rest of the component (e.g. inside the render
     * method) you can access that state with `this.state.<yourPropertyHere>`
     */

    state = {
        goOut: "Yes"
    }

    /**
     * Any class methods you create that need to call the `this.setState`
     * method (which is available to our component because we're extending
     * React.Component) should be declared as an arrow function, for
     * reasons we will discuss soon. (Note: other class methods you
     * want to make that DON'T use `this.setState` don't necessarily
     * need to be declared as arrow function to work correctly)
     */

    toggleGoOut() {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === 'Yes' ? 'No' : 'Yes'
            }
        })
    }
    render() {
        return (
           <div className={'state'}>
               <h1 className={'state--title'}>Should I go out tonight?</h1>
               <div className={'state--value'} onClick={this.toggleGoOut}>
                   <h1>{this.state.goOut}</h1>
               </div>
           </div>
        )
    }
}

export default AppCl2