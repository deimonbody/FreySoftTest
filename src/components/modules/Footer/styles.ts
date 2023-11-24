import { styled } from '@mui/material';

interface IFooterItemProps {
  isActive: boolean;
}

export const FooterWrapper = styled('footer')(() => ({
  padding: '20px 27px',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.09)',
}));

export const FooterItem = styled('div')<IFooterItemProps>(({ isActive, theme }) => ({
  width: '32px',
  height: '32px',
  color: isActive ? theme.palette.primary.main : theme.palette.gray.dark,

  '& svg': {
    width: '32px',
    height: '32px',
  },
}));
