import React, { useEffect } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { InputType } from '../UI/CustomInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CustomForm } from '../UI/CustomForm';
import { FormType } from '../UI/CustomForm/validationSchemas';
import { selectToken, selectUser, } from '../../store/features/user/userSlice';
import { RequestStatus } from '../../types/RequestStatus';
import { Dream } from '../../types/Dream';
import { createDream, updateDream } from '../../store/sagas/actions';
import Loader from '../Loader/Loader';
import { selectDream, selectDreamError, selectDreamMessage, selectDreamStatusLoading, setError } from '../../store/features/dream/dreamSlice';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routerConfig';
import { CenteredWrapper } from '../layouts/CenteredWrapper/CenteredWrapper';

import './DreamForm.scss'

export enum DreamFormType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

interface DreamFormProps {
  title?: string;
  startTabIndex: number;
  type: DreamFormType;
  dreamInitial?: Dream;
  cbAfterSubmit?: () => void;
  cbBackButton?: () => void;
}

export const DreamForm: React.FC<DreamFormProps> = ({
  title,
  startTabIndex,
  type,
  dreamInitial,
  cbAfterSubmit,
  cbBackButton,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUser)?.userId;
  const token = useAppSelector(selectToken);
  const isSubmitted = useAppSelector(selectDream) !== null;
  const isLoading = useAppSelector(selectDreamStatusLoading) === RequestStatus.LOADING;
  const responseMessage = useAppSelector(selectDreamMessage);
  const responseError = useAppSelector(selectDreamError);

  const initialValues: Omit<Dream, 'user' | 'handler' | 'id' | 'status' | 'creationDate'> = {
    title: dreamInitial?.title || '',
    body: dreamInitial?.body || '',
    imageUrl: dreamInitial?.imageUrl || '',
  };

  const dreamFormData = [
    { name: 'title', type: InputType.TEXT, placeholder: 'Title', initialValue: '' },
    { name: 'body', type: InputType.TEXTAREA, placeholder: 'Describe your dream in few words...', initialValue: '' },
     { name: 'imageUrl', type: InputType.TEXT, placeholder: 'Set image link', initialValue: '' },
  ];

  const onSubmit = (values: Omit<Dream, 'user' | 'handler'>) => {
    if (!token || !userId) {
      dispatch(setError('You are not authorized!'));

      // setTimeout(() => {
      //   navigate(routes.login.path);
      // }, 2000)

      return;
    }

    type === DreamFormType.CREATE &&
    dispatch(createDream({
      dream: {
        title: values.title,
        body: values.body,
        imageUrl: values.imageUrl,
      },
      token,
    }));

    type === DreamFormType.UPDATE &&
    dispatch(updateDream({
      dream: {
        id: dreamInitial?.id,
        title: values.title,
        body: values.body,
        imageUrl: values.imageUrl,
      },
      token,
    }));

    cbAfterSubmit && cbAfterSubmit();
  };

  useEffect(() => {
    console.log('render form useEffect', isLoading, isSubmitted, responseMessage, responseError);
  }, [isLoading, isSubmitted, responseMessage, dreamInitial, responseError])

  console.log('render form', isLoading, isSubmitted, responseMessage, responseError);

  if (isLoading) {
    return <Loader />
  }

  if (responseError) {
    <CenteredWrapper>
      <div className="DreamForm__response">
        <div className="DreamForm__title title">{responseError}</div>
      </div>
    </CenteredWrapper>
  }

  if (isSubmitted) {
    return (
      <div className="DreamForm__response">
        <div className="DreamForm__title title">{responseMessage}</div>

        <TaskAltIcon />
      </div>
    )
  }

  return (
    <CenteredWrapper> 
      <CustomForm
        data={dreamFormData}
        onSubmit={onSubmit}
        validationType={FormType.DREAM}
        initialValues={initialValues} 
        startTabIndex={startTabIndex} 
        className="DreamForm"
        title={title}
        cbBackButton={cbBackButton}  
      />
    </CenteredWrapper>
  )
}

