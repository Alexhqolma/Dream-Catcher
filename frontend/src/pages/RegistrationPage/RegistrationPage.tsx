import React, { useEffect } from "react";
import { RegistrationForm } from "../../components/registrationForm";
import { useAppDispatch } from "../../store/hooks";
import { postUser } from "../../store/sagas/sagaActions";

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