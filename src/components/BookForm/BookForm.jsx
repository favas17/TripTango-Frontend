import React, { useState } from 'react';
import Button from "../Button/ClickButton";
import { useNavigate } from 'react-router-dom';
function BookForm({ packageId, packagePrice }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    numPerson: 1,
    msg: '',
    packageId: packageId,
  });
console.log(formData,"data")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    
    navigate("/user/checkoutPage")
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full justify-evenly items-center md:py-6 p-2 space-y-2 md:space-y-4">
      <input
        className="filtering w-full p-2 border rounded-md"
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="filtering w-full p-2 border rounded-md"
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        className="filtering w-full p-2 border rounded-md"
        type="number"
        name="mobile"
        id="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        required
      />
      <input
        className="filtering w-full p-2 border rounded-md"
        type="date"
        name="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <input
        className="filtering w-full p-2 border rounded-md"
        type="number"
        name="numPerson"
        id="numPerson"
        value={formData.numPerson}
        onChange={handleChange}
        min="1"
        placeholder="Number of persons"
        required
      />
      <textarea
        className="filtering w-full p-2 border rounded-md"
        name="msg"
        id="msg"
        value={formData.msg}
        onChange={handleChange}
        placeholder="Message (Optional)"
      />
      <Button
        className="w-24 h-10 border-none rounded-md text-white bg-customRed"
        label="Check Availability"
        type="button"
        // Add check availability logic if needed
      />
      <Button
        className="w-24 h-10 border-none rounded-md text-white bg-customRed"
        label="Book Now"
        type="submit"
      />
    </form>
  );
}

export default BookForm;
