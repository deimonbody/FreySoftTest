import React from 'react';
import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import { MainLayoutStyled, Wrapper } from './styles';

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
