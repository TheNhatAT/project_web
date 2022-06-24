import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {AuthRoute} from "./react-routes/authRoute";
import Layout from "./layout/Layout";
import Login from "./pages/auth/components/Login";
import Register from "./pages/auth/components/Register";
import Manual from "./pages/auth/components/Manual";
import PostBoardingRoom from "./pages/auth/components/landlord/PostBoardingRoom";
import UpdateBoardingRoom from "./pages/auth/components/landlord/UpdateBoardingRoom";
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
                <Route path="/manual" element={
                    <AuthRoute>
                        <Layout>
                            <Manual/>
                        </Layout>
                    </AuthRoute>
                } />
                <Route path="/post" element={
                    <AuthRoute>
                        <Layout>
                            <PostBoardingRoom/>
                        </Layout>
                    </AuthRoute>
                } />

                
            </Routes>
        </div>
    );
}
