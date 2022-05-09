import fakeAuth from "../helpers/fakeAuth";
import {Navigate, Redirect, Route} from "react-router-dom";
import {AuthConsumer} from "../helpers/hooks/useAuth";
import * as React from "react";

const PrivateRoute = ({ children }) => {
    const {authed} = AuthConsumer();
    console.log(`authed 3 ${authed}`)
    return authed === true ? <div>{children}</div> : <Navigate to="/login" replace/>
}

export default PrivateRoute;