import AgentSidebar from "../../components/AgentSidebar/AgentSidebar";
// import AgentPackage from "./AgentPackage";
import AddPackage from "./AddPackage";

function AgentHome() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/6">
        <AgentSidebar />
      </div>
      <div className="w-5/6 flex flex-col overflow-y-auto">
        {/* <AgentPackage/> */}
        <AddPackage />
      </div>
    </div>
  );
}

export default AgentHome;