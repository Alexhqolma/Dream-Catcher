import { useEffect } from 'react';
import { selectToken } from '../../store/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { registerUserNODE, SagaActions } from '../../store/sagas/actions';
import { CustomButton } from '../UI/CustomButton';

import './JavaControls.scss';

export const JavaControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  
  const loginJava = async () => {
    console.log('loginDream');

    const user = {
      "email": "admin@admin.com",
      "password": "adminadmin",
    };
    
    const response = await fetch(
      'http://localhost:6868/auth/login',
      {
        // mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    console.log(response);
  };
 
  const createDream = async () => {
    console.log('createDreamJava');

    const user = {
      "title": "title new dream",
      "body": "body new dream",
    };
    
    const response = await fetch(
      'http://localhost:6868/dreams/create',
      {
        // mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    console.log(response);
  };

  return (
    <div className='App__buttons_for_Java JavaControls'>
      <p>JAVA</p>
      <div>
        <CustomButton
          onClick={() => loginJava()}
          tabIndex={0}
          width={200}
        >
          Login
        </CustomButton>

        <CustomButton
          onClick={() => createDream()}
          tabIndex={0}
          width={200}
        >
          createDream
        </CustomButton>

        <CustomButton
          onClick={() => dispatch(registerUserNODE({
            email: 'user2@test.app',
            password: '1234567',
            fullName: 'App test user 2'
          }))}
          tabIndex={0}
          width={200}
        >
         ----
        </CustomButton>

        <CustomButton
          onClick={() => dispatch({
            type: SagaActions.LOGIN_USER_NODE,
            payload: {
              password: '1234567',
              email: 'user2@test.app',
              // fullName: 'App test user',
            }
          })}
          tabIndex={0}
          width={200}
        >
          -----
        </CustomButton>

        <CustomButton
          onClick={() => dispatch({
            type: SagaActions.FETCH_USER_NODE,
            payload: token
          })}
          tabIndex={0}
          width={200}
        >
          get User
        </CustomButton>

        <CustomButton
          onClick={() => dispatch({
            type: SagaActions.DELETE_USER_NODE,
            payload: token
          })}
          tabIndex={0}
          width={200}
        >
          delete User
        </CustomButton>

        <CustomButton
          onClick={() => dispatch({ type: SagaActions.FETCH_ALL_DREAMS })}
          tabIndex={0}
          width={200}
        >
          get All Dreams
        </CustomButton>
      </div>
    </div>
  );
}
