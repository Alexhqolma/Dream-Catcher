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
            <div className={classNames('form__control',
              { 'form__control--error': isError('fullName') },
            )}
            >
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder='Full Name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {isError('fullName') ? (
                <div className="form__error">{formik.errors.fullName}</div>
              ) : null}
            </div>

            <div className={classNames("form__control",
              { 'form__control--error': formik.touched.email && formik.errors.email }
            )}
            >
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
                <div className="form__error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className={classNames("form__control",
              { 'form__control--error': formik.touched.password && formik.errors.password }
            )}
            >
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
                <div className="form__error">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className={classNames("form__control",
              { 'form__control--error': formik.touched.confirmPassword && formik.errors.confirmPassword }
            )}
            >
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
                <div className="form__error">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>

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

