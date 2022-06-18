import * as React from "react";
import {useState} from "react";

export const authContext = React.createContext();

export default function useAuth() {
    const [authed, setAuthed] = useState(false);
    function login(user) {
        // handle login
        console.log('user: ', user);
        return new Promise((res) => {
            setAuthed(true);
            localStorage.setItem('auth', 'true');
            console.log('localStorage auth = ', localStorage.getItem('auth'))
            res();
        });
    }
    function logout(user) {
        //handle login
        console.log('user: ', user);
        return new Promise((res) => {
            setAuthed(false);
            localStorage.setItem('auth', 'false');
            console.log('localStorage auth = ', localStorage.getItem('auth'))
            res();
        });
    }
    return {
        authed,
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