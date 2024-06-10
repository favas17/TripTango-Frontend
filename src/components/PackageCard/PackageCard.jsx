import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import photo from "../../assets/pak.png"


function PackageCard(){
    // hover:scale-105 duration-100
    return(
        <div className="flex flex-col ">
            <div>
                <img className="w-52 h-44 object-cover object-center rounded-lg" src={photo} alt="" />
            </div>
            <div className="flex items-center space-x-1">
            <CiCalendar />
                <h4> 8 Days</h4>
            </div>
            <div className="flex items-center space-x-10">
                <h1 className="font-bold">Switzerland</h1>
                <FaStar className="text-yellow-400" />
            </div>
            <div className="flex items-center space-x-1">
            <CiLocationOn />
                <p>location</p>
            </div>
            <div className="flex items-center">
            <h2 className="text-red-600 font-bold">1000$</h2>
            <h2 className="text-gray-400">1200$</h2>
            </div>
            <div className="">
                <p className="break-words">Details</p>
            </div>
            <button className="text-[0.9rem] w-24 h-7 mt-5 text-white rounded-md bg-red-500">Explore Now</button>

        </div>
    )
}

export default PackageCard