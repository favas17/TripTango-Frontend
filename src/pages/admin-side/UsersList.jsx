import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../instatnce/axiosInstance";

function UsersList () {

    const [users,setUsers] = useState([]);
   
    useEffect(()=>{
        
    const fetchAgents = async ()=>{
        try{
            const response = await axiosInstance.get('/getUsers');
            setUsers(response.data);
        }catch(error){
            console.error(error)
        }
    }

    fetchAgents()

    },[])
    
    const handleDelete = async (deleteId)=>{
        try{
        const response = await axiosInstance.delete(`/deleteUser/${deleteId}`)
        if(response.status === 200){
            setUsers(users.filter(user => user._id !== deleteId))
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
                    <th className="AField">Email</th>
                    <th className="AField">Block</th>
                    <th className="AField">Remove</th>
                    </tr>
                </thead>    

                <tbody>

                    {users.map((user)=>(

                        <tr key={user._id}>
                        <td className="AField">{user.username}</td>
                        <td className="AField">{user.email}</td>
                        <td className="AField"><button>Block</button></td>
                        <td className="AField"><button onClick={()=> handleDelete(user._id)}>Remove</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default UsersList;