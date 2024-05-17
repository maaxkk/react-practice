import {Link} from "react-router-dom";
import {useState} from "react";

const DefaultProfile = () => {
    const [username, setUserName] = useState('')
    return (
        <>
            <p>Oh, nothing to see here!</p>
            <p>Please enter your nickname to redirect you!</p>
            <input onChange={e => setUserName(e.target.value)}
                   value={username} type="text"/>
            <Link to={`/profile/${username}`}>
                <button>Redirect</button>
            </Link>
        </>
    )
};

export default DefaultProfile;
