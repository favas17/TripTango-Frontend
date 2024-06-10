import { MdTravelExplore } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";

function AdminSidebar () {

    return(
        <div className="min-h-screen  flex flex-col justify-between py-9 ps-4 bg-[#5041BC]  text-white ">

            <div className="font-bold"><h1>Trip Tango</h1></div>
            {/* nav button */}
            <div className="nav-buttons">
            <MdTravelExplore /><button className="sideNav">Packages</button>
            </div>

            <div className="nav-buttons">
            <GrChatOption /><button className="sideNav">Messages</button>
            </div>

            <div className="nav-buttons">
            <IoMdAdd /><button className="sideNav">Add Packages</button>
            </div>

            <div className="nav-buttons">
            <MdOutlineBookmarkAdded /><button className="sideNav">Booked Packages</button>
            </div>
        </div>
    )
}

export default AdminSidebar;