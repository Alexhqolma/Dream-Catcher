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
import { Button } from '../Button';

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
  }, [navigate, isSubmitted, message]);

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
          <div className="regMessage">
            <div className="regTitle">{message}</div>
            <TaskAltIcon />
          </div>
        ) : (
          <>
            <div className="form__control">
                <input
                  id="fullName"
                  name="fullName"
                  type="fullName"
                  placeholder='Full Name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="error">{formik.errors.fullName}</div>
                ) : null}
            </div>

            <div className="form__control">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="form__control">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>

            <div className="form__control">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder='Confirm Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="error">{formik.errors.confirmPassword}</div>
                ) : null}
            </div>

            <div className="buttonWrapper">
              <Button type="button" onClick={() => window.history.go(-1)}>
                Back
              </Button>
              <Button
                type="submit"
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

  