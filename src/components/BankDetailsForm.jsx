import React, { useState } from 'react';
import styled from 'styled-components';
import './BankDetailsForm.scss';
 // Import the image


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

const BankDetailsForm = () => {
  const [formData, setFormData] = useState({
    hasSmartphone: '',
    hasBankAccount: '',
    bankName: '',
    accountNumber: '',
    voterCardNumber: '',
    guarantorName: '',
    guarantorPhoneNumber: '',
    guarantorRelationship: '',
    guarantorAddress: '',
    guarantorIDType: '',
    guarantorIDNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Basic validation
    const errorMessages = {
      // Add validation rules for bank details fields
    };
    setErrors({ ...errors, [name]: errorMessages[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    // Handle form submission logic
  };

  const bankNames = [
    'Bank A',
    'Bank B',
    'Bank C',
    // Add more bank names as needed
  ];

  return (
    <Container>
      {/* Special image component */}
      <img src={Image} alt="Special image" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Do you have a smartphone?</label>
          <input type="radio" name="hasSmartphone" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="hasSmartphone" value="no" onChange={handleChange} /> No
        </div>
        <div>
          <label>Do you have a bank account?</label>
          <input type="radio" name="hasBankAccount" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="hasBankAccount" value="no" onChange={handleChange} /> No
        </div>

        {formData.hasBankAccount === 'yes' && (
          <div>
            <label htmlFor="bankName">Bank Name*</label>
            <select name="bankName" id="bankName" onChange={handleChange}>
              {bankNames.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
            {errors.bankName && <ErrorMsg>{errors.bankName}</ErrorMsg>}

            <label htmlFor="accountNumber">Account Number*</label>
            <InputField type="text" name="accountNumber" placeholder="Enter account number" onChange={handleChange} required />
            {errors.accountNumber && <ErrorMsg>{errors.accountNumber}</ErrorMsg>}

            <label htmlFor="voterCardNumber">Voter's Card Number*</label>
            <InputField type="text" name="voterCardNumber" placeholder="Enter voter's card number" onChange={handleChange} required />
            {errors.voterCardNumber && <ErrorMsg>{errors.voterCardNumber}</ErrorMsg>}

            <label htmlFor="guarantorName">Guarantor's Name*</label>
            <InputField type="text" name="guarantorName" placeholder="Enter guarantor's name" onChange={handleChange} required />
            {errors.guarantorName && <ErrorMsg>{errors.guarantorName}</ErrorMsg>}

            <label htmlFor="guarantorPhoneNumber">Guarantor's Phone Number*</label>
            <InputField type="tel" name="guarantorPhoneNumber" placeholder="Enter guarantor's phone number" onChange={handleChange} required />
            {errors.guarantorPhoneNumber && <ErrorMsg>{errors.guarantorPhoneNumber}</ErrorMsg>}

            <label htmlFor="guarantorRelationship">Guarantor's Relationship*</label>
            <InputField type="text" name="guarantorRelationship" placeholder="Enter guarantor's relationship" onChange={handleChange} required />
            {errors.guarantorRelationship && <ErrorMsg>{errors.guarantorRelationship}</ErrorMsg>}

            <label htmlFor="guarantorAddress">Guarantor's Address*</label>
            <InputField type="text" name="guarantorAddress" placeholder="Enter guarantor's address" onChange={handleChange} required />
            {errors.guarantorAddress && <ErrorMsg>{errors.guarantorAddress}</ErrorMsg>}

            <label htmlFor="guarantorIDType">Guarantor's ID Type*</label>
            <InputField type="text" name="guarantorIDType" placeholder="Enter guarantor's ID type" onChange={handleChange} required />
            {errors.guarantorIDType && <ErrorMsg>{errors.guarantorIDType}</ErrorMsg>}

            <label htmlFor="guarantorIDNumber">Guarantor's ID Number*</label>
            <InputField type="text" name="guarantorIDNumber" placeholder="Enter guarantor's ID number" onChange={handleChange} required />
            {errors.guarantorIDNumber && <ErrorMsg>{errors.guarantorIDNumber}</ErrorMsg>}
          </div>
        )}

        <button type="submit">Continue</button>
      </form>
    </Container>
  );
};

export default BankDetailsForm;