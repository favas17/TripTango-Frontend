import { useSelector,useDispatch } from "react-redux";
import { fetchPackageDetails } from "../../redux/packageSlice";
import { useEffect } from "react";
function AgentPackage () {

    const dispatch = useDispatch();
    const {packageDetails,loading,error} = useSelector((state)=>state.packages);

    useEffect(()=>{
        dispatch(fetchPackageDetails())
    },[dispatch])
    return(

        <div className="w-full ">
            <table className="w-full">
                <thead>
                    <tr className="">
                    <th className="AField">Package Name</th>
                    <th className="AField">Details</th>
                    <th className="AField">Price</th>
                    <th className="AField">Duration</th>
                    <th className="AField">Location</th>
                    <th className="AField">Edit</th>
                    <th className="AField">Delete</th>
                    </tr>
                </thead>    

                <tbody>
                    {packageDetails.map((pkg)=>(
                        <tr key={pkg._id} className="">
                        <td className="AField">{pkg.packageName}</td>
                        <td className="AField">{pkg.details}</td>
                        <td className="AField">{pkg.price}</td>
                        <td className="AField">{pkg.duration}</td>
                        <td className="AField">{pkg.location}</td>
                        <td className="AField">edit</td>
                        <td className="AField">delete</td>
                    </tr>
                    ))}
                
                </tbody>
            </table>
        </div>
    )
}


export default AgentPackage;