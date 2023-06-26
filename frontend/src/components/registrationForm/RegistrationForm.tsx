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
import { ButtonType, CustomButton } from '../UI/CustomButton';
import { CustomInput, InputType } from '../UI/CustomInput/CustomInput';

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
              name="fullName"
              type={InputType.TEXT}
              formik={formik}
              placeholder='Full Name'
            />

            <CustomInput
              name="email"
              type={InputType.EMAIL}
              formik={formik}
              placeholder='Email'
            />

            <CustomInput
              name="password"
              type={InputType.PASSWORD}
              formik={formik}
              placeholder='Password'
            />

            <CustomInput
              name="confirmPassword"
              type={InputType.PASSWORD}
              formik={formik}
              placeholder='Confirm Password'
            />

            <div className="form__buttonWrapper">
              <CustomButton
                type={ButtonType.BUTTON}
                onClick={() => window.history.go(-1)}
                width={100}
              >
                Back
              </CustomButton>

              <CustomButton
                type={ButtonType.SUBMIT}
                width={100}
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

