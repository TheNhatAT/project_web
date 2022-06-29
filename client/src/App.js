import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import Guide from "./pages/Guide";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";
import { PrivateRoute } from "./react-routes/privateRoute";
import Home from "./pages/example/components/Home";
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={
                    <AuthRoute>
                        <Layout>
                            <Login />
                        </Layout>
                    </AuthRoute>
                } />
                <Route path="/register" element={
                    <AuthRoute>
                        <Layout>
                            <Register />
                        </Layout>
                    </AuthRoute>
                } />
                <Route path="/guide" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <Guide />
                        </Layout>
                    </PrivateRoute>
                } />
                <Route path="/boarding-room/detail/:id" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <BoardingRoomDetail />
                        </Layout>
                    </PrivateRoute>
                } />
                <Route path="/home" element={

                    <Layout nav={true}>
                        <Home />
                    </Layout>

                } />


            </Routes>
        </div>
    );
}
