import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../instatnce/axiosInstance";

function Applications () {
   
    const [application,setApplication] = useState([]);

    useEffect(()=>{
        const fetchApplication = async ()=>{
            try{
            const response = await axiosInstance.get("/applications");
            setApplication(response.data)
            }
            catch(error){
                console.error('Failed to fecth applicatuion details',error)
            }
        }
        fetchApplication();
    },[])

    const handleAccept = async (acceptId)=>{
        try{
            console.log(acceptId,"frot")
        const response =await axiosInstance.put(`acceptAgent/${acceptId}`);
        if(response.status === 200){
            setApplication(application.filter(agent => agent._id !== acceptId))
        }
        }catch(error){
            console.error("Failed to accept",error)
        }
    }

    const handleDelete = async (deleteId) =>{
        try{
            const response = await axiosInstance.delete(`deleteAgent/${deleteId}`);
            if(response.status === 200){
                setApplication(application.filter(agent._id !== deleteId))
            }
        }catch(error){
            console.error("Failed to delete",error)
        }
    }




    return(

        <div className="w-full ">
            <table className="w-full">
                <thead>
                    <tr className="">
                    <th className="AField">Name</th>
                    <th className="AField">Agency name</th>
                    <th className="AField">Email</th>
                    <th className="AField">Phone</th>
                    <th className="AField">Address</th>
                    <th className="AField">Reject</th>
                    <th className="AField">Accept</th>
                    </tr>
                </thead>    

                <tbody>
                    {application.map((agent)=>(

                    
                        <tr key={agent._id}>
                        <td className="AField">{agent.name}</td>
                        <td className="AField">{agent.agencyName}</td>
                        <td className="AField">{agent.email}</td>
                        <td className="AField">{agent.phone}</td>
                        <td className="AField">{agent.address}</td>
                        <td className="AField"><button onClick={()=> handleDelete(agent._id)}>Reject</button></td>
                        <td className="AField"><button onClick={()=>handleAccept(agent._id)}>Accept</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Applications;