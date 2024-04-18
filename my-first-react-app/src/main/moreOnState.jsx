import {useState} from "react";

function Person() {
    const [person, setPerson] = useState({name: 'John', age: 100});

    // BAD - Don't do this!
    // const handleIncreaseAge = () => {
    //     // mutating the current state object
    //     person.age = person.age + 1;
    //     setPerson(person)
    // }

    // GOOD - Do this!
    // const handleIncreaseAge = () => {
    //     // copy the existing person object into a new object
    //     // while updating the age property
    //     const newPerson = { ...person, age: person.age + 1};
    //     setPerson(newPerson);
    // };



    const handleIncreaseAge = () => {
        console.log('in handleIncreaseAge (before setPerson call): ', person); // 100
        setPerson({...person, age: person.age + 1});
        // we've called setPerson, surely person has updated?
        console.log('in handleIncreaseAge (after setPerson call: ', person); // 100
    }

    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log('during render: ', person); // 101

    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    )
}

export {Person}