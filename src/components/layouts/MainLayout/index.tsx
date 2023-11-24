import React from 'react';
import Footer from '@/components/modules/Footer';
import { MainLayoutStyled, Wrapper } from './styles';
import Header from '@/components/modules/Header';

interface IProps {
  children: JSX.Element | JSX.Element[];
  pageTitle: string;
}

const MainLayout: React.FC<IProps> = ({ children, pageTitle }) => {
  return (
    <MainLayoutStyled direction="column">
      <Wrapper>
        <Header pageTitle={pageTitle} />
        {children}
      </Wrapper>
      <Footer />
    </MainLayoutStyled>
  );
};

export default MainLayout;
