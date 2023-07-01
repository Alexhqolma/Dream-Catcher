import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
