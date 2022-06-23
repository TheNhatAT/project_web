import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {AuthRoute} from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import Manual from "./pages/auth/components/Manual";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={
                    <AuthRoute>
                        <Layout>
                            <Login/>
                        </Layout>
                    </AuthRoute>
                } />
                <Route path="/register" element={
                    <AuthRoute>
                        <Layout>
                            <Register/>
                        </Layout>
                    </AuthRoute>
                } />
                <Route path="/guide" element={
                    <AuthRoute>
                        <Layout nav={true}>
                            <Manual/>
                        </Layout>
                    </AuthRoute>
                } />
                <Route path="/boarding-room/detail" element={
                    <AuthRoute>
                        <Layout nav={true}>
                            <BoardingRoomDetail/>
                        </Layout>
                    </AuthRoute>
                } />

            </Routes>
        </div>
    );
}
