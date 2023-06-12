import React from "react";
import { RegistrationForm } from "../../components/RegistrationForm";

const RegistrationPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1>RegistrationPage</h1>

        <RegistrationForm />
      </div>
    </>
  );
}

export default RegistrationPage;