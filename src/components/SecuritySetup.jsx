import React, { useState } from 'react';
import styled from 'styled-components';
import './SecuritySetup.scss'; // Import the CSS file

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

const SecuritySetup = () => {
  const [fingerprintSetupStatus, setFingerprintSetupStatus] = useState('initial');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [fingerprints, setFingerprints] = useState([]);

  const handleFingerprintCapture = () => {
    // Simulate fingerprint capture logic
    const isSuccessful = Math.random() > 0.5; // Replace with actual logic
    if (isSuccessful) {
      setSuccessMessage('Fingerprint captured successfully!');
      setFingerprintSetupStatus('success');
    } else {
      setError('Fingerprint capture failed. Please try again.');
    }
  };

  const handleAddFingerprint = () => {
    // Add fingerprint to the list
    setFingerprints([...fingerprints, 'Fingerprint ' + (fingerprints.length + 1)]);
    setFingerprintSetupStatus('capturing'); // Reset to capture another fingerprint
  };

  const handleSkip = () => {
    // Handle skipping fingerprint setup
  };

  return (
    <Container>
      {/* Special image component */}
      <img src={Image} alt="Special image" />
      {/* Progress indicator */}
      {/* Fingerprint capture instructions and visual guides */}

      {fingerprintSetupStatus === 'initial' && (
        <div>
          <h2>Security - Setup Fingerprint (Optional)</h2>
          <p>Enhance your account security with fingerprint recognition.</p>
          <p>To set up a fingerprint, please follow the on-screen instructions.</p>
          <button onClick={handleFingerprintCapture}>Start Setup</button>
          <button onClick={handleSkip}>Skip</button>
        </div>
      )}

      {fingerprintSetupStatus === 'capturing' && (
        <div>
          <h2>Place your finger on the sensor</h2>
          {/* Visual guides */}
          <button onClick={handleFingerprintCapture}>Capture Fingerprint</button>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </div>
      )}

      {fingerprintSetupStatus === 'success' && (
        <div>
          <h2>Fingerprint captured successfully!</h2>
          <p>Your fingerprint has been added for enhanced security.</p>
          <button onClick={() => setFingerprintSetupStatus('capturing')}>Add Another Fingerprint</button>
          <button>Continue</button>
          <ul>
            {fingerprints.map((fingerprint, index) => (
              <li key={index}>{fingerprint}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
    </Container>
  );
};

export default SecuritySetup;