import React from 'react';
import { registerUserNODE } from '../../store/sagas/actions';
import { CustomForm } from '../UI/CustomForm';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch } from '../../store/hooks';
import { RequestCreateUser } from '../../types/User';
import { FormType } from '../UI/CustomForm/validationSchemas';

const RegistrationData = [
  { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: '' },
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
  { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
];

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const onSubmit = (values: RequestCreateUser) => {
    

    console.log('onSubmit');

    dispatch(registerUserNODE({
      email: values.email,
      fullName: values.fullName,
      password: values.password,
    }));
  };
 
  return (
    <CustomForm
      data={RegistrationData}
      onSubmit={onSubmit}
      formType={FormType.CREATE_USER}
    />
  )
}