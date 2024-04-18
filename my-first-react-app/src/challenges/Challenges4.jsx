import {useState} from 'react';
import {sculptureList} from "../../utils/getSculptures.jsx";

function GalleryCh4() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index === sculptureList.length - 1) {
            return;
        }
        setIndex(index + 1);
    }

    function handlePrevClick() {
        if (index === 0) {
            return;
        }
        setIndex(index - 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handlePrevClick}>
                Previous
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    function handleReset() {
        setFirstName('')
        setLastName('')
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input placeholder='First name' value={firstName} onChange={handleFirstNameChange}/>
            <input placeholder='Last name' value={lastName} onChange={handleLastNameChange}/>
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}

// we create useState for isSent and then check if isSent is true then we return 'Thank you', is sent is false -> we go to 'else' condition
// we create new useState => message and setMessage
// and then we submit form and isSent setting to true, on the next render isSent is true and we dont go to 'else' branch
// now React does not understand where is hook message and setMessage and gives us an error
function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        // const [message, setMessage] = useState('');
        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea placeholder='Message'
                          value={message} onChange={e => setMessage(e.target.value)}
                ></textarea>
                <br/>
                <button type='submit'>Send</button>
            </form>
        )
    }
}


function FeedbackForm2() {
    // we don't need useState here
    // const [name, setName] = useState('');

    function handleClick() {
        const name = prompt('What is your name?')
        alert(`Hello, ${name}`)
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    )
}

export {GalleryCh4, Form, FeedbackForm, FeedbackForm2}