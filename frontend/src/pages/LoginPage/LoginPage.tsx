import React from 'react';
import { LoginForm } from '../../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <main className="LoginPage">
      <h1 className='LoginPage__title title'>LoginPage</h1>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
