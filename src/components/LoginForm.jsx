import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Or your preferred HTTP library
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: 10px;
`;

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Login logic
    try {
      const response = await axios.post('/api/login', { emailOrPhone, password });
      setIsLoading(false);
      // Handle successful login (e.g., navigate to dashboard)
      navigate('/dashboard');
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message || 'Login failed');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputField type="text" placeholder="Email or Phone Number" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.templateValue)} /> {/* Corrected typo: templateValue -> target.value */}
        <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="forgot-password">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        {isLoading && <div>Loading...</div>}
        <Button type="submit">Login</Button>
      </LoginForm>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </Container>
  );
};

export default LoginForm;