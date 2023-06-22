import { useEffect } from 'react';

import Header from './components/Header/Header';
import { Layout } from './components/Layout';
import Footer from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectFullName, selectToken, selectUser, setToken } from './store/features/user/userSlice';
import { 
  selectMockData,
  selectMockDreams,
  selectMockPhotos,
  selectMockUsers,
  setMockData
} from './mock/store/features/mock/mockSlice';
import { Dream, DreamsStatus } from './types/Dream';

import './App.scss';
import {
  createDream,
  getDream,
  getDreams, 
} from './api/Node/dreams';
// import { getUser, login, register } from './api/Node/users';
import { Button } from './components/Button';
import { registerUser, SagaActions } from './store/sagas/actions';
import { clientJava } from './api/Java/instanceJava';
import { authAPI } from './api/Node/users';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector(selectFullName);
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

  useEffect(() => {
    console.log('user APP', fullName);
  }, [mockData, fullName])

  useEffect(() => {
    if (users.length && dreams && photos) {
      const data: Dream[] = [];
      
      for (let i = 0; i < 100; i++) {
        data.push({
          id: String(i),
          title: dreams[i]?.title,
          body: dreams[i]?.body,
          status: DreamsStatus.POSTED,
          // messages: [],
          userId: String(users[Math.round(10 * Math.random())]?.id),
          handler: null,
          imageUrl: photos[i],
          tags: []
        });
      }

      dispatch(setMockData(data));
    }
  }, [dispatch, users, dreams, photos])

  return (
    <div className='App'>
      <div className='App__buttons_for_Node'>
        <Button onClick={() => dispatch(registerUser({
            email: 'app@test.app',
            password: '12345',
            fullName: 'App test user',
          }))}>
          register
        </Button>

        <Button onClick={() => dispatch({ 
          type: SagaActions.LOGIN_USER,
          payload: {
            password: '12345',
            email: 'app@test.app',
            // fullName: 'App test user',
          },
        })}>
          login User
        </Button>

        <Button onClick={() => dispatch({ 
          type: SagaActions.FETCH_USER,
          payload: token,
        })}>
          get User
        </Button>

        <Button onClick={() => dispatch({ 
          type: SagaActions.FETCH_ALL_DREAMS,
        })}>
          get All Dreams
        </Button>
      </div>
      {fullName && <h1 className='title'>{`Hello, ${fullName}!`}</h1>}
      <Header />

      <Layout />


      <Footer />

    </div>
  );
}
