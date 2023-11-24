import { styled } from '@mui/material';

export const BlockTitle = styled('p')(() => ({
  fontFamily: 'RobotoMedium',
  fontSize: '1.6rem',
}));

export const BlockSmallText = styled('p')(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.gray.dark,
  fontFamily: 'RobotoRegular',
}));
