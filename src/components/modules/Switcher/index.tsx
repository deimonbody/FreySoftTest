import { Stack } from '@mui/material';
import React from 'react';
import { SwitcherItem } from './style';

const Switcher: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <SwitcherItem isActive={true}>Cards</SwitcherItem>
      <SwitcherItem isActive={false}>Calendar</SwitcherItem>
    </Stack>
  );
};

export default Switcher;
