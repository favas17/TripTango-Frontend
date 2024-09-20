import { useState } from "react";
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import bgimg from "../../assets/aa.png"
import axiosInstance from "../../instatnce/axiosInstance";
import { useNavigate } from "react-router-dom";
function UserLogin(){

    const navigate = useNavigate()
    const {register,handleSubmit, formState: {errors},} = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data)=>{
        try{
        const response = await axiosInstance.post('/user/login',{
            email:data.email,
            password:data.password
        });
        // checks teh login is sucuss and get the tocken
        if(response.status === 200){
            const {token} = response.data

            // store the token in local storage
            localStorage.setItem('authToken',token);
            navigate("/user/userHome")
        }else{
            setErrorMessage(response.data.message)
        }
    }catch(error){
        setErrorMessage("Internal server error")
        console.error("Login error:",error)
    }
    }
    return(
        <div className="bg-cover h-screen   " style={{backgroundImage: `url(${bgimg})`}}>
            <h1>User login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            
            <div>
             <input type="email" id="email" name="email" placeholder="Enter youre email"
             {...register("email",{required:true})}
             />
             {errors.email && <p>Please fill the space</p>}
            </div>

            <div>
                <input type="password" id="password" name="password" placeholder="Enter youre password"
                {...register("password",{required:true})}
                />
                {errors.password && <p>Please fill the password</p>}
            </div>

            <input type="submit" />

        {/* Display error message if login fails */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </form>

            <Link to={"/UserSign"}><button>Signup</button></Link>
            

        </div>
    )
}

export default UserLogin;