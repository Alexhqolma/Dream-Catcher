import React from 'react';
import { RegistrationForm } from "../../components/RegistrationForm";
import './RegistrationPage.scss';

const RegistrationPage: React.FC = () => {
  return (
    <main className="RegistrationPage">
      <h1 className='title'>Registration</h1>

      <section>
        <RegistrationForm />
      </section>
    </main>
  );
}

export default RegistrationPage;