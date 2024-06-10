import places from "../../assets/pak.png"
import { CiLocationOn } from "react-icons/ci";


function PlacesCard(){

    return(
        <div>
            <div className="w-40 h-full space-y-2">
                <img className="w-40 rounded-md" src={places} alt="" />
                <div className="flex items-center gap-x-2">
                <CiLocationOn />
                <h1 className="font-bold">Place</h1>
                </div>
                <p>Details</p>
                <p>16 packages</p>
            </div>
        </div>
    )
}
export default PlacesCard;