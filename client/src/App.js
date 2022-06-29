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
import Infor from "./pages/user/infor";
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
                <Route path="/boarding-room" element={
                    <PrivateRoute>
                        <Layout>
                            <PostBoardingRoom />
                        </Layout>
                    </PrivateRoute>
                } />

<<<<<<< HEAD
                <Route path="/boarding-room/update/:id" element={
                    <PrivateRoute>
                        <Layout>
                            <UpdateBoardingRoom/>
                        </Layout>
                    </PrivateRoute>
                } />
                <Route path="/find-a-roomate" element={
                    <AuthRoute>
                        <Layout>
                            <PostFindARoomate/>
                        </Layout>
                    </AuthRoute>
                } />
=======

>>>>>>> 1f9cc08b66da0b8591957011f6b6fcba80dbd8d2
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
