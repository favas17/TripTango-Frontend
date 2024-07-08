
import { MdTravelExplore } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";

function AdminSidebar () {

    return(
        <div className="min-h-screen  flex flex-col justify-between py-9 ps-4 bg-[#5041BC]  text-white ">

            <div className="font-bold"><h1>Trip Tango</h1></div>
            {/* nav button */}
            <Link to={"applications"}>
            <div className="nav-buttons">
            <MdTravelExplore /><button className="sideNav">Applications</button>
            </div>
            </Link>

            <div className="nav-buttons">
            <GrChatOption /><button className="sideNav">Agents</button>
            </div>
            
            <Link to={"/agent/addPackage"}>
            <div className="nav-buttons">
            <IoMdAdd /><button className="sideNav">Users</button>
            </div>
            </Link>

        </div>
    )
}

export default AdminSidebar;