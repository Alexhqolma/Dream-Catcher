// import { useState } from 'react';
// import { Button } from '../Button';
// // import { useDispatch } from 'react-redux';
// // import { getUser } from '../../store/features/user/userSlice';

// export const LoginForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // const dispatch = useDispatch();

//   const handleLogin = () => {
//   //   dispatch(getUser({ username, password }));
//   };

//   return (
//     <div className="login-popup">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button onClick={handleLogin}>
//         Log in
//       </Button>
//     </div>
//   );
// };


import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUserNODE } from '../../store/sagas/actions';

import './LoginForm.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routerConfig';
import { resetMessage, selectMessage } from '../../store/features/user/userSlice';

type FormValues = {
  email: string;
  password: string;
};

const initialValues = {
  email: 'app@test.app',
  password: '123qweASD',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      'Password should be at least 7 characters long, contain digit and uppercase letter'
    )
    .required()
});

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(selectMessage);
  const navigate = useNavigate();
  const isSubmitted = message === 'User logged in successfully';

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        navigate(routes.login.path);
        dispatch(resetMessage());
      }, 2000);
    }
  }, [navigate, isSubmitted, message]);

  const onSubmit = (values: FormValues) => {
    dispatch(loginUserNODE({
      email: values.email,
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
    <form className='regForm' onSubmit={formik.handleSubmit}>
      <div className='regForm__wrapper'>
        {message}
        {isSubmitted ? (
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
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

