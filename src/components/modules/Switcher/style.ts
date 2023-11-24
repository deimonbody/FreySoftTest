import { styled } from '@mui/material';

interface ISwitcherItemProps {
  isActive: boolean;
}

export const SwitcherItem = styled('div')<ISwitcherItemProps>(({ isActive, theme }) => ({
  fontSize: '1.1rem',
  minWidth: '120px',
  textAlign: 'center',
  fontFamily: 'RobotoMedium',
  color: isActive ? theme.palette.white.main : '#615C5C',
  borderRadius: '64px',
  padding: '10px',
  backgroundColor: isActive ? theme.palette.blackBlue.main : theme.palette.gray.main,
}));
