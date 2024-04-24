import { useState, useEffect } from 'react';

let firstLaunch = true
export default function FormCh4() {
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');

    // useEffect(() => {
    //     if (!showForm && !firstLaunch) {
    //         sendMessage(message);
    //     }
    //     // works only without strictMode
    //     // we declared global variable outside and at first launch we wont get empty message, then return of useEffect
    //     // will make firstLaunch = false and when user will submit form message will be sent
    //     // this is better instead of creating 2 useEffects
    //     return () => firstLaunch = false
    // }, [showForm, message]);

    // much better solution is to put sendMessage inside function that handles form submit, it's way more logical
    // to call function only when form is submitted
    function handleSubmit(e) {
        e.preventDefault();
        setShowForm(false);
        sendMessage(message)
    }

    if (!showForm) {
        return (
            <>
                <h1>Thanks for using our services!</h1>
                <button onClick={() => {
                    setMessage('');
                    setShowForm(true);
                }}>
                    Open chat
                </button>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
      />
            <button type="submit" disabled={message === ''}>
                Send
            </button>
        </form>
    );
}

function sendMessage(message) {
    console.log('Sending message: ' + message);
}
