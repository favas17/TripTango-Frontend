import * as Yup from "yup"

export const Validation = Yup.object({
    packageName: Yup.string().required("Please fill name"),
    location: Yup.string().required("please fill location"),
    price: Yup.number().required("Please enter price"),
    details: Yup.string().required("Please enter details"),
    duration: Yup.number().min(1,"Duration need atleast one day").required("Please fill the duration"),
    // days: Yup.array().of(
    //     Yup.object().shape({
    //         placeDetails: Yup.string().required("Please fill the deatils"),
    //         stays:Yup.string().required("Please fil the stay details"),
    //         foods: Yup.string().required("Please fill the foods"),
    //     })
    // ),
    // mapLocation: Yup.string().required("Map location is required"),
    category: Yup.string().required("Category is required"),
});