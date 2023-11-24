import { Stack } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/types/enums';
import { SwitcherItem } from './style';

const Switcher: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <SwitcherItem isActive={pathname === ROUTES.HOME} onClick={() => navigate(ROUTES.HOME)}>
        Cards
      </SwitcherItem>
      <SwitcherItem isActive={pathname === ROUTES.EXPENSES_PAGE} onClick={() => navigate(ROUTES.EXPENSES_PAGE)}>
        Calendar
      </SwitcherItem>
    </Stack>
  );
};

export default Switcher;
