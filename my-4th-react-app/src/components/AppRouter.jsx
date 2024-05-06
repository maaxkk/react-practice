import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts.jsx";
import {privateRoutes, publicRoutes} from "../router/index.js";
import Login from "../pages/Login.jsx";
import {AuthContext} from "../context/index.js";
import Loader from "./UI/Loader/Loader.jsx";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }
    return (
        <>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route element={<route.element/>} path={route.path} exact={route.exact}/>
                    )}
                    <Route path={'*'} element={<Posts/>}/>
                </Routes>
                : <Routes>
                    {publicRoutes.map(route =>
                        <Route element={<route.element/>} path={route.path} exact={route.exact}/>
                    )}
                    <Route path={'*'} element={<Login/>}/>
                </Routes>
            }
        </>
    );
};

export default AppRouter;