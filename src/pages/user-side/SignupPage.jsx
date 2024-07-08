import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Yupval } from "../../utils/YupVal";
import { Link } from "react-router-dom";
import axiosInstance from "../../instatnce/axiosInstance";
import bgimg from "../../assets/a.png"
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const navigate = useNavigate();

  const [errors,setErrors] = useState(null)

  // handling submit
  const onSubmit = async (data,{setSubmitting}) => {

    try{
      // sending request to otp post
      const response = await axiosInstance.post("signup",data);
      console.log(response)
      // checking the response
      if(response.status === 201){
        navigate("/user/otpPage")
      }
    }catch(error){
      if(error.response){
        setErrors(error.response.data.message)
      }else{
        setErrors("Network error please try again later")
      }
    }finally{
      setSubmitting(false)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover" style={{backgroundImage: `url(${bgimg})`}}>
      <div className="w-full max-w-md p-8 rounded-lg bg-gray-800 bg-opacity-20 shadow-lg">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={Yupval}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="mb-4 ">
              <Field
                type="text"
                name="username"
                placeholder="Enter username"
                className="inputs"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                className="inputs "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="inputs "
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-6">
              <Field
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                className="inputs 00"
              />
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            {errors && <div className="my-4 w-full font-bold flex justify-center text-red-500">{errors}</div>}

            <div className="flex justify-evenly">
              <button
                type="submit"
                className="px-4 py-2 text-gray-200 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"              >
                Sign Up
              </button>
              <Link to={"/"}>
                <button className="px-4 py-2 text-gray-200 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Login
                </button>
              </Link>
            </div>
          </Form>
        </Formik>

        
      </div>
    </div>
  );
}

export default UserSignup;