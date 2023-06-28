import React from 'react';
import { registerUserNODE } from '../../store/sagas/actions';
import { CustomForm } from '../UI/CustomForm';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch } from '../../store/hooks';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const onSubmit = (values: FormValues) => {
    dispatch(registerUserNODE({
      email: values.email,
      fullName: values.fullName,
      password: values.password,
    }));
  };

  const data = [
    { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: '' },
    { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
    { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
    { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
  ]
 
  return (
    <div>
      <CustomForm
        data={data}
        onSubmit={onSubmit}
        formType='CREATE_USER'
      />
    </div>
  )
}