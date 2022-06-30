import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import PostBoardingRoom from "./pages/auth/components/landlord/PostBoardingRoom";
import UpdateBoardingRoom from "./pages/auth/components/landlord/UpdateBoardingRoom";
import PostFindARoomate from "./pages/auth/components/landlord/PostFindRoomate";
import Guide from "./pages/Guide";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";
import { PrivateRoute } from "./react-routes/privateRoute";
import Infor from "./pages/user/Infor";
import Home from "./pages/user/Home";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={
                        <Layout>
                            <Login />
                        </Layout>
                } />
                <Route path="/register" element={
                        <Layout>
                            <Register />
                        </Layout>
                } />
                <Route path="/user/information/:id" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <Infor />
                        </Layout>
                    </PrivateRoute>
                } />

                <Route path="/guide" element={
                        <Layout nav={true}>
                            <Guide />
                        </Layout>
                } />
                <Route path="/boarding-room/add" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <PostBoardingRoom />
                        </Layout>
                    </PrivateRoute>
                } />

                <Route path="/boarding-room/update/:id" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <UpdateBoardingRoom/>
                        </Layout>
                    </PrivateRoute>
                } />
                <Route path="/find-a-roomate/add" element={
                        <Layout nav={true}>
                            <PostFindARoomate/>
                        </Layout>
                } />
                <Route path="/boarding-room/detail/:id" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <BoardingRoomDetail />
                        </Layout>
                    </PrivateRoute>
                } />
                <Route path="/dashboard" element={
                        <Layout nav={true}>
                            <Home />
                        </Layout>
                } />
            </Routes>
        </div>
    );
}
