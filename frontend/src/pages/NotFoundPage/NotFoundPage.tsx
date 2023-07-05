import React from 'react';
import { ErrorPageLayout } from '../../components/layouts/ErrorPage.Layout/ErrorPage.Layout';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => 
  <ErrorPageLayout 
    title="Oops... This page does not exist!"
    body="Unfortunately, the page you are requesting does not exist. It may be outdated, deleted, or an incorrect address was specified."
    buttonTitle="Go to Home page"
  />

export default NotFoundPage;
