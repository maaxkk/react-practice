import React, {useContext} from 'react';
import MyButton from "../components/UI/button/MyButton.jsx";
import MyInput from "../components/UI/input/MyInput.jsx";
import {AuthContext} from "../context/index.js";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }



    return (
        <div>
            <h1>Page for login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder={'Input login'}/>
                <MyInput type="password" placeholder={'Input password'}/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;