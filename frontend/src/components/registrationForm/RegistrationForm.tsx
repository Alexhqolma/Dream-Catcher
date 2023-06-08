import React, { useState } from 'react';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.scss';
import { useAppDispatch } from '../../store/hooks';
import { postUser } from '../../store/sagas/sagaActions';

type FormValues = {
  name: string;
  password: string;
  confirmPassword: string;
};

const initialValues = {
  name: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object({
  name: Yup.string().min(2).required(),
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values: FormValues) => {
    setIsSubmitted(true);

    dispatch(postUser(
      'users/registration',
      { name: values.name, password: values.password }
      ));

    setTimeout(() => {
      navigate('/dreams');
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  return (
    <form className='regForm' onSubmit={formik.handleSubmit}>
      <div className='regForm__wrapper'>
        {isSubmitted ? (
          <div className="regMessage">
            <div className="regTitle">Registration successful!</div>
            <TaskAltIcon />
          </div>
        ) : (
          <>
              <div className="regForm__control">
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  type="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </label>
            </div>
              <div className="regForm__control">
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </label>
            </div>
              <div className="regForm__control">
              <label htmlFor="confirmPassword">
                Confirm Password
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="error">{formik.errors.confirmPassword}</div>
                ) : null}
              </label>
            </div>
            <div className="buttonWrapper">
              <button type="button" onClick={() => window.history.go(-1)}>
                Back
              </button>
              <button
                type="submit"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};
