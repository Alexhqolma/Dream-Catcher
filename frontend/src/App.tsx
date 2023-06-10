import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectUser } from './store/features/user/userSlice';

import './App.scss';
import { useEffect } from 'react';
import { selectMockDreams, selectMockPhotos, selectMockUsers, setMockData } from './mock/store/features/mock/mockSlice';
import { Dream } from './types/Dream';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectMockUsers);
  const dreams = useAppSelector(selectMockDreams);
  const photos = useAppSelector(selectMockPhotos);

useEffect(() => {
  if (users && dreams && photos) {
    const data: Dream[] = [];

    for (let i = 0; i < 100; i++) {
      data.push({
        id: String(i),
        title: dreams[i]?.title,
        body: dreams[i]?.body,
        status: false,
        messages: [],
        userId: users[i]?.id,
        handler: null,
        photo: photos[i],
      });
    }

    dispatch(setMockData(data));
  }
  }, [dispatch, users, dreams, photos])

  return (
    <div>
      <Header />
      {user && <h1>{`Hello, ${user.name}!`}</h1>}

      <main>
        <Layout />
      </main>
    </div>
  );
}
