import React, { useState } from 'react';
import './Form.css'; // Import CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    ieeeId: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here
    // and submit the form data to your backend or perform any necessary actions
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      name: '',
      ieeeId: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  return (
    <div className="form-container">
      <div className='formm'>
        <h1>Registration Form</h1>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="ieeeId">IEEE ID:</label>
        <input
          type="text"
          id="ieeeId"
          name="ieeeId"
          value={formData.ieeeId}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
