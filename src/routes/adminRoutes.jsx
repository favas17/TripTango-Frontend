import {Routes,Route } from "react-router-dom";
import AdminLogin from "../pages/admin-side/AdminLogin"
import AdminSignup from "../pages/admin-side/AdminSignup"

function AdminRoutes () {

    return(
        <Routes>
            <Route path="/login" element={<AdminLogin/>}/>
            <Route path="/signup" element={<AdminSignup/>}/>
        </Routes>
    )
}

export default AdminRoutes;