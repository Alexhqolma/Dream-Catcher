import React, { useEffect } from 'react';
import * as Yup from 'yup';
// import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { InputType } from '../UI/CustomInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RequestCreateUser } from '../../types/User';
import { CustomFormTest } from '../UI/CustomFormTest';
import { useNavigate } from 'react-router-dom';
import { registerUserNODE } from '../../store/sagas/actions';
import { FormType } from '../UI/CustomForm/validationSchemas';
import { selectMessage, selectRegistrationSuccess, selectUserStatusLoading } from '../../store/features/user/userSlice';
import { RequestStatus } from '../../types/RequestStatus';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const registrationData = [
  { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: '' },
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
  { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
];

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSubmitted = useAppSelector(selectRegistrationSuccess);
  const isLoading = useAppSelector(selectUserStatusLoading) === RequestStatus.LOADING;
  const responseMessage = useAppSelector(selectMessage);

  const onSubmit = (values: RequestCreateUser) => {
    dispatch(registerUserNODE({
      email: values.email,
      password: values.password,
      fullName: values.fullName,
    }));
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  }, [navigate, isSubmitted])


  if (isLoading) {
    return <h1 className='title'>Loading ...</h1>
  }

  if (isSubmitted) {
    return (
      <div className="regMessage RegistrationForm__success">
        <div className="regTitle">{responseMessage}</div>

        <TaskAltIcon />
      </div>
    )
  }

  return (
    <CustomFormTest
      data={registrationData}
      onSubmit={onSubmit}
      // formik={formik}
      validationType={FormType.CREATE_USER}
      initialValues={initialValues}
    />
  )
}