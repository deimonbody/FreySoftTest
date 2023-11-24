import React from 'react';
import { Stack } from '@mui/material';

import DatePicker from './components/DatePicker';
import Charts from './components/Charts';
import { BlockTitle } from '@/components/styles';

const Analytics: React.FC = () => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <BlockTitle>Analytics</BlockTitle>
        <DatePicker />
      </Stack>
      <Charts />
    </Stack>
  );
};

export default Analytics;
