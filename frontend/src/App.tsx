import { useEffect } from 'react';

import Header from './components/Header/Header';
import { Layout } from './components/Layout';
import Footer from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectToken, selectUser, setToken } from './store/features/user/userSlice';
import { 
  selectMockData,
  selectMockDreams,
  selectMockPhotos,
  selectMockUsers,
  setMockData
} from './mock/store/features/mock/mockSlice';
import { Dream } from './types/Dream';

import './App.scss';
import {
  createDream,
  getDream,
  getDreams, 
} from './api/Node/dreams';
import { getUser, login, register } from './api/Node/users';
import { Button } from './components/Button';
import { registerUser, SagaActions } from './store/sagas/actions';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectMockUsers);
  const dreams = useAppSelector(selectMockDreams);
  const photos = useAppSelector(selectMockPhotos);
  const mockData = useAppSelector(selectMockData);
  const token = useAppSelector(selectToken) || '';
  
  useEffect(() => {
    //node request WORKING!
    const registerUser = async () => {
      const data = {
        email: 'app@test.app',
        password: '12345',
        name: 'App test user',
      };

      const user = await register(data);

      const { token } = user;

      dispatch(setToken(token));
    };

    const loginUser = async () => {
      const data = {
        // email: 'app@test.app',
        name: 'App test user',
        password: '12345',
      };

      const user = await login(data);

      console.log('login user = ', user);

      return user;
    };

    const getCurrentUser = async () => {
      const response = await getUser(token);

      console.log('getCurrentUser ', response);

      return response;
    };

    const loadDreams = async () => {
      const dreams: Dream[] = await getDreams();

      console.log('dreams = ', dreams);

      return dreams;
    };

    const create = async () => {
      const dream = await createDream(
        {
          title: "dream app new",
          text: "dream app new",
          tags: ["react", "html", "frontend12"]	
        },
        token,
      );

      console.log('created dream = ', dream);

      return dream;
    };

    const getCurrentDream = async () => {
      const response = await getDream("64917b965df2b30c3b7b0b0b");

      console.log('getCurrentDream ', response);

      return response;
    };

    // registerUser();
    // loginUser();
    // getCurrentUser();
    // loadDreams();
    // create();
    // getCurrentDream();
  }, [])

  // useEffect(() => {
  //   // console.log('');
  // }, [mockData])

  useEffect(() => {
    if (users.length && dreams && photos) {
      const data: Dream[] = [];
      
      for (let i = 0; i < 100; i++) {
        data.push({
          id: String(i),
          title: dreams[i]?.title,
          text: dreams[i]?.text,
          status: false,
          messages: [],
          userId: String(users[Math.round(10 * Math.random())]?.id),
          handler: null,
          photo: photos[i],
        });
      }

      dispatch(setMockData(data));
    }
  }, [dispatch, users, dreams, photos])

  return (
    <div className='App'>
      <Button onClick={() => dispatch(registerUser({
          // email: 'app@test.app',
          password: '12345',
          name: 'App test user',
        }))}>
        register
      </Button>

      <Button onClick={() => dispatch({ 
        type: SagaActions.LOGIN_USER,
        payload: {
          password: '12345',
          name: 'App test user',
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



      <Header />
      {user && <h1 className='App__greetings'>{`Hello, ${user.name}!`}</h1>}

      <Layout />
      <Footer />
    </div>
  );
}
