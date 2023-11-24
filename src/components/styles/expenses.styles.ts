import { styled } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

export const CustomCalendar = styled(DateCalendar)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
  width: '100%',
  borderRadius: '21px',
  '& .Mui-selected': {
    color: '#fff !important',
  },
}));
