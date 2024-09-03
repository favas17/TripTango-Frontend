import {Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import UserLogin from "../pages/user-side/LoginPage"
import UserSignup from "../pages/user-side/SignupPage"
import UserHome from "../pages/user-side/UserHome"
import PackagesPage from "../pages/user-side/PackagesPage"
import DetailsPage from "../pages/user-side/DetailsPage"
import OtpPage from "../pages/user-side/OtpPage"
import UserLayout from "../Layout/userLayout"; 
import AgentForm from "../pages/agent-side/AgentForm";
import CheckoutPage from "../pages/user-side/CheckoutPage";

function UserRoutes (){

    return(
        <Provider store={store}>

        <Routes>
            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/signup" element={<UserSignup/>}/>
            <Route path="/otpPage" element={<OtpPage/>}/>
            <Route path="/agentForm" element={<AgentForm/>}/>

            <Route path="/" element={<UserLayout/>}>
                 <Route path="/userHome" element={<UserHome/>}/>
                 <Route path="/packagePage" element={<PackagesPage/>}/>
                 <Route path="/detailsPage/:packageId" element={<DetailsPage/>}/>
                 <Route path="/checkoutPage" element={<CheckoutPage/>}/>
            </Route>

        </Routes>
        </Provider>
    )
}

export default UserRoutes;