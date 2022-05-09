import * as React from "react";
import {useState} from "react";

export const authContext = React.createContext();

export default function useAuth() {
    const [authed, setAuthed] = useState(false);
    function login() {
        return new Promise((res) => {
            setAuthed(true);
            res();
        });
    }
    function logout() {
        return new Promise((res) => {
            setAuthed(false);
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

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function AuthConsumer() {
    return React.useContext(authContext);
}