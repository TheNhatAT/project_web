import {Navigate, useLocation} from "react-router-dom";

export const AuthRoute = ({ children }) => {
    const location = useLocation();

    let redirectPagePath = location.pathname + location.search;
    redirectPagePath = redirectPagePath.replace('/login', '');

    if(redirectPagePath === '/' || redirectPagePath === '/login' || redirectPagePath === '/logout') redirectPagePath = '/dashboard';

    const authed = localStorage.getItem('auth');
    return (authed === null || authed === 'false') ? <div>{children}</div> : <Navigate to={redirectPagePath} replace/>
}