import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectFullName, selectUser, } from './store/features/user/userSlice';
import {
  selectMockData,
  selectMockDreams,
  selectMockPhotos,
  selectMockUsers,
  setMockData
} from './mock/store/features/mock/mockSlice';
import { DreamsStatus } from './types/Dream';
import Header from './components/Header/Header';
import { MainLayout } from './components/layouts/Main.Layout';
import Footer from './components/Footer/Footer';
import { setScreen } from './store/features/controls/controlsSlice';
import { NodeControls } from './components/NodeControls/NodeControls';
import { JavaControls } from './components/JavaControls';

import './App.scss';

export const App = () => {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector(selectFullName);
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectMockUsers);
  const dreams = useAppSelector(selectMockDreams);
  const photos = useAppSelector(selectMockPhotos);
  const mockData = useAppSelector(selectMockData);

  useEffect(() => {
    dispatch(setScreen());
  }, [dispatch])

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
      {<NodeControls />}
      {<JavaControls />}
      <Header />

      {/* <h1 className='title'>
        {fullName && `Hello, ${fullName}!`}&nbsp;&nbsp;&nbsp;{user && user.userId}
      </h1> */}

      <MainLayout />   
      <Footer />
    </div>
  );
}


