import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../instatnce/axiosInstance";

function AgentList () {

    const [agents,setAgents] = useState([]);
   
    useEffect(()=>{
        
    const fetchAgents = async ()=>{
        try{
            const response = await axiosInstance.get('/getAgents');
            setAgents(response.data);
        }catch(error){
            console.error(error)
        }
    }

    fetchAgents()

    },[])
    
    const handleDelete = async (deleteId)=>{
        try{
        const response = await axiosInstance.delete(`/deleteAgent/${deleteId}`)
        if(response.status === 200){
            setAgents(agents.filter(agent => agent._id !== deleteId))
        }

        }catch(error){
            console.error("Failde to delete",error)
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
                    <th className="AField">Block</th>
                    <th className="AField">Remove</th>
                    </tr>
                </thead>    

                <tbody>

                    {agents.map((agent)=>(

                        <tr key={agent._id}>
                        <td className="AField">{agent.name}</td>
                        <td className="AField">{agent.agencyName}</td>
                        <td className="AField">{agent.email}</td>
                        <td className="AField">{agent.phone}</td>
                        <td className="AField">{agent.address}</td>
                        <td className="AField"><button>Block</button></td>
                        <td className="AField"><button onClick={()=> handleDelete(agent._id)}>Remove</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default AgentList;