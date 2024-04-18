// using .map and .filter in React!

import { people} from "../../utils/getData.jsx";
import {getImageUrl} from "../../utils/getImage.jsx";
import {Fragment} from "react";

// function List() {
//     // const chemists = people.filter(person => person.profession === 'chemist');
//     // const listItems = chemists.map(person => // elements directly inside a map() call always need keys!
//     const listItems = people.map(person =>
//         <li key={person.id}>
//             <img
//                 src={getImageUrl(person)}
//                 alt={person.name}
//                 />
//             <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 known for {person.accomplishment}
//             </p>
//         </li>)
//     return <ul>{listItems}</ul>;
// }

// What do you do when each item needs to render not one, but several DOM nodes?
// using <> (fragment) it wont let you pass a key, you need to group them into a single <div> or use <Fragment>

function List() {
    const listItems = people.map(person =>
    <Fragment key={person.id}>
        <h2>{person.name}</h2>
        <p>{person.accomplishment}</p>
    </Fragment>
    );
    return <ul>{listItems}</ul>;
}

export {List}