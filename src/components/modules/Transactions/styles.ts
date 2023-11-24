import { styled } from '@mui/material';

export const TransactionItemWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
  borderRadius: '10px',
  padding: '10px',
}));

export const TransactionItemImg = styled('div')(() => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  marginRight: '16px',
  '& img': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));

export const TransactionItemTitle = styled('p')(() => ({
  fontSize: '1.2rem',
  fontFamily: 'RobotoMedium',
}));

export const TransactionItemPrice = styled('p')(({ theme }) => ({
  color: theme.palette.green.main,
  fontSize: '1.3rem',
  fontFamily: 'RobotoMedium',
}));
