import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./theme.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {AuthProvider} from "./helpers/hooks/useAuth";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <div className="yellow-border" />
        <div className="">
            <Router>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Router>
        </div>
    </React.StrictMode>
);