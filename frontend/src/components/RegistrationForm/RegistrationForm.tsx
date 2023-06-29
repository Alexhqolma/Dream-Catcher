import React from 'react';
import { registerUserNODE } from '../../store/sagas/actions';
// import { CustomForm } from '../UI/CustomForm';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch } from '../../store/hooks';
import { RequestCreateUser } from '../../types/User';
import { CustomFormTest } from '../UI/CustomFormTest';
import { useNavigate } from 'react-router-dom';

export type InitialValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type DataValues = {
  name: string;
  type: string;
  placeholder: string;
  initialValue: string;
}

const RegistrationData: DataValues[] = [
  { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: '' },
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
  { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
];

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: RequestCreateUser) => {
    try {
      await dispatch(registerUserNODE({
        email: values.email,
        fullName: values.fullName,
        password: values.password,
      }));
    } catch (error) {
      console.error('Error registering user:', error);
    }
    setTimeout(() => {
      navigate('/dreams');
    }, 2000);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
 
  return (
    <div>
      <CustomFormTest
        data={RegistrationData}
        onSubmit={onSubmit}
        formType='CREATE_USER'
        initialValues={initialValues}
      />
    </div>
  )
}