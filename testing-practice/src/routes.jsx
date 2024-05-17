import App from "./App.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import Profile from "./components/pages/Profile.jsx";
import React from "react";
import {createBrowserRouter} from 'react-router-dom';
import DefaultProfile from "./components/pages/DefaultProfile.jsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: 'profile/:name',
        element: <Profile/>,
    },
    {
        path: 'profile/',
        element: <DefaultProfile/>,
    }
]);