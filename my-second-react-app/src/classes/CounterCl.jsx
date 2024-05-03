import React from "react";


class CounterCl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this)
        this.substract = this.substract.bind(this)
    }


    // state = {
    //     counter: 0,
    // }
    //
    add() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    substract () {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter--minus" onClick={this.substract}>–</button>
                <div className="counter--count">
                    <h1>{this.state.counter}</h1>
                </div>
                <button className="counter--plus" onClick={this.add}>+</button>
            </div>
        )
    }
}

export {CounterCl}