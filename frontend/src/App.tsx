import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectFullName, selectToken, selectUser, } from './store/features/user/userSlice';
import {
  selectMockData,
  selectMockDreams,
  selectMockPhotos,
  selectMockUsers,
  setMockData
} from './mock/store/features/mock/mockSlice';
import { registerUserNODE, SagaActions } from './store/sagas/actions';

import { Dream, DreamsStatus } from './types/Dream';
import {
  getDream,
  getDreams,
} from './api/Node/dreams';
import { client } from './api/Java/instance';
import { authAPI } from './api/Node/users';
// import { getUser, login, register } from './api/Node/users';
// import { clientJava } from './api/Java/instanceJava';

import './App.scss';

export const App = () => {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector(selectFullName);
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectMockUsers);
  const dreams = useAppSelector(selectMockDreams);
  const photos = useAppSelector(selectMockPhotos);
  const mockData = useAppSelector(selectMockData);
  const token = useAppSelector(selectToken) || '';

  // useEffect(() => {
  //   const createJavaDream = async () => {
  //     console.log('createJavaDream');

  //     const dream = {
  //       name: 'App test user',
  //       userId: 1,
  //     };

  //     const response = await clientJava.post(
  //       '/wishes/create',
  //       dream,
  //     )

  //     console.log('create response', response);
  //   }


  //   //node request WORKING!
  //   const registerUser = async () => {
  //     const newUser = {
  //       email: 'app@test.app',
  //       password: '12345',
  //       fullName: 'App test user',
  //     };

  //     const user = await authAPI.register(newUser);

  //     const { token } = user;

  //     dispatch(setToken(token));
  //   };

  //   const loginUser = async () => {
  //     const data = {
  //       email: 'app@test.app',
  //       // name: 'App test user',
  //       password: '12345',
  //     };

  //     const user = await authAPI.login(data);

  //     console.log('login user = ', user);

  //     return user;
  //   };

  //   const getCurrentUser = async () => {
  //     const response = await authAPI.getUser(token);

  //     console.log('getCurrentUser ', response);

  //     return response;
  //   };

  //   const loadDreams = async () => {
  //     const dreams: Dream[] = await getDreams();

  //     console.log('dreams = ', dreams);

  //     return dreams;
  //   };

  //   const create = async () => {
  //     const dream = await createDream(
  //       {
  //         title: "dream app new",
  //         body: "dream app new",
  //         userId: '',
  //         handler: null,
  //         tags: []
  //       },
  //       token,
  //     );

  //     console.log('created dream = ', dream);

  //     return dream;
  //   };

  //   const getCurrentDream = async () => {
  //     const response = await getDream("64917b965df2b30c3b7b0b0b");

  //     console.log('getCurrentDream ', response);

  //     return response;
  //   };

  //   // registerUser();
  //   // loginUser();
  //   // getCurrentUser();
  //   // loadDreams();
  //   // create();
  //   // getCurrentDream();
  //   // createJavaDream();
  // }, [])

  console.log();
  // useEffect(() => {
  //   const loginJava = async () => {
  //     console.log('loginDream');

  //     const user = {
  //       email: 'admin@admin.com',
  //       password: 'adminadmin',
  //     };

  //     const response = await client.post(
  //       '/auth/login',
  //       user,
  //     )

  //     return response;
  //   };

  //   loginJava().then(res => console.log(res));
  // }, [])

  useEffect(() => {
    console.log('user APP', fullName);
  }, [mockData, fullName])

  useEffect(() => {
    if (users.length && dreams && photos) {
      const data = [];

      for (let i = 0; i < 100; i++) {
        data.push({
          id: String(i),
          title: dreams[i]?.title,
          body: dreams[i]?.body,
          status: DreamsStatus.POSTED,
          // messages: [],
          user: String(users[Math.round(10 * Math.random())]?.id),
          handler: null,
          imageUrl: photos[i],
          tags: []
        });
      }

      dispatch(setMockData(data));
    }
  }, [dispatch, users, dreams, photos]);

  return (
    <div className='App'>
      <button
        onClick={() => {
          const loginJava = async () => {
            console.log('login JAVA');
      
            const user = {
              email: 'admin@admin.com',
              password: 'adminadmin',
            };
      
            const response = await client.post(
              '/auth/login',
              user,
            )
      
            return response;
          };
      
          loginJava().then(res => console.log(res));
        }}
        style={{
          width: '100px',
          height: '100px',
        }}
      >
        TEST JAVA POST
      </button>

      <div className='App__buttons_for_Node'>
        <CustomButton onClick={() => dispatch(registerUserNODE({
          email: 'app@test.app',
          password: '12345',
          fullName: 'App test user',
        }))}>
          register User 1
        </CustomButton>

        <CustomButton onClick={() => dispatch({
          type: SagaActions.LOGIN_USER_NODE,
          payload: {
            password: '12345',
            email: 'app@test.app',
            // fullName: 'App test user',
          },
        })}>
          login User 1
        </CustomButton>

        <CustomButton onClick={() => dispatch(registerUserNODE({
          email: 'user2@test.app',
          password: '1234567',
          fullName: 'App test user 2',
        }))}>
          register User 2
        </CustomButton>

        <CustomButton onClick={() => dispatch({
          type: SagaActions.LOGIN_USER_NODE,
          payload: {
            password: '1234567',
            email: 'user2@test.app',
            // fullName: 'App test user',
          },
        })}>
          login User 2
        </CustomButton>

        <CustomButton onClick={() => dispatch({
          type: SagaActions.FETCH_USER_NODE,
          payload: token,
        })}>
          get User
        </CustomButton>

        <CustomButton onClick={() => dispatch({
          type: SagaActions.DELETE_USER_NODE,
          payload: token,
        })}>
          delete User
        </CustomButton>

        <CustomButton onClick={() => dispatch({
          type: SagaActions.FETCH_ALL_DREAMS,
        })}>
          get All Dreams
        </CustomButton>
      </div>

      {fullName && <h1 className='title'>{`Hello, ${fullName}!`}</h1>}
      {user && <h1 className='title'>{user.userId}</h1>}

      <Header />
      <Layout />
      <Footer />
    </div>
  );
}
