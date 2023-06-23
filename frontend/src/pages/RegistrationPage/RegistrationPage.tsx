import React from 'react';
import './RegistrationPage.scss';
import { RegistrationForm } from '../../components/registrationForm';

const RegistrationPage: React.FC = () => {
  return (
    <main className="RegistrationPage container">
      <h1 className='title'>Registration</h1>

      <section>
        <RegistrationForm />
      </section>
    </main>
  );
}

export default RegistrationPage;