import React from 'react';
import { LoginForm } from '../../components/LoginForm';

import './LoginPage.scss';
import { Button } from '../../components/Button';
import { routes } from '../../routes/routerConfig';

const LoginPage: React.FC = () => {
  const { registration } = routes;

  return (
    <main className="LoginPage container">
      <h1 className='title'>LoginPage</h1>
      <LoginForm />
      <p className='LoginPage__registrationLink'>
        Don't have an account? 
        <Button to={registration.path} className="link">
          Sign up
        </Button>
      </p>
    </main>
  );
}

export default LoginPage;
