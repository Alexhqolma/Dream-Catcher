import React, { useState } from 'react';
import { CustomButton } from '../../components/UI/CustomButton';
import { routes } from '../../routes/routerConfig';
import { LoginForm } from '../../components/LoginForm';

const LoginPage: React.FC = () => {
  const { registration } = routes;
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  return (
    <main className="LoginPage container">
      <h1 className="title LoginPage__title">LoginPage</h1>
      {loginSuccess ? (
        <p className="success-message">Login successful!</p>
      ) : (
        <>
          {loginError && <p className="error-message">{loginError}</p>}
          <LoginForm />
        </>
      )}
      <p className="LoginPage__registrationLink">
        Don't have an account?&nbsp;&nbsp;&nbsp;
        <CustomButton to={registration.path} className="link">
          Sign up
        </CustomButton>
      </p>
    </main>
  );
};

export default LoginPage;
