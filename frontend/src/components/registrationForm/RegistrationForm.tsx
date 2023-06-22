import React, { useState } from 'react';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/features/user/userSlice';
import { registerUserNODE } from '../../store/sagas/actions';

import './RegistrationForm.scss';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues = {
  fullName: 'Mr. Jones',
  email: 'app@test.app',
  password: '123qweASD',
  confirmPassword: '123qweASD',
};

const validationSchema = Yup.object({
  fullName: Yup.string().min(2).required(),
  email: Yup.string().min(2).required(),
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
  // const navigate = useNavigate();
  const user = useAppSelector(selectUser);

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       redirect(`${routes.user.path.parent}/${user?.id}`);
  //     }, 2000);
  //   }
  // }, [navigate, user]);

  const onSubmit = (values: FormValues) => {
    setIsSubmitted(true);
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
