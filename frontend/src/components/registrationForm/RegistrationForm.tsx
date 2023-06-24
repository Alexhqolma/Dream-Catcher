import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetMessage, resetRegistrationSuccess, selectMessage, selectRegistrationSuccess } from '../../store/features/user/userSlice';
import { registerUserNODE } from '../../store/sagas/actions';

import './RegistrationForm.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routerConfig';
import { ButtonType, CustomButton } from '../Ui/Button';
import classNames from 'classnames';
import CustomInput from '../Ui/CustomInput/CustomInput';


type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  fullName: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      'Password should be at least 7 characters long, contain digit and uppercase letter'
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords do not match')
    .required()
});

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSubmitted = useAppSelector(selectRegistrationSuccess);
  const message = useAppSelector(selectMessage);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        navigate(routes.login.path);
        dispatch(resetMessage());
        dispatch(resetRegistrationSuccess());
      }, 2000);
    }
  }, [navigate, isSubmitted, message, dispatch]);

  const onSubmit = (values: FormValues) => {
    dispatch(registerUserNODE({
      email: values.email,
      fullName: values.fullName,
      password: values.password,
    }));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log('isSubmitted = ', isSubmitted);

  const isError = (value: keyof typeof formik.touched | keyof typeof formik.errors) => formik.touched[value] && formik.errors[value];

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='form__wrapper'>
        {message}
        {isSubmitted ? (
          <div className="form__regMessage">
            <div className="form__regTitle">{message}</div>
            <TaskAltIcon />
          </div>
        ) : (
          <>
            <CustomInput 
              id="fullName"
              name="fullName"
              type="text"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.fullName}
                isError={formik.errors.fullName}
              isTouched={formik.touched.fullName}
              placeholder='Full Name'
            />

            <CustomInput 
              id="email"
              name="email"
              type="email"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.email}
              isError={formik.errors.email}
              isTouched={formik.touched.email}
              placeholder='Email'
            />

            <CustomInput
              id="password"
              name="password"
              type="password"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.password}
              isError={formik.errors.password}
              isTouched={formik.touched.password}
              placeholder='Password'
            />

            <CustomInput 
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              isError={formik.errors.confirmPassword}
              isTouched={formik.touched.confirmPassword}
              placeholder='Confirm Password'
            />

            <div className="form__buttonWrapper">
              <CustomButton
                type={ButtonType.BUTTON}
                onClick={() => window.history.go(-1)}
              >
                Back
              </CustomButton>

              <CustomButton
                type={ButtonType.SUBMIT}
              >
                Submit
              </CustomButton>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

