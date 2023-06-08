import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage/HomePage'));
export const LoginPage = lazy(() => import('./LoginPage/LoginPage'));
export const RegistrationPage = lazy(() => import('./RegistrationPage/RegistrationPage'));
export const DreamsPage = lazy(() => import('./DreamsPage/DreamsPage'));
export const DreamPage = lazy(() => import('./DreamPage/DreamPage'));
export const UserPage = lazy(() => import('./UserPage/UserPage'));
export const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
