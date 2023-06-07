import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import { PageNotFound } from './pages/pageNotFound';
import { HomePage } from './pages/homepage';
import { MyWishes } from './components/myWishes';
import { WishItem } from './components/wishItem';
import { Wishes } from './components/wishes';
import { Header } from './components/header';

import './App.css';

export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/wishes">
            <Route index element={<Wishes />} />
            <Route path=":phoneSlug" element={<WishItem />} />
          </Route>
          <Route path="/myAccount" element={<MyWishes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}