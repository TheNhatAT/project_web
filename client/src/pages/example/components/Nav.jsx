import * as React from "react";
import {Link} from "react-router-dom";
import {AuthConsumer} from "../../../helpers/hooks/useAuth";
import {useNavigate} from "react-router";

export default function Nav () {
    const { authed, logout}=AuthConsumer()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
            </ul>
            {authed && <button onClick={handleLogout}>Logout</button>}
        </nav>
    );
}