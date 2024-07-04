import { Form,Formik,Field,ErrorMessage } from "formik"
import axiosInstance from "../../instatnce/axiosInstance";

function AgentForm () {

    const onSubmit = async (values)=>{
        try {
            const response = await axiosInstance.post('/agentSignup',values)
            console.log(response,"hyhy")
        } catch (error) {
            console.log(error)
        }

    }
    return(

        <div>
            <h1>Agent Application</h1>
        
            <Formik
            
                initialValues={{
                    name:"",
                    agencyName:"",
                    email:"",
                    phone:"",
                    address:"",
                }}
                onSubmit={onSubmit}
            >

                <Form>
                    <div>
                        <Field 
                            type="text"
                            name="name"
                            placeholder="Enter youre name"
                        />
                        <ErrorMessage
                        name="name"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    <div>
                        <Field 
                            type="text"
                            name="agencyName"
                            placeholder="Enter youre Agency name"
                        />
                        <ErrorMessage
                        name="agencyName"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    <div>
                        <Field 
                            type="email"
                            name="email"
                            placeholder="Enter youre email"
                        />
                        <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    <div>
                        <Field 
                            type="password"
                            name="password"
                            placeholder="Enter youre password"
                        />
                        <ErrorMessage
                        name="password"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    <div>
                        <Field 
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm youre password"
                        />
                        <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    <div>
                        <Field 
                            type="number"
                            name="phone"
                            placeholder="Enter youre contact"
                        />
                        <ErrorMessage
                        name="phone"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>


                    <div>
                        <Field 
                            type="text"
                            name="address"
                            placeholder="Enter youre address"
                        />
                        <ErrorMessage
                        name="address"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                        />
                    </div>


                    <button type="submit">Submit</button>
                </Form>
            
            </Formik>
        </div>
    )
}

export default AgentForm;