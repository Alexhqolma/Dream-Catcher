import { Outlet } from 'react-router-dom';
import { Header } from './components/header';

import './App.scss';

export const App: React.FC = () => {

  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
