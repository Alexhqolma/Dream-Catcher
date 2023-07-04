import React from 'react';

import { CustomButton } from '../../components/UI/CustomButton/CustomButton';

import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
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
);
};

export default NotFoundPage;
