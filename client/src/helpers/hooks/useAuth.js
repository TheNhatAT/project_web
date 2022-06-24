import * as React from "react";
import {useState} from "react";
import jwt_decode from "jwt-decode";

export const authContext = React.createContext();

export default function useAuth() {
    // const [authed, setAuthed] = useState(false);
    function login(user) {
        // handle login
        return new Promise((res) => {
            // setAuthed(true);
            const id = jwt_decode(user.auth_token).data.id;
            const role = jwt_decode(user.auth_token).data.role;

            localStorage.setItem('userId', id);
            localStorage.setItem('userRole', role);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('auth_token', user.auth_token);
            res();
        });
    }
    function logout(user) {
        //handle login
        console.log('user: ', user);
        return new Promise((res) => {
            // setAuthed(false);
            localStorage.clear();
            res();
        });
    }
    return {
        // authed,
        logout,
        login
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();
    console.log('auth in provider: ', auth.authed);
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function AuthConsumer() {
    return React.useContext(authContext);
}