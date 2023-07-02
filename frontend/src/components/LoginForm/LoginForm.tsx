import React from 'react';
import * as Yup from 'yup';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUserNODE } from '../../store/sagas/actions';
import { RequestLoginUser } from '../../types/User';
import { CustomForm } from '../UI/CustomForm';
import { validationSchemas } from '../UI/CustomForm/validationSchemas';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { selectUserError } from '../../store/features/user/userSlice';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object(validationSchemas.LOGIN_USER)


const LoginData = [
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' }
];

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector(selectUserError);

  const onSubmit = (values: RequestLoginUser) => {
    try {
      dispatch(loginUserNODE({
        email: values.email,
        password: values.password,
    }));
    } catch (error) {
      console.error('Error loging user:', error);
    }
    setTimeout(() => {
      navigate('/dreams');
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
 
  
  return (
    <div>
      {error && <h1>Something went wrong</h1>}
      {/* <CustomFormTest
        data={LoginData}
        onSubmit={formik.handleSubmit}
        formik={formik}
      /> */}
    </div>
  )
}