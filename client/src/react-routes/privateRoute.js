import {Navigate} from "react-router-dom";
import * as React from "react";

export const PrivateRoute = ({ children }) => {
    const authed = localStorage.getItem('auth');
    return (authed === 'true') ? <div>{children}</div> : <Navigate to={'/login'} replace/>
}

