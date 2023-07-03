import React from 'react';
import './NotFoundPage.scss';
import { CustomButton } from '../../components/UI/CustomButton/CustomButton';

const NotFoundPage: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="NotFoundPage">
        <h1 className="NotFoundPage__title">Oops... This page does not exist!</h1>
        <p className="NotFoundPage__text">
          Unfortunately, the page you are requesting does not exist. It may be outdated, deleted, or an incorrect address was specified.
        </p>
        <CustomButton
          to="/"
          tabIndex={7}
          className="custom-button--regular" 
        >
          Go to Home page
        </CustomButton>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default NotFoundPage;
