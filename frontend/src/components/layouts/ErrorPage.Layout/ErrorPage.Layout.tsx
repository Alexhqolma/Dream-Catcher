import React from 'react';

import { CustomButton } from '../../UI/CustomButton/CustomButton';

import './ErrorPage.Layout.scss';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const onCLickHandler = () => navigate(-1);

  return (
    <main className="ErrorPageLayout">
      <h1 className="ErrorPageLayout__title">{title}</h1>
      
      <p className="ErrorPageLayout__text">{body}</p>

      <CustomButton tabIndex={7} onClick={onCLickHandler} title={buttonTitle} />
    </main>
  );
};
