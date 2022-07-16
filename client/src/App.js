import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import PostBoardingRoom from "./pages/manage-boarding-house/components/PostBoardingRoom";
import UpdateBoardingRoom from "./pages/manage-boarding-house/components/UpdateBoardingRoom";
import PostFindARoomate from "./pages/manage-boarding-house/components/PostFindRoomate";
import Guide from "./pages/Guide";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";
import { PrivateRoute } from "./react-routes/privateRoute";
import UploadedList from "./pages/example/components/UploadedList";
import DetailsRoom from "./pages/example/components/DetailsRoom";
import Infor from "./pages/user/components/Infor";
import AddUser from "./pages/user/components/UserInfor";
import Home from "./pages/manage-boarding-house/components/Home";
import BoardingRoomUser from "./pages/manage-boarding-house/components/BoardingRoomUser";
import Price from "./pages/example/components/Price";
import FindRoomates from "./pages/manage-boarding-house/components/FindRoomates";

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
                 <Route path="/boarding-room/add/user" element={
                        <Layout nav={true}>
                            <AddUser />
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
                    <PrivateRoute>
                        <Layout nav={true}>
                            <PostFindARoomate/>
                        </Layout>
                    </PrivateRoute>
                } />

                <Route path="/find-a-roomate" element={
                    <Layout nav={true}>
                        <FindRoomates/>
                    </Layout>
                } />
                <Route path="/boarding-room/detail/:id" element={
                    <Layout nav={true}>
                        <BoardingRoomDetail />
                    </Layout>
                } />
                <Route path="/boarding-room/users" element={
                    <Layout nav={true}>
                        <BoardingRoomUser />
                    </Layout>
                } />
                <Route path="/" element={
                    <Layout nav={true}>
                        <Home />
                    </Layout>
                } />
                <Route path="/find-roomate" element={
                    <Layout nav={true}>
                        <FindARoomate />
                    </Layout>
                } />

                {/* Danh sách phòng trọ của người thuê */}
                <Route path="/uploaded-list" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <UploadedList />
                        </Layout>
                    </PrivateRoute>
                } />

                {/* Phòng trọ đã thuê của người đi thuê */}
                <Route path="/details-room" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <DetailsRoom />
                        </Layout>
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    );
}

   