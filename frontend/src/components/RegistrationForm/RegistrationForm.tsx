import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch } from '../../store/hooks';
import { RequestCreateUser } from '../../types/User';
import { CustomFormTest } from '../UI/CustomFormTest';
import { useNavigate } from 'react-router-dom';
import { registerUserNODE } from '../../store/sagas/actions';
import { validationSchemas } from '../UI/CustomForm/validationSchemas';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object(validationSchemas.CREATE_USER)

const RegistrationData = [
  { name: 'fullName', type: InputType.TEXT, placeholder: 'Full Name', initialValue: '' },
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' },
  { name: 'confirmPassword', type: InputType.PASSWORD, placeholder: 'Confirm Password', initialValue: '' },
];

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isSubmited, setIsSubmited] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values: RequestCreateUser) => {
    setIsSubmited(true);

    try {
    dispatch(registerUserNODE({
      email: values.email,
      password: values.password,
      fullName: values.fullName,
    }));
    } catch (error) {
      console.error('Error registering user:', error);
    }
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });



 
  return (
    <div>
      {isSubmited ? (
        <div className="regMessage">
          <div className="regTitle">Registration succesfull!</div>
          <TaskAltIcon />
        </div>
      ) : (
      <CustomFormTest
        data={RegistrationData}
        onSubmit={formik.handleSubmit}
        formik={formik}
      />
      )}
    </div>
  )
}