import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import PostBoardingRoom from "./pages/auth/components/landlord/PostBoardingRoom";
import UpdateBoardingRoom from "./pages/auth/components/landlord/UpdateBoardingRoom";
import Guide from "./pages/Guide";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";
import { PrivateRoute } from "./react-routes/privateRoute";
import Infor from "./pages/user/infor";
import Home from "./pages/example/components/Home";
import UploadedList from "./pages/example/components/UploadedList";
import DetailsRoom from "./pages/example/components/DetailsRoom";

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
                <Route path="/infor" element={
                    // <PrivateRoute>
                    <Layout nav={true}>
                        <Infor />
                    </Layout>
                    // </PrivateRoute>
                } />

                <Route path="/guide" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <Guide />
                        </Layout>
                    </PrivateRoute>
                } />
                <Route path="/post" element={
                    <AuthRoute>
                        <Layout>
                            <PostBoardingRoom />
                        </Layout>
                    </AuthRoute>
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
                <Route path="/uploaded-list" element={

                    <Layout nav={true}>
                        <UploadedList />
                    </Layout>

                } />
                <Route path="/details-room" element={

                    <Layout nav={true}>
                        <DetailsRoom />
                    </Layout>

                } />


            </Routes>
        </div>
    );
}
