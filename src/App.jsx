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
      <Route path="/userSign" element={<UserSignup/>} />
      <Route path="/adminLogin" element={<AdminLogin/>} />
      <Route path="/adminSignup" element={<AdminSignup/>} />
      <Route path="/userHome" element={<UserHome/>} />
      <Route path="/Packages" element={<PackagesPage/>} />
      <Route path="/package" element={<PlacesCard/>} />
      <Route path="/pkgInter" element={<PkgInterface/>} />
      <Route path="/oetailsPage" element={<DetailsPage/>} />
      <Route path="/otpPage" element={<OtpPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
