import { styled, Stack, StackProps, Box, BoxProps } from '@mui/material';

export const MainLayoutStyled = styled(Stack)<StackProps>(() => ({
  height: '100%',
}));

export const Wrapper = styled(Box)<BoxProps>(() => ({
  flexGrow: 1,
  overflowY: 'auto',
  padding: '20px 10px 20px 10px',
}));
