import React from 'react';
// import { CustomForm } from '../UI/CustomForm';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch } from '../../store/hooks';
import { loginUserNODE } from '../../store/sagas/actions';
import { RequestLoginUser } from '../../types/User';
import { CustomFormTest } from '../UI/CustomFormTest';

export type InitialValues = {
  email: string;
  password: string;
};

export type DataValues = {
  name: string;
  type: string;
  placeholder: string;
  initialValue: string;
};

const LoginData: DataValues[] = [
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' }
];

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (values: RequestLoginUser) => {
    try {
      await dispatch(loginUserNODE({
        email: values.email,
        password: values.password,
    }));
    } catch (error) {
      console.error('Error loging user:', error);
    }
  };
 
  const initialValues = {
    email: '',
    password: '',
  };
  
  return (
    <div>
      <CustomFormTest
        data={LoginData}
        onSubmit={onSubmit}
        formType="LOGIN_USER"
        initialValues={initialValues}
      />
    </div>
  )
}