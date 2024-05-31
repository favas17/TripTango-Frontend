import React ,{useState}from "react";
import { useForm } from "react-hook-form";
function OtpPage(){

    const {register,handleSubmit,formState:{errors},} = useForm()


    const onSubmit = (data)=>{
        console.log(data)
    }

    return(
        <div className="w-screen h-screen bg-green-400">
        <div className="w-full h-full flex  justify-center items-center ">
            <div className="h-3/5 w-2/5  space-y-8  border-2 rounded-lg">
            
            <form  onSubmit={handleSubmit(onSubmit)} className="h-full w-full flex flex-col justify-evenly items-center">
            <h1 className="font-bold text-[1.2rem]">OTP Verification</h1>
            <input className="w-full outline-none text-center bg-inherit placeholder-black" type="text" name="OTP" placeholder="Enter Youre OTP"
                {...register("OTP",{required:true})}
            />
            {errors.OTP && <p className="text-red-600">Please enter you're OTP</p>}

            <button type="submit" >Submit</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default OtpPage;