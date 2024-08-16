import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Or your preferred HTTP library
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  border: ${props => props.error ? '1px solid red' : '1px solid #ccc'};
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const SuccessMsg = styled.span`
  color: green;
  font-size: 12px;
  margin-top: 5px;
`;

const VerificationForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Send OTP to email or phone number
    try {
      const response = await axios.post('/api/send-otp', { emailOrPhone });
      setIsLoading(false);
      // Handle successful OTP sending
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Verify OTP
    try {
      const response = await axios.post('/api/verify-otp', { emailOrPhone, otp });
      setIsLoading(false);
      setIsVerified(true);
      navigate('/login'); // Navigate to login page after successful verification
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <Container>
      <h2>Account Verification</h2>
      <label htmlFor="emailOrPhone">Enter your email or phone number:</label>
      <InputField type="text" id="emailOrPhone" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
      <Button onClick={handleSubmit}>Send OTP</Button>

      {error && <ErrorMsg>{error}</ErrorMsg>}

      {isLoading && <p>Loading...</p>}

      {isVerified && <p>Account verified successfully! You can now log in.</p>}

      {/* OTP input and verification form if needed */}
    </Container>
  );
};

export default VerificationForm;