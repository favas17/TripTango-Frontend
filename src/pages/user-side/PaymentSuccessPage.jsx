import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import {useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const orderDetails = JSON.parse(localStorage.getItem('orderDetails')) || {};
  const { orderId, totalPrice } = orderDetails;


  const handleBackToHome = () => {
    navigate('/user/userHome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="bg-indigo-600 text-white p-8 md:w-1/3">
          <h1 className="text-3xl font-bold mb-6">Payment Successful!</h1>
          <p className="mb-4">Thank you for your purchase. Your order has been processed successfully.</p>
          <div className="mt-auto">
            <p className="text-xl font-semibold mb-2">Total Price</p>
            <p className="text-4xl font-bold">${totalPrice ? totalPrice.toFixed(2) : '0.00'}</p>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <div className="text-center mb-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Order ID</label>
              <p className="text-lg font-semibold text-gray-900">{orderId || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Amount</label>
              <p className="text-lg font-semibold text-gray-900">${totalPrice ? totalPrice.toFixed(2) : '0.00'}</p>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={handleBackToHome}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;