import { Stack } from '@mui/material';
import React from 'react';
import { BlockSmallText, BlockTitle } from '@/components/styles';
import { transactionsData } from '@/constants';
import TransactionItem from './components/TransactionItem';

const Transactions: React.FC = () => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <BlockTitle>Transactions</BlockTitle>
        <BlockSmallText>View All</BlockSmallText>
      </Stack>
      <Stack gap={2}>
        {transactionsData.map((el) => (
          <TransactionItem transaction={el} key={el.id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Transactions;
