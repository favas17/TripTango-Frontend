import * as Yup from "yup"

export const Yupval = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("password is required"),
    confirm_password: Yup.string().oneOf([Yup.ref("password"),null],"password must place").required("confirm password is required"),
})


// .matches(
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8, }$/,
//     "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
// ),