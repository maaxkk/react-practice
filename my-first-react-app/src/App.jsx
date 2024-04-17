import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props){
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 // return animal.startsWith('L') ? <li key={animal}>{'Cool ' + animal}</li> : null;
//                 // more advanced way to do the same
//                 return animal.startsWith('L') && <li key={animal}>{'Cool ' + animal}</li>
//                 // if startsWith returns true then it returns second operand, otherwise if false, then it's ignored
//             })}
//         </ul>
//     )
// }

// function List(props){
//     if (!props.animals) {
//         return <div>Loading...</div>;
//     }
//
//     if (props.animals.length === 0){
//         return <div>There are no animals in the list!</div>;
//     }
//
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return <li key={animal}>{'Cool ' + animal}</li>
//             })}
//         </ul>
//     );
// }

// the with ternary operators
// function List(props){
//     return (
//         <>
//             {!props.animals ? (
//                 <div>Loading...</div>
//             ) : props.animals.length > 0 ? (
//                 <ul>
//                     {props.animals.map((animal) => {
//                         return <li key={animal}>{'Cool ' + animal}</li>
//                     })}
//                 </ul>
//             ): (
//                 <div>There are no animals on the list!</div>
//             )}
//         </>
//     );
// }

// with &&
function List(props) {
    return (
        <>
            {!props.animals && <div>Loading...</div>}
            {props.animals && props.animals.length > 0 && (
                <ul>
                    {props.animals.map((animal) => {
                        return <li key={animal}>{'Cool ' + animal}</li>
                    })}
                </ul>
            )}
            {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
        </>
    )
}

function App() {
    // const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
    const animals = [];
    animals.push('Dog')
    animals.push('Cat')
    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    )
}

// function App() {
//     const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
//
//     return (
//         <div>
//             <h1>Animals: </h1>
//             <ul>
//                 {animals.map((animal) => {
//                     return <li key={animal}>{'Cool ' + animal}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// the above code is the same as
// function App() {
//     const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
//     const animalsList = animals.map((animal) => <li key={animal}>{'Cool ' + animal}</li>)
//     return (
//         <div>
//             <h1>Animals: </h1>
//             <ul>
//                 {animalsList}
//             </ul>
//         </div>
//     )
// }

// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
