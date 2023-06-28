import React from 'react';

import { CustomForm } from '../../components/UI/CustomForm';
import { InputType } from '../../components/UI/CustomInput';
import { registerUserNODE } from '../../store/sagas/actions';

import './RegistrationPage.scss';
import { useAppDispatch } from '../../store/hooks';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registrationDate = [
  { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: ''},
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
  { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
];

const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();

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
          data={registrationDate}
          onSubmit={onSubmit}
          formType='CREATE_USER'
        />
      </section>
    </main>
  );
}

export default RegistrationPage;
