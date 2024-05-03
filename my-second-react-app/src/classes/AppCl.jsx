import React from "react";

// function AppCl() {
//     return (
//         <h1>Function component</h1>
//     )
// }



/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }

// # 1
class AppCl extends React.Component {
    render() {
        return (
            <div>
                <HeaderCl />
                <GreetingCl/>
            </div>
        )
    }
}



// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

// # 2
class HeaderCl extends React.Component {
    render() {
        return (
            <header>Welcome, {this.props.username}</header>
        )
    }
}

// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }

class GreetingCl extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}


export default AppCl