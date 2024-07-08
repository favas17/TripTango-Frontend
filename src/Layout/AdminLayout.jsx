import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar/AdminSidebar"

function AdminLayout (){
    
    return(
        <div className="flex w-full h-screen">
            <div className="w-1/6">
            <AdminSidebar/>
            </div>
            <div className="w-5/6 flex flex-col overflow-y-auto">
            <Outlet/>
            </div>
        </div>
    )
}
export default AdminLayout;