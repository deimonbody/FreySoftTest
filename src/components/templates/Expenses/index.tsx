import Analytics from '@/components/modules/Analytics';
import Switcher from '@/components/modules/Switcher';
import Transactions from '@/components/modules/Transactions';
import { Stack, Box } from '@mui/material';
import React from 'react';
import Calendar from './components/Calendar';

const ExpensesPageTemplate: React.FC = () => {
  return (
    <Stack>
      <Switcher />
      <Box mt={4}>
        <Calendar />
      </Box>
      <Box mt={4}>
        <Analytics />
      </Box>
      <Box mt={4}>
        <Transactions />
      </Box>
    </Stack>
  );
};

export default ExpensesPageTemplate;
