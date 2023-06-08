import { Header } from './components/header';
import { Layout } from './components/Layout';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <Layout />
      </main>
    </div>
  );
}
