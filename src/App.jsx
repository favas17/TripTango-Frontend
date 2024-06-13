import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserRoutes from "./routes/userRoutes"
import AdminRoutes from "./routes/adminRoutes"
import AgentRoutes from "./routes/agentRoutes"

function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/user/*" element={<UserRoutes/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>} />
      <Route path="/agent/*" element={<AgentRoutes/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
