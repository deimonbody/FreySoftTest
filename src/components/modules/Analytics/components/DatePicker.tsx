import React from 'react';
import dayjs from 'dayjs';
import { StyledDatePicker } from '@/components/styles';

const DatePicker: React.FC = () => {
  return <StyledDatePicker format="YYYY" views={['year']} defaultValue={dayjs().year(2023)} />;
};

export default DatePicker;
