import {useState, useEffect} from "react";

function CountInputChanges() {
    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);

    // infinite loop. To fix it just need to add dependencies array
    // useEffect(() => setCount(count + 1));

    useEffect(() => {
        setCount(count + 1)
    }, [value]); // now it runs only when 'value' changes

    const onChange = ({target}) => setValue(target.value);

    return (
        <div>
            <input type="text"
                   value={value} onChange={onChange}
            />
            <div>Number of changes: {count}</div>
        </div>
    )
}

// one more example of infinite loop
function CountSecrets() {
    const [secret, setSecret] = useState({value: "", countSecrets: 0});

    // if only 1 time we change secret value to 'secret' we will get infinite loop, because after setting to 'secret'
    // it will re-render component and will run useEffect(because of dependencies array, secret was changed) and it will
    // return 'true' from if statement and will run infinite loop, increasing counter of secrets
    useEffect(() => {
        if (secret.value === 'secret') {
            setSecret(prevCounterSecrets => ({
                ...prevCounterSecrets,
                countSecrets: prevCounterSecrets.countSecrets + 1
            }));
        }
    }, [secret.value]) // now it depends on 'text value' not object
    // }, [secret]); // better to avoid objects as dependencies and use primitives if possible
    // 2 objects in javascript are equal if they reference exactly the same object

    const onChange = ({target}) => {
        setSecret(prevSecret => ({...prevSecret, value: target.value}))
    }

    return (
        <div>
            <input type="text" value={secret.value} onChange={onChange}/>
            <div>Number of secrets: {secret.countSecrets}</div>
        </div>
    );

}


export {CountInputChanges, CountSecrets}
