import React from 'react';
import { Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CardBalance, CardNumber, CardTitle, CardWrapper, MasterCardStyles } from '@/components/styles';
import masterCardSrc from '@/assets/images/mastercard.png';

const Card: React.FC = () => {
  return (
    <CardWrapper>
      <Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <CardTitle>Total Balance</CardTitle>

          <MoreHorizIcon sx={{ color: '#fff' }} />
        </Stack>
        <CardBalance>$76,22.00</CardBalance>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={4}>
          <CardNumber>2544 7545 3785 1023</CardNumber>
          <MasterCardStyles>
            <img src={masterCardSrc} alt="mastercard" />
          </MasterCardStyles>
        </Stack>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
