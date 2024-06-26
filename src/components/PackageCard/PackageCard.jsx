import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


function PackageCard({pkg,onClick}){
    
    return(
        <div className="flex flex-col " onClick={onClick}>
            <div>
                <img className="w-52 h-44 object-cover object-center rounded-lg" src={`http://localhost:8989/uploads/${pkg.images[0]}`} alt="" />
            </div>
            <div className="flex items-center space-x-1">
            <CiCalendar />
                <h4> {pkg.duration} </h4>
            </div>
            <div className="flex items-center space-x-10">
                <h1 className="font-bold">{pkg.packageName}</h1>
                <FaStar className="text-yellow-400" />
            </div>
            <div className="flex items-center space-x-1">
            <CiLocationOn />
                <p>{pkg.location}</p>
            </div>
            <div className="flex items-center">
            <h2 className="text-red-600 font-bold">{pkg.price}₹</h2>
            </div>
            <div className="">
                <p className="break-words">{pkg.details}</p>
            </div>
            <button className="text-[0.9rem] w-24 h-7 mt-5 text-white rounded-md bg-red-500">Explore Now</button>

        </div>
    )
}

export default PackageCard