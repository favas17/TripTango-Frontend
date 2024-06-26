import {Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import UserLogin from "../pages/user-side/LoginPage"
import UserSignup from "../pages/user-side/SignupPage"
import UserHome from "../pages/user-side/UserHome"
import PackagesPage from "../pages/user-side/PackagesPage"
import DetailsPage from "../pages/user-side/DetailsPage"
import OtpPage from "../pages/user-side/OtpPage"

function UserRoutes (){

    return(
        <Provider store={store}>
        <Routes>

            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/signup" element={<UserSignup/>}/>
            <Route path="/userHome" element={<UserHome/>}/>
            <Route path="/packagePage" element={<PackagesPage/>}/>
            <Route path="/detailsPage/:packageId" element={<DetailsPage/>}/>
            <Route path="/otpPage" element={<OtpPage/>}/>

        </Routes>
        </Provider>
    )
}

export default UserRoutes;