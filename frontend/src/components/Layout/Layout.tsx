import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
