import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SagaActions } from '../../store/sagas/actions';
import { routes } from '../../routes/routerConfig';
import { resetMessage, selectIsAuth, selectMessage } from '../../store/features/user/userSlice';
import { RequestLoginUser } from '../../types/User';
import { ButtonType, CustomButton } from '../Button';

import './LoginForm.scss';

const initialValues: RequestLoginUser = {
  email: '',
  password: '',
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
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='form__wrapper'>
        {message}
        {isAuth ? (
          <div className="form__regMessage">
            <div className="form__regTitle">{message}</div>
            <TaskAltIcon />
          </div>
        ) : (
          <>
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
                  <div className="form__control--error">{formik.errors.email}</div>
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
                  <div className="form__control--error">{formik.errors.password}</div>
              ) : null}
            </div>
              <div className="form__buttonWrapper">
              <CustomButton title='Back' onClick={() => window.history.go(-1)} />
              <CustomButton title='Login' type={ButtonType.SUBMIT} />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

