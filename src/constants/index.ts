/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import NikeSrc from '@/assets/images/nike.jpg';
import PumaSrc from '@/assets/images/puma.jpg';
import { ROUTES } from '@/types/enums';
import { ITransaction } from '@/types/interfaces';

export const footerItems = [
  {
    id: '1',
    Icon: HomeIcon,
    path: ROUTES.HOME,
  },
  {
    id: '2',
    Icon: CreditCardIcon,
    path: ROUTES.EXPENSES_PAGE,
  },
  {
    id: '3',
    Icon: AddCircleIcon,
    path: '',
  },
  {
    id: '4',
    Icon: CalendarTodayIcon,
    path: '',
  },
  {
    id: '5',
    Icon: SettingsIcon,
    path: '',
  },
];

export const chartsData = [1234, 2234, 5234, 2234, 1000, 2900, 3900];
export const analyticsOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
    datalabels: {
      color: ['#A3A3A3', '#A3A3A3', '#8234F8 ', '#A3A3A3', '#A3A3A3', '#A3A3A3', '#A3A3A3'],
      font: {
        family: 'RobotoBold',
        size: 14,
      },
      anchor: 'end' as any, // BUG WITH LIBRARY
      align: 'top' as any, // BUG WITH LIBRARY
      formatter(value: number) {
        return `$${value}`;
      },
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      display: false,
    },
  },
};
export const analyticsLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
export const analyticsData = {
  labels: analyticsLabels,
  datasets: [
    {
      data: chartsData,
      backgroundColor: ['#FAFAFA', '#FAFAFA', '#8234F8 ', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA'],
      borderRadius: 6,
    },
  ],
};

export const transactionsData: ITransaction[] = [
  {
    id: '1',
    title: 'Nike Super Store',
    subTitle: 'Bank Account',
    date: 'Fri, 05 April 2022',
    price: '$475',
    imgSrc: NikeSrc,
  },
  {
    id: '2',
    title: 'Puma Store',
    subTitle: 'Bank Account',
    date: 'Fri, 05 April 2022',
    price: '$952',
    imgSrc: PumaSrc,
  },
];
