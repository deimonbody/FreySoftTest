import React from 'react';
import HomePageTemplate from '@/components/templates/Home';
import MainLayout from '@/components/layouts/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout pageTitle="Home">
      <HomePageTemplate />
    </MainLayout>
  );
};

export default HomePage;
