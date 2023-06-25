import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SagaActions } from '../../store/sagas/actions';
import { routes } from '../../routes/routerConfig';
import { resetMessage, selectIsAuth, selectMessage } from '../../store/features/user/userSlice';
import { RequestLoginUser } from '../../types/User';

import './LoginForm.scss';
import { InputType } from '../UI/CustomInput/CustomInput';
import { CustomForm, FormType, InputProperties } from '../UI/CustomForm';
import { validationSchema } from '../UI/CustomForm/validationSchema';

const initialValues: RequestLoginUser = {
  email: '',
  password: '',
};

// const validationSchema = Yup.object({
//   email: Yup.string().email().required(),
//   password: Yup.string().required()
// });

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
  }, [navigate, isAuth, message, dispatch]);

  const onSubmit = (values: RequestLoginUser) => {
    dispatch({
      type: SagaActions.LOGIN_USER_NODE,
      payload: values,
    })
  }

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  // });

  // data: {
  //   name: keyof User | keyof Dream;
  //   type: InputType;
  //   placeholder: string;
  //   initialValue: unknown;
  // }[];

  const data:InputProperties<RequestLoginUser>[] = [
    { 
      name: 'email',
      type: InputType.EMAIL,
      placeholder: 'enter email',
      initialValue: initialValues.email,
    },
    { 
      name: 'password', 
      type: InputType.PASSWORD, 
      placeholder: 'enter password', 
      initialValue: initialValues.password, 
    },
  ];

  return (
    <>
      {/* <form className='form' onSubmit={formik.handleSubmit}>
        <div className='form__wrapper'>
          {message}
          {isAuth ? (
            <div className="form__regMessage">
              <div className="form__regTitle">{message}</div>
              <TaskAltIcon />
            </div>
          ) : (
            <>
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

              <div className="form__buttonWrapper">
                <CustomButton
                  title='Back'
                  onClick={() => window.history.go(-1)}
                  width={100}
                />
                <CustomButton
                  title='Login'
                  type={ButtonType.SUBMIT}
                  width={100}
                />
              </div>
            </>
          )}
        </div>
      </form> */}

      <CustomForm<RequestLoginUser> 
        data={data}
        validationSchema={Yup.object(validationSchema[FormType.LOGIN_USER])}
        onSubmit={onSubmit}
      />
    </>
  );
};

