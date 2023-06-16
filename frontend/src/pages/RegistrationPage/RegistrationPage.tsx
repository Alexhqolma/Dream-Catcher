import React from 'react';
import { RegistrationForm } from "../../components/RegistrationForm";

const RegistrationPage: React.FC = () => {
  return (
    <main className="RegistrationPage">
      <h1>RegistrationPage</h1>

      <section>
        <RegistrationForm />
      </section>
    </main>
  );
}

export default RegistrationPage;