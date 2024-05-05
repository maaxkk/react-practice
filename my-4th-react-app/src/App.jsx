import React, {useEffect, useState} from 'react'
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import Error from "./pages/Error.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/index.js";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem('auth'))  {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
