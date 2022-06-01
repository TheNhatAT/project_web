import {useNavigate} from "react-router-dom";
import {AuthConsumer} from "../../../helpers/hooks/useAuth";
import * as React from "react";

export default function Login () {
    const navigate = useNavigate();
    const {login} = AuthConsumer()

    const handleLogin = () => {
        login().then(() => {
            navigate("/dashboard");
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}