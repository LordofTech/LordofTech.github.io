import React from 'react';
import styled from 'styled-components';
import './AccountPendingVerification.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const AccountPendingVerification = () => {
  return (
    <Container>
      <h2>Account Pending Verification</h2>
      <Message>
        Your account is currently pending verification. Please check your email for a verification link.
      </Message>
    </Container>
  );
};

export default AccountPendingVerification;