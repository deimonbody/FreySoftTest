import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/types/enums';
import HomePage from '@/pages/HomePage';
import ExpensesPage from '@/pages/ExpensesPage';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.EXPENSES_PAGE} element={<ExpensesPage />} />
    </Routes>
  );
};

export default Routing;
