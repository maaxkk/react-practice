import {useState} from "react";

function FormMore() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!')
    if (isSent) {
        return <h1>Your message is on its way!</h1>
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            setMessage(message);
        }}
        >
            <textarea placeholder='Message'
                      value={message}
                      onChange={e => setMessage(e.target.value)}
            />
            <button type={'submit'}>Send</button>
        </form>
    )
}

function CounterMore() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            {/*<button onClick={() => {*/}
            {/*    setNumber(number + 1)*/} { /*substitution method -> setNumber(0+1) */}
            {/*    setNumber(number + 1)*/} { /* substitution method -> setNumber(0+1) */}
            {/*    setNumber(number + 1)*/} { /* substitution method -> setNumber(0+1) */}
            {/*}}>+3</button>*/}
            {/*<button onClick={() => {*/}
            {/*    setNumber(number + 5) // substitution method -> setNumber(0+5)*/}
            {/*    alert(number) // substitution method -> alert(5)*/}
            {/*}}>+5</button>*/}
            <button onClick={() => {
                setNumber(number + 5); // 5 immediately
                setTimeout(() => {
                    // setNumber(number + 5); // if clicked 5 times, the result will be still 0+5 = 5 not 25, we took snapshot of 0
                    // no matter how many clicks after render we will see only 5
                    alert(number); // still 0
                }, 3000)
            }}>+5
            </button>
        </>
    )
}

function FormMore2() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`) // before submitting form, we already changed states of message and to
            // that's why alert prints correct data, on 'React shelf' message and 'to' already changed
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea placeholder={'Message'}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
            />
            <button type={'submit'}>Send</button>
        </form>
    )
}

function TrafficLight() {
    const [walk, setWalk] = useState(true)

    function handleClick() {
        setWalk(!walk)
        alert(`Next is ${walk ? 'Stop' : 'Walk'}`)
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color: walk ? 'green' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    )
}

export {FormMore, CounterMore, FormMore2, TrafficLight}