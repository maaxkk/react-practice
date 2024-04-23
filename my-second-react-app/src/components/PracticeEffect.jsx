import {useEffect, useState} from "react";

function Clock() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const key = setInterval(() => {
            setCounter(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(key);
        };
    }, [])

    // notes about useEffect
    // useEffect(() => {
    //     // this runs after every render
    // } );
    // useEffect(() => {
    //     // this runs only on mount (when the component appears)
    // }, []);
    //
    // useEffect(() => {
    //     // this runs on mount *and also* if either a or b have c
    // }, [a, b]);

    return (
        <p>{counter} seconds have passed.</p>
    );

}

function AppEff() {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    // You should avoid direct manipulation when not necessary
    // useEffect(() => {
    //     document.getElementById('name').addEventListener('change', handleInput);
    //     return () => {
    //         document.getElementById('name').removeEventListener(handleInput)
    //     }
    // }, );

    return (
        <>
            <input onChange={handleInput} value={input} />
            <p>{ input }</p>
        </>
    )
}



export {Clock}
