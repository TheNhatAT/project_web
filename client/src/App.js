import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {AuthRoute} from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <AuthRoute>
                        <Layout>
                            <Login/>
                        </Layout>
                    </AuthRoute>
                } />
            </Routes>
        </div>
    );
}
