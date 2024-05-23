import UserLogin from "./pages/user-side/LoginPage"
import UserSignup from "./pages/user-side/SignupPage"
import AdminLogin from "./pages/admin-side/AdminLogin"
import AdminSignup from "./pages/admin-side/AdminSignup"
import UserHome from "./pages/user-side/UserHome"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserHome/>}/>
      <Route path="/UserSign" element={<UserSignup/>} />
      <Route path="/AdminLogin" element={<AdminLogin/>} />
      <Route path="/AdminSignup" element={<AdminSignup/>} />
      <Route path="/UserHome" element={<UserHome/>} />
      <Route path="/Footer" element={<Footer/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
