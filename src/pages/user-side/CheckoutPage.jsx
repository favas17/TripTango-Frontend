import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchPackageById } from "../../redux/packageSlice";
function CheckoutPage ({packages}){

    const dispatch = useDispatch();

    const {selectedPackage,loading,error} = useSelector((state)=> state.packages);
    const [formData, setFormData] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      const savedFormData = JSON.parse(localStorage.getItem('formData'));
      if (savedFormData) {
        setFormData(savedFormData);
        // then we dispatch feacth package by id action
        dispatch(fetchPackageById(savedFormData.packageId));
      }
    }, [dispatch]);
  

    useEffect(()=>{
        if(selectedPackage && formData.numPerson){
            const calculatedPrice = formData.numPerson * selectedPackage.price
            setTotalPrice(calculatedPrice);
        }
    },[selectedPackage,formData.numperson]);
    console.log(totalPrice,"total")
    const handlePayment = () => {
      // Implement payment logic here
    };
  
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return (
      <div>
        <h1>Checkout</h1>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Mobile: {formData.mobile}</p>
        <p>Number of Persons: {formData.numPerson}</p>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handlePayment}>Proceed to Payment</button>
      </div>
    );

}


export default CheckoutPage;