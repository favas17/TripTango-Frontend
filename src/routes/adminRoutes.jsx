import {Routes,Route } from "react-router-dom";
import AdminLogin from "../pages/admin-side/AdminLogin"
import AdminSignup from "../pages/admin-side/AdminSignup"
import AdminLayout from "../Layout/AdminLayout";
import Applications from "../pages/admin-side/Applications";

function AdminRoutes () {

    return(
        <Routes>
            <Route path="/login" element={<AdminLogin/>}/>
            <Route path="/signup" element={<AdminSignup/>}/>

            <Route path="/" element={<AdminLayout/>}>
                <Route path="/applications" element={<Applications/>}/>
            </Route>
        </Routes>
    )
}

export default AdminRoutes;