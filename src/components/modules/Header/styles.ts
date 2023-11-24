import { styled } from '@mui/material';

export const UserAvatar = styled('div')(({ theme }) => ({
  borderRadius: '6px',
  width: '43px',
  height: '43px',
  padding: '5px',
  backgroundColor: theme.palette.secondary.main,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const PageName = styled('p')(() => ({
  fontFamily: 'RobotoMedium',
  fontSize: '1.4rem',
}));

export const Notification = styled('div')(({ theme }) => ({
  width: '28px',
  height: '28px',
  position: 'relative',
  '& svg': {
    width: '28px',
    height: '28px',
  },
  '&::after': {
    position: 'absolute',
    width: '10px',
    height: '10px',
    content: '""',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    top: '3px',
    right: '2px',
  },
}));
