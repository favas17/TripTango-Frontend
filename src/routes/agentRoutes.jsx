import {Routes,Route } from "react-router-dom";
import AgentLayout from "../Layout/AgentLayout";
import AgentPackage from "../pages/agent-side/AgentPackage";
import AddPackage from "../pages/agent-side/AddPackage";
import { Provider } from "react-redux";
import store from "../redux/store";

function AgentRoutes (){

    return(
        <div className="flex-grow">
        <Provider store={store}>
        <Routes>
            <Route path="/" element={<AgentLayout/>} >

            <Route path="/agentPackages" element={<AgentPackage/>} />
            <Route path="/addPackage" element={<AddPackage/>} />

            </Route>
        </Routes>
        </Provider>
        </div>
    )
}

export default AgentRoutes;