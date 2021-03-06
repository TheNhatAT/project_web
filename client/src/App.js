import * as React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import PostBoardingRoom from "./pages/manage-boarding-house/components/PostBoardingRoom";
import UpdateBoardingRoom from "./pages/manage-boarding-house/components/UpdateBoardingRoom";
import Guide from "./pages/Guide";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";
import {PrivateRoute} from "./react-routes/privateRoute";
import UploadedList from "./pages/manage-boarding-house/components/UploadedList";
import DetailsRoom from "./pages/manage-boarding-house/components/DetailsRoom";
import Infor from "./pages/user/components/Infor";
import UpdateInfor from "./pages/manage-boarding-house/components/UpdateUserInfor";
import Home from "./pages/manage-boarding-house/components/Home";
import BoardingRoomUser from "./pages/manage-boarding-house/components/BoardingRoomUser";
import AddUserToBoardingRoom from "./pages/manage-boarding-house/components/AddUserToRoom";
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
                <Route path="/user/update-information/:id" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <UpdateInfor />
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
                <Route path="/boarding-room/:id/add-user" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <AddUserToBoardingRoom/>
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
                        <FindRoomates />
                    </Layout>
                } />

                {/* Danh s??ch ph??ng tr??? c???a ng?????i thu?? */}
                <Route path="/uploaded-list" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <UploadedList />
                        </Layout>
                    </PrivateRoute>
                } />

                {/* Ph??ng tr??? ???? thu?? c???a ng?????i ??i thu?? */}
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

   