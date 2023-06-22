import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SagaActions } from '../../store/sagas/actions';
import { routes } from '../../routes/routerConfig';
import { resetMessage, selectIsAuth, selectMessage } from '../../store/features/user/userSlice';
import './LoginForm.scss';
import { RequestLoginUser } from '../../types/User';

const initialValues: RequestLoginUser = {
  email: 'app@test.app',
  password: '12345',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(selectMessage);
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      setTimeout(() => {
        navigate(routes.login.path);
        dispatch(resetMessage());
      }, 2000);
    }
  }, [navigate, isAuth, message]);

  const onSubmit = (values: RequestLoginUser) => {
     dispatch({
      type: SagaActions.LOGIN_USER_NODE,
       payload: values,
    })
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <form className='regForm' onSubmit={formik.handleSubmit}>
      <div className='regForm__wrapper'>
        {message}
        {isAuth ? (
          <div className="regMessage">
            <div className="regTitle">{message}</div>
            <TaskAltIcon />
          </div>
        ) : (
          <>
            <div className="regForm__control">
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
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
            <div className="buttonWrapper">
              <button type="button" onClick={() => window.history.go(-1)}>
                Back
              </button>
              <button
                type="submit"
              >
                Login
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

