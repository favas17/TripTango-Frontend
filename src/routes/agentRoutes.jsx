import {Routes,Route } from "react-router-dom";
import AgentHome from "../pages/agent-side/AgentHome"

function AgentRoutes (){

    return(
        <Routes>
            <Route path="/agentHome" element={<AgentHome/>}/>
        </Routes>
    )
}

export default AgentRoutes;