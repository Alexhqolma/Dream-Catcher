import { Header } from './components/Header';
import { Layout } from './components/Layout';
import './App.scss';
import { useAppSelector } from './store/hooks';
import { selectUser } from './store/features/user/userSlice';

export const App: React.FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <div>
      {user && <h1>{`Hello, ${user.name}!`}</h1>}

      <Header />

      <main>
        <Layout />
      </main>
    </div>
  );
}
