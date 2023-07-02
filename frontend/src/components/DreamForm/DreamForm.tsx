import React, { useEffect } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { InputType } from '../UI/CustomInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CustomForm } from '../UI/CustomForm';
import { useNavigate } from 'react-router-dom';
import { FormType } from '../UI/CustomForm/validationSchemas';
import { selectToken, selectUser, } from '../../store/features/user/userSlice';
import { RequestStatus } from '../../types/RequestStatus';
import { Dream, RequestCreateDream, RequestPatchDream } from '../../types/Dream';
import { createDream, updateDream } from '../../store/sagas/actions';

export enum DreamFormType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

interface DreamFormProps {
  startTabIndex: number;
  type: DreamFormType;
}

export const DreamForm: React.FC<DreamFormProps> = ({
  startTabIndex,
  type,
}) => {
  const dispatch = useAppDispatch();
  const isSubmitted = useAppSelector(state => state.dream.storage);
  const isLoading = useAppSelector(state => state.dream.statusLoading) === RequestStatus.LOADING;
  const responseMessage = useAppSelector(state => state.dream.message);
  const userId = useAppSelector(selectUser)?.userId;
  const token = useAppSelector(selectToken);

  const initialValues: Omit<Dream, 'user' | 'handler' | 'id' | 'status' | 'creationDate'> = {
    title: '',
    body: '',
    imageUrl: '',
  };

  const dreamFormData = [
    { name: 'title', type: InputType.TEXT, placeholder: 'Title', initialValue: '' },
    { name: 'body', type: InputType.TEXTAREA, placeholder: 'Describe your dream in few words...', initialValue: '' },
     { name: 'imageUrl', type: InputType.TEXT, placeholder: 'Set image link', initialValue: '' },
  ];

  const onSubmit = (values: Omit<Dream, 'user' | 'handler'>) => {
    token &&
    userId && 
    type === DreamFormType.CREATE &&
    dispatch(createDream({
      dream: {
        title: values.title,
        body: values.body,
        imageUrl: values.imageUrl,
      },
      token,
    }));

    token &&
    userId && 
    type === DreamFormType.UPDATE &&
    dispatch(updateDream({
      dream: {
        title: values.title,
        body: values.body,
        imageUrl: values.imageUrl,
      },
      token,
    }));
  };

  if (isLoading) {
    return <h1 className='title'>Loading ...</h1>
  }

  if (isSubmitted) {
    return (
      <div className="regMessage RegistrationForm__success">
        <div className="regTitle">{responseMessage}</div>

        <TaskAltIcon />
      </div>
    )
  }

  return (
    <CustomForm
      data={dreamFormData}
      onSubmit={onSubmit}
      validationType={FormType.DREAM}
      initialValues={initialValues} 
      startTabIndex={startTabIndex} 
      className="DreamForm"    
    />
  )
}

