import * as React from "react";
import {Route, Routes} from "react-router-dom";
import Nav from "./pages/example/components/Nav";
import Home from "./pages/example/components/Home";
import PrivateRoute from "./react-routes/privateRoute";
import Dashboard from "./pages/example/components/Dashboard";
import Settings from "./pages/example/components/Settings";
import Login from "./pages/example/components/Login";
import {AuthRoute} from "./react-routes/authRoute";

function Pricing() {
    return null;
}

export default function App() {
    return (
        <div>
            <Nav />

            <Routes>
                <Route path="/" element={
                    <AuthRoute>
                        <Home />
                    </AuthRoute>
                } />
                <Route path="/pricing" element={
                    <AuthRoute>
                        <Pricing />
                    </AuthRoute>
                } />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <PrivateRoute>
                            <Settings />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={
                    <AuthRoute>
                        <Login />
                    </AuthRoute>
                } />
            </Routes>
        </div>
    );
}
