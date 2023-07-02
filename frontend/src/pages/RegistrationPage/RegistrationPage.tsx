import React from 'react';

import './RegistrationPage.scss';
import { RegistrationForm } from '../../components/RegistrationForm';

const RegistrationPage: React.FC = () => {
  return (
    <main className="RegistrationPage container">
      <h1 className='title'>Registration</h1>

      
      <section>
        <RegistrationForm 
          startTabIndex={7}
        />
      </section>
    </main>
  );
}

export default RegistrationPage;
