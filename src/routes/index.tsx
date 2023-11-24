import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/types/enums';
import HomePage from '@/pages/HomePage';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default Routing;
