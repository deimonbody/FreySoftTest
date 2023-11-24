import { Box, Stack } from '@mui/material';
import React from 'react';

import Switcher from '@/components/modules/Switcher';
import Card from './components/Card';
import Analytics from '@/components/modules/Analytics';
import Transactions from '@/components/modules/Transactions';

const HomePageTemplate: React.FC = () => {
  return (
    <Stack>
      <Switcher />
      <Box mt={4}>
        <Card />
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

export default HomePageTemplate;
