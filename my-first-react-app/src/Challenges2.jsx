import {people} from '../utils/getData.jsx';
import {getImageUrl} from '../utils/getImage.jsx';

function List3() {
    const chemists = people.filter(person => person.profession === 'chemist')
    const chemistsList = chemists.map(person => <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    )
    const otherScientists = people.filter(person => person.profession !== 'chemist')
    const listItems = otherScientists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>);
    return (<article>
        <h1>Scientists</h1>
        <ul>{chemistsList}</ul>
        <ul>{listItems}</ul>
    </article>);
}


import {recipes} from "../utils/getData2.jsx";
import {Fragment} from "react";


// before
// function RecipeList() {
//     const recipesList = recipes.map(recipe =>
//         <div key={recipe.id}>
//             <h2 key={recipe.id}> {recipe.name}</h2>
//             <ul>
//                 {recipe.ingredients.map(ingredient =>
//                     <li key={ingredient}>{ingredient}</li>
//                 )}
//             </ul>
//         </div>
//     )
//     return (
//         <div>
//             <h1>Recipes</h1>
//             {recipesList}
//         </div>
//     )
// }

// after
// using component in component
function Recipe({id, name, ingredients}) {
    return (
        <div key={id}>
            <h1>{name}</h1>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
    )
}

function RecipeList() {
    const recipesList = recipes.map(recipe =>
        <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>
    )
    return (
        <div>
            <h1>Recipes</h1>
            {recipesList}
        </div>
    )
}

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.',
        'Write again.',
        'Erase again.',
    ]
};

function Poem() {
    return (
        <article>
            {poem.lines.map((line, index) =>
                <Fragment key={index}>
                    {index > 0 && <hr/>}
                    <p>
                        {line}
                    </p>
                </Fragment>
            )}
        </article>
    )
}


// with output array
// function Poem() {
//     let output = [];
//
//     // fill the output array
//     poem.lines.forEach((line, index) => {
//         output.push(
//             <hr key={index + '-separator'} />
//         );
//         output.push(
//             <p key={index + '-text'}>
//                 {line}
//             </p>
//         );
//     });
//     // remove the first <hr />
//     output.shift();
//     return (
//         <article>
//             {output}
//         </article>
//     )
// }


export {List3, RecipeList, Poem}