import React, { useState } from 'react';
import styled from 'styled-components';
import './CreateAccountForm.scss'; // Import the CreateAccountForm styles

const Container = styled.div`
  width: 709px;
  height: 864px;
  padding: 36px 64px 36px 64px;
  gap: 56px;
  opacity: 1; // Adjust opacity as needed
`;

const InputField = styled.input`
  // Add your desired styles for input fields here
`;

const Label = styled.label`
  // Add your desired styles for labels here
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
`;

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Basic validation
    const errorMessages = {
      firstName: /^[a-zA-Z]+$/.test(value) ? '' : 'First name must contain only letters',
      lastName: /^[a-zA-Z]+$/.test(value) ? '' : 'Last name must contain only letters',
      phoneNumber: /^\+234\d{10}$/.test(value) ? '' : 'Invalid phone number format',
      email: /^\S+@\S+\.\S+$/.test(value) ? '' : 'Invalid email format',
      age: isNaN(value) || value < 18 ? 'Age must be a number greater than or equal to 18' : '',
      idNumber: /^\d+$/.test(value) ? '' : 'ID number must contain only numbers',
      createPassword: value.length < 8 ? 'Password must be at least 8 characters' : '',
      confirmPassword: value !== formData.createPassword ? 'Passwords do not match' : '',
      // Add more validation rules as needed
    };
    setErrors({ ...errors, [name]: errorMessages[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    // Handle form submission logic
  };

  return (
    <Container>
      {/* Special image component */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="label">First Name*</label>
        <InputField className="input-field" type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} required />
        {errors.firstName && <ErrorMsg className="error-msg">{errors.firstName}</ErrorMsg>}
        <label htmlFor="lastName" className="label">Last Name*</label>
        <InputField className="input-field" type="text" name="lastName" placeholder="Enter last name" onChange={handleChange} required />
        {errors.lastName && <ErrorMsg className="error-msg">{errors.lastName}</ErrorMsg>}
        <label htmlFor="phoneNumber" className="label">Phone Number*</label>
        <InputField className="input-field" type="tel" name="phoneNumber" placeholder="Enter phone number" onChange={handleChange} required />
        {errors.phoneNumber && <ErrorMsg className="error-msg">{errors.phoneNumber}</ErrorMsg>}
        {/* ... other form elements */}
        <button type="submit">Continue</button>
      </form>
    </Container>
  );
};

export default CreateAccountForm;