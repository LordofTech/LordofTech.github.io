import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccountForm from './components/CreateAccountForm';
import BankDetailsForm from './components/BankDetailsForm';
import SecuritySetup from './components/SecuritySetup';
import FarmRegistrationForm from './components/FarmRegistrationForm';
import VerificationForm from './components/VerificationForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccountForm />} />
        <Route path="/bank-details" element={<BankDetailsForm />} />
        <Route path="/security-setup" element={<SecuritySetup />} />
        <Route path="/farmer-registration" element={<FarmerRegistrationForm />} />
        <Route path="/verification" element={<VerificationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;