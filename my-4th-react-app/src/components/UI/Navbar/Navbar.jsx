import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton.jsx";
import {AuthContext} from "../../../context/index.js";

const Navbar = () => {

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <div className={'navbar'}>
            <MyButton onClick={logout}>Exit</MyButton>
            <div className="navbar__links">
                <Link to="/about">about</Link>
                <Link to="/posts">posts</Link>
            </div>
        </div>
    );
};

export default Navbar;