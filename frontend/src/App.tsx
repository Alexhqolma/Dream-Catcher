import { useEffect } from 'react';

import Header from './components/Header/Header';
import { Layout } from './components/Layout';
import Footer from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectUser } from './store/features/user/userSlice';
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
  // createDream,
  getDreams, 
} from './api/Node/dreams';
import { getUser, login, register } from './api/Node/users';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectMockUsers);
  const dreams = useAppSelector(selectMockDreams);
  const photos = useAppSelector(selectMockPhotos);
  const mockData = useAppSelector(selectMockData);
  
  useEffect(() => {
    const registerUser = async () => {
      const data = {
        email: 'app@test.app',
        password: '12345',
        fullName: 'App test user',
      };

      const user = await register(data);

      console.log('user = ', user);

      return user;
    };

    const loginUser = async () => {
      const data = {
        email: 'app@test.app',
        password: '12345',
      };

      const user = await login(data);

      console.log('login user = ', user);

      return user;
    };

    const getCurrentUser = async () => {
      const response = await getUser(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhlOTJlODA2MTYzODc0NDI5YTlkOTQiLCJpYXQiOjE2ODcwNjUzNTYsImV4cCI6MTY4OTY1NzM1Nn0.8pZrr4TS43k5IswcoIO0cjZSn0eRASgvmCfLZAen16U',
      );

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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhlOTJlODA2MTYzODc0NDI5YTlkOTQiLCJpYXQiOjE2ODcwNjUzNTYsImV4cCI6MTY4OTY1NzM1Nn0.8pZrr4TS43k5IswcoIO0cjZSn0eRASgvmCfLZAen16U'
      );

      console.log('created dream = ', dream);

      return dream;
    };

    const loadAllDreams = async () => {
      const dreams = await getDreams();

      console.log('all dreams = ', dreams);

      return dreams;
    };

    const getCurrentDream = async () => {
      const response = await getDream("648e6418bbccb45f4c5389f7");

      console.log('getCurrentDream ', response);

      return response;
    };

    // registerUser();
    // loginUser();
    // getCurrentUser();
    // loadDreams();
    // create();
    loadAllDreams();
    getCurrentDream();
  }, [])

  useEffect(() => {
    console.log('render App');
  }, [mockData])

  useEffect(() => {
    if (users.length && dreams && photos) {
      const data: Dream[] = [];
      
      for (let i = 0; i < 100; i++) {
        data.push({
          id: String(i),
          title: dreams[i]?.title,
          body: dreams[i]?.body,
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
      <Header />
      {user && <h1 className='App__greetings'>{`Hello, ${user.fullName}!`}</h1>}

      <Layout />
      <Footer />
    </div>
  );
}
