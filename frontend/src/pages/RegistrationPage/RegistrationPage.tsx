import React from 'react';

import './RegistrationPage.scss';
import { CustomForm } from '../../components/UI/CustomForm';
import { InputType } from '../../components/UI/CustomInput';
import { registerUserNODE } from '../../store/sagas/actions';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegistrationPage: React.FC = () => {
  const onSubmit = (values: FormValues) => {
    dispatch(registerUserNODE({
      email: values.email,
      fullName: values.fullName,
      password: values.password,
    }));
  };

  return (
    <main className="RegistrationPage container">
      <h1 className='title'>Registration</h1>

      <section>
        <CustomForm
          data={[
            { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: ''},
            { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
            { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
            { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
          ]}
          onSubmit={onSubmit}
          formType='CREATE_USER'
        />
      </section>
    </main>
  );
}

export default RegistrationPage;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
