import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { useAppSelector } from './store/hooks';
import { selectUser } from './store/features/user/userSlice';

import './App.scss';

export const App: React.FC = () => {
  const user = useAppSelector(selectUser);

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
