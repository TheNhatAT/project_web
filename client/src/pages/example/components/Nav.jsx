import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthConsumer } from "../../../helpers/hooks/useAuth";

export default function Nav() {
    const { logout } = AuthConsumer()
    const authed = localStorage.getItem('auth');
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