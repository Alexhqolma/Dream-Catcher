import { Header } from './components/Header';
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
