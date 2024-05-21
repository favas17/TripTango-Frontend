import {Formik,Form,Field,ErrorMessage} from "formik"
import { Yupval } from "../../utils/YupVal";
import { Link } from "react-router-dom";
function AdminSignup(){

    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <div className="flex">
            <h1>Admin signup</h1>
            <Formik
            initialValues={{
                username:"",
                email:"",
                password:"",
                confirm_password:"",
            }}
            validationSchema={Yupval}
            onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <Field type="text" name="username"/>
                        <ErrorMessage name="username" component="div"/>
                    </div>

                    <div>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>

                    <div>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div>
                        <Field type="password" name="confirm_password" />
                        <ErrorMessage name="confirm_password" component="div" />

                    </div>
                    <button type="submit">Signup</button>
                </Form>
            </Formik>

            <Link to={"/AdminLogin"}><button>Login</button></Link>
        </div>
    )
}

export default AdminSignup;