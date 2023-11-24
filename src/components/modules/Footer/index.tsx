import { Stack } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FooterWrapper, FooterItem } from './styles';
import { footerItems } from '@/constants';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <FooterWrapper>
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        {footerItems.map(({ id, Icon, path }) => (
          <FooterItem isActive={path === pathname || id === '3'} key={id} onClick={() => navigate(path)}>
            <Icon />
          </FooterItem>
        ))}
      </Stack>
    </FooterWrapper>
  );
};

export default Footer;
