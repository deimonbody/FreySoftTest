import MainLayout from '@/components/layouts/MainLayout';
import ExpensesPageTemplate from '@/components/templates/Expenses';
import React from 'react';

const ExpensesPage: React.FC = () => {
  return (
    <MainLayout pageTitle="Expenses">
      <ExpensesPageTemplate />
    </MainLayout>
  );
};

export default ExpensesPage;
