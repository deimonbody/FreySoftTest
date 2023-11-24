import { CustomCalendar } from '@/components/styles';
import dayjs from 'dayjs';
import React from 'react';

const Calendar: React.FC = () => {
  return <CustomCalendar defaultValue={dayjs()} />;
};

export default Calendar;
