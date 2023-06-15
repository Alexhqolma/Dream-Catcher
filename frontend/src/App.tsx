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
import { getAllDreamsLocal } from './api/dreamsLocal';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectMockUsers);
  const dreams = useAppSelector(selectMockDreams);
  const photos = useAppSelector(selectMockPhotos);
  const mockData = useAppSelector(selectMockData);
  
  useEffect(() => {
    const login = async () => {
      const dreams: any = await getAllDreamsLocal();

      console.log('dreams = ', dreams);

      return dreams;
    }

    login();
  }, [])

  useEffect(() => {
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
      {user && <h1 className='App__greetings'>{`Hello, ${user.name}!`}</h1>}

      <main>
        <Layout />
      </main>
      <Footer />
    </div>
  );
}
