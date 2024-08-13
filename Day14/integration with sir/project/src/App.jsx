import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Web/Home";
import Login from "./Pages/Web/Login";
import Register from "./Pages/Web/Register";
import Weblayout from "./layout/Weblayout";
import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AdminClaim from "./Pages/Admin/AdminClaim";
import NotFound from "./Pages/Web/NotFound";
import UserDashboard from "./Pages/User/UserDashboard";
import UserGetPolicy from "./Pages/User/UserGetPolicy";
import UserLayout from "./layout/UserLayout";
import UserFAQ from "./Pages/User/USerFAQ";



const App=()=>
{
    return(
        <>
        <BrowserRouter>
        <Routes>
          <Route element={<Weblayout/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<AdminLayout/>}>

            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/users" element={<AdminUsers/>}/>
            <Route path="/admin/claims" element={<AdminClaim/>}/>
          </Route>
          <Route element={<UserLayout/>}>

            <Route path="/user/dashboard" element={<UserDashboard/>}/>
            <Route path="/user/policy" element={<UserGetPolicy/>}/>
            <Route path="/user/faq" element={<UserFAQ/>}/>
          </Route>
          <Route path='*' element={<NotFound />} />
          
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;