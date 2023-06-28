import React from 'react';

import { CustomButton } from '../../components/UI/CustomButton';
import { routes } from '../../routes/routerConfig';
import { CustomForm } from '../../components/UI/CustomForm';
import { InputType } from '../../components/UI/CustomInput';
import { RequestLoginUser } from '../../types/User';
import { SagaActions } from '../../store/sagas/actions';
import { useAppDispatch } from '../../store/hooks';

const loginDate = [
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' }, 
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' }
];

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { registration } = routes;

  const onSubmit = (values: RequestLoginUser) => {
    dispatch({
      type: SagaActions.LOGIN_USER_NODE,
      payload: values,
    });
  }

  return (
    <main className="LoginPage container">
      <h1 className='title'>LoginPage</h1>

      <CustomForm 
        data={loginDate} 
        onSubmit={onSubmit}
        formType='LOGIN_USER'
      />

      <p className='LoginPage__registrationLink'>
        Don't have an account?&nbsp;&nbsp;&nbsp;
        <CustomButton to={registration.path} className="link">
          Sign up
        </CustomButton>
      </p>
    </main>
  );
}

export default LoginPage;