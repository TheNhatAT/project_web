import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {AuthRoute} from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
<<<<<<< HEAD
import Manual from "./pages/auth/components/Manual";
import PostBoardingRoom from "./pages/auth/components/landlord/PostBoardingRoom";
import UpdateBoardingRoom from "./pages/auth/components/landlord/UpdateBoardingRoom";
=======
import Guide from "./pages/Guide";
import BoardingRoomDetail from "./pages/manage-boarding-house/components/BoardingRoomDetail";
import {PrivateRoute} from "./react-routes/privateRoute";

>>>>>>> 5ba95bbf980e24cfab39847af084c5e3ee785f3f
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
                    <PrivateRoute>
                        <Layout nav={true}>
                            <Guide/>
                        </Layout>
                    </PrivateRoute>
                } />
<<<<<<< HEAD
                <Route path="/post" element={
                    <AuthRoute>
                        <Layout>
                            <PostBoardingRoom/>
                        </Layout>
                    </AuthRoute>
                } />

                
=======
                <Route path="/boarding-room/detail/:id" element={
                    <PrivateRoute>
                        <Layout nav={true}>
                            <BoardingRoomDetail/>
                        </Layout>
                    </PrivateRoute>
                } />

>>>>>>> 5ba95bbf980e24cfab39847af084c5e3ee785f3f
            </Routes>
        </div>
    );
}
