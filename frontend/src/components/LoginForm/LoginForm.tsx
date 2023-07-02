import React, { useEffect } from 'react';
import { InputType } from '../UI/CustomInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUserNODE } from '../../store/sagas/actions';
import { RequestLoginUser } from '../../types/User';
import { CustomForm } from '../UI/CustomForm';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth, selectUserStatusLoading } from '../../store/features/user/userSlice';
import { FormType } from '../UI/CustomForm/validationSchemas';
import { RequestStatus } from '../../types/RequestStatus';


const initialValues = {
  email: '',
  password: '',
};

const LoginData = [
  { name: 'email', type: InputType.EMAIL, placeholder: 'Email', initialValue: '' },
  { name: 'password', type: InputType.PASSWORD, placeholder: 'Password', initialValue: '' }
];


interface LoginFormProps {
  startTabIndex: number;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  startTabIndex
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSubmitted = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectUserStatusLoading) === RequestStatus.LOADING;
  const onSubmit = (values: RequestLoginUser) => {
    dispatch(loginUserNODE({
      email: values.email,
      password: values.password,
  }));
};

useEffect(() => {
  if (isSubmitted) {
    setTimeout(() => {
      navigate('/dreams');
    }, 2000);
  }
}, [navigate, isSubmitted])

  if (isLoading) {
    return <h1 className='title'>Loading ...</h1>
  }
  
  return (
    <div>
      <CustomForm
        data={LoginData}
        onSubmit={onSubmit}
        validationType={FormType.LOGIN_USER}
        initialValues={initialValues}
        startTabIndex={startTabIndex}
        className="LoginFrom"
      />
    </div>
  )
}