import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageById } from "../../redux/packageSlice";
import axiosInstance from "../../instatnce/axiosInstance";

function CheckoutPage({ packages }) {
  const dispatch = useDispatch();
  const { selectedPackage, loading, error } = useSelector((state) => state.packages);
  const [formData, setFormData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
      dispatch(fetchPackageById(savedFormData.packageId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (selectedPackage && formData.numPerson) {
      const calculatedPrice = formData.numPerson * selectedPackage.price;
      setTotalPrice(calculatedPrice);
    }
  }, [selectedPackage, formData.numPerson]);


  const handlePayment = async () => {
    try {
      // Step 1: Create an order on your server
      const orderResponse = await axiosInstance.post("/createOrder", {
        amount: totalPrice * 100, // Razorpay expects amount in paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      const options = {
        key: "rzp_test_GxkKU3BnKyKe6Z", // Your Razorpay key
        amount: totalPrice * 100,
        currency: "INR",
        name: "TripTango",
        description: "Package Booking",
        order_id: orderResponse.data.orderId,
        handler: async function (response) {
          // Step 2: Send the payment response to the backend for verification
          try {
            await axiosInstance.post("/verifyPayment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderDetails: {
                userId: formData.userId, // Assuming you have the userId in formData
                packageId: selectedPackage._id,
                totalPrice: totalPrice,
              },
            });
            alert("Payment successful and verified!");
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#4F46E5",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };



  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="bg-indigo-600 text-white p-8 md:w-1/3">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <p className="mb-4">Complete your purchase and get ready for an amazing experience!</p>
          <div className="mt-auto">
            <p className="text-xl font-semibold mb-2">Total Price</p>
            <p className="text-4xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <p className="text-lg font-semibold text-gray-900">{formData.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-lg font-semibold text-gray-900">{formData.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
              <p className="text-lg font-semibold text-gray-900">{formData.mobile}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Persons</label>
              <p className="text-lg font-semibold text-gray-900">{formData.numPerson}</p>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={handlePayment}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;