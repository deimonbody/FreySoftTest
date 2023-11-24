import React from 'react';
import { Stack } from '@mui/material';
import { ITransaction } from '@/types/interfaces';
import { BlockSmallText } from '@/components/styles';
import { TransactionItemImg, TransactionItemPrice, TransactionItemTitle, TransactionItemWrapper } from '../styles';

interface IProps {
  transaction: ITransaction;
}

const TransactionItem: React.FC<IProps> = ({ transaction }) => {
  return (
    <TransactionItemWrapper>
      <Stack direction="row" alignItems="center">
        <TransactionItemImg>
          <img src={transaction.imgSrc} alt="transaction" />
        </TransactionItemImg>
        <Stack>
          <TransactionItemTitle>{transaction.title}</TransactionItemTitle>
          <BlockSmallText>{transaction.subTitle}</BlockSmallText>
        </Stack>
        <Stack ml="auto" alignItems="flex-end">
          <TransactionItemPrice>{transaction.price}</TransactionItemPrice>
          <BlockSmallText>{transaction.date}</BlockSmallText>
        </Stack>
      </Stack>
    </TransactionItemWrapper>
  );
};

export default TransactionItem;
