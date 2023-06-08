import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import { PageNotFound } from './pages/pageNotFound';
import { RegistrationForm } from './pages/registrationForm';
import { HomePage } from './pages/homepage';
import { MyDreams } from './components/myDreams';
import { DreamItem } from './components/dreamItem';
import { Dreams } from './components/dreams';
import { Header } from './components/header';

import './App.scss';

export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dreams">
            <Route index element={<Dreams />} />
            <Route path=":slug" element={<DreamItem />} />
          </Route>
          <Route path="/myAccount" element={<MyDreams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}