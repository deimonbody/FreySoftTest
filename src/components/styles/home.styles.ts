import { styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const CardWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.blackBlue.main,
  padding: '22px 29px',
  borderRadius: '24px',
}));

export const CardTitle = styled('p')(({ theme }) => ({
  fontFamily: 'RobotoMedium',
  fontSize: '1.2rem',
  color: theme.palette.white.main,
}));

export const CardBalance = styled('p')(({ theme }) => ({
  fontFamily: 'RobotoBold',
  fontSize: '1.8rem',
  color: theme.palette.white.main,
  marginTop: '16px',
}));

export const CardNumber = styled('p')(({ theme }) => ({
  fontFamily: 'RobotoMedium',
  fontSize: '1.2rem',
  color: theme.palette.gray.dark,
}));

export const MasterCardStyles = styled('div')(() => ({
  width: '47px',
  height: '29px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiInputBase-root': {
    width: '120px',
    borderRadius: '12px',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    fontSize: '0.9rem',
    fontFamily: 'RobotoRegular',
  },
  '& .MuiButtonBase-root': {
    '& svg': {
      color: '#fff',
      width: '20px',
      height: '20px',
    },
  },
  '& fieldset': {
    border: '0px',
  },
}));
