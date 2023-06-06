import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { PageNotFound } from './components/pageNotFoun/PageNotFoun';
import { Home } from './components/home/Home';
import { MyWishes } from './components/myWishes/MyWishes';
import { WishItem } from './components/wishItem/WishItem';
import { Wishes } from './components/wishes/Wishes';
import { Header } from './components/header/Header';

export const App: React.FC = () => {

  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/wishes">
            <Route index element={<Wishes />} />
            <Route path=":phoneSlug" element={<WishItem />} />
          </Route>
          <Route path="/myAccount" element={<MyWishes />} />
        </Routes>
      </div>
    </>
  );
}