import { selectToken } from '../../store/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { registerUserNODE, SagaActions } from '../../store/sagas/actions';
import { CustomButton } from '../UI/CustomButton';

import './JavaControls.scss';

export const JavaControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  
  return <div className='App__buttons_for_Java JavaControls'>
    <CustomButton
      onClick={() => dispatch(registerUserNODE({
        email: 'app@test.app',
        password: '12345',
        fullName: 'App test user',
      }))}
      tabIndex={0}
      width={200}
    >
      register User 1
    </CustomButton>

    <CustomButton
      onClick={() => dispatch({
        type: SagaActions.LOGIN_USER_NODE,
        payload: {
          password: '12345',
          email: 'app@test.app',
          // fullName: 'App test user',
        }
      })}
      tabIndex={0}
      width={200}
    >
      login User 1
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
      register User 2
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
      login User 2
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
  </div>;
}
