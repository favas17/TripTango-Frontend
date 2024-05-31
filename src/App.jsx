import UserLogin from "./pages/user-side/LoginPage"
import UserSignup from "./pages/user-side/SignupPage"
import AdminLogin from "./pages/admin-side/AdminLogin"
import AdminSignup from "./pages/admin-side/AdminSignup"
import UserHome from "./pages/user-side/UserHome"
import PackagesPage from "./pages/user-side/PackagesPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PlacesCard from "./components/PlacesCard"
import PkgInterface from "./components/PkgInterface"
import DetailsPage from "./pages/user-side/DetailsPage"
import OtpPage from "./pages/user-side/OtpPage"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserHome/>}/>
      <Route path="/UserSign" element={<UserSignup/>} />
      <Route path="/AdminLogin" element={<AdminLogin/>} />
      <Route path="/AdminSignup" element={<AdminSignup/>} />
      <Route path="/UserHome" element={<UserHome/>} />
      <Route path="/Packages" element={<PackagesPage/>} />
      <Route path="/package" element={<PlacesCard/>} />
      <Route path="/PkgInter" element={<PkgInterface/>} />
      <Route path="/DetailsPage" element={<DetailsPage/>} />
      <Route path="/OtpPage" element={<OtpPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
