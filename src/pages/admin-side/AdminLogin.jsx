import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
function AdminLogin(){

    const {register,handleSubmit, formState: {errors},} = useForm();

    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <div>
            <h1 className="text-blue-700">Admin Login</h1>
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

            </form>

            <Link to={"/AdminSignup"}><button>Signup</button></Link>
            

        </div>
    )
}

export default AdminLogin;