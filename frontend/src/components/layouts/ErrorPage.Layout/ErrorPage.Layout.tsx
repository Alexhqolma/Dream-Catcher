import React from 'react';

import { ButtonStyle, CustomButton } from '../../UI/CustomButton/CustomButton';

import './ErrorPage.Layout.scss';

interface ErrorPageLayoutProps {
  title?: string;
  body?: string;
  buttonTitle?: string;
}

export const ErrorPageLayout: React.FC<ErrorPageLayoutProps> = ({
  title,
  body,
  buttonTitle = 'Back',
}) => {
  return (
    <main className="ErrorPageLayout">
      <h1 className="ErrorPageLayout__title">{title}</h1>
      
      <p className="ErrorPageLayout__text">{body}</p>

      <CustomButton
        to="/"
        tabIndex={7}
        buttonStyle={ButtonStyle.BOX}
      >
        {buttonTitle}
      </CustomButton>
    </main>
  );
};
