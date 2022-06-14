import {Navigate} from "react-router-dom";
import useAuth from "../helpers/hooks/useAuth";
import * as React from "react";

const PrivateRoute = ({ children }) => {
    const authed = localStorage.getItem('auth');

    console.log(`authed in privateRoute ${authed}`)
    console.log(`authed in privateRoute - hook ${useAuth().authed}`)
    if (authed === 'true') {
        return <div>{children}</div>;
    }
    return authed === 'true' ? <div>{children}</div> : <Navigate to="/login" replace/>
}

export default PrivateRoute;