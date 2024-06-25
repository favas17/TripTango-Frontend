import { Outlet } from "react-router-dom";
import AgentSidebar from "../components/AgentSidebar/AgentSidebar";

function AgentLayout () {

    return(
        <div className="flex w-full h-screen">
            <div className="w-1/6">
            <AgentSidebar/>
            </div>
            <div className="w-5/6 flex flex-col overflow-y-auto">
            <Outlet/>
            </div>
        </div>
    )
}

export default AgentLayout;