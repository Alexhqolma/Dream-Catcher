import React from 'react';
import { CustomForm } from '../UI/CustomForm';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch } from '../../store/hooks';
import { SagaActions } from '../../store/sagas/actions';
import { RequestLoginUser } from '../../types/User';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: RequestLoginUser) => {
    dispatch({
      type: SagaActions.LOGIN_USER_NODE,
      payload: values,
    });
  };

  const data = [
    { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
    { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' }
  ];

  return (
    <div>
      <CustomForm
        data={data}
        onSubmit={onSubmit}
        formType="LOGIN_USER"
      />
    </div>
  )
}