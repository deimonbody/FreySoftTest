import { createTheme } from '@mui/material';
import RobotoBold from '@/assets/fonts/Roboto-Bold.ttf';
import RobotoMedium from '@/assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from '@/assets/fonts/Roboto-Regular.ttf';

declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
    gray: Palette['primary'];
    blackBlue: Palette['primary'];
    white: Palette['primary'];
  }
  interface PaletteOptions {
    green?: PaletteOptions['primary'];
    gray?: PaletteOptions['primary'];
    blackBlue?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['RobotoBold', 'RobotoMedium', 'RobotoRegular'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'RobotoBold';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: local('Raleway'), local('Raleway-Regular'), url(${RobotoBold}) format('woff2');
            }
            @font-face {
              font-family: 'RobotoMedium';
              font-style: normal;
              font-display: swap;
              font-weight: 500;
              src: local('Raleway'), local('Raleway-Regular'), url(${RobotoMedium}) format('woff2');
            }
            @font-face {
              font-family: 'RobotoRegular';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Raleway'), local('Raleway-Regular'), url(${RobotoRegular}) format('woff2');
            }
          `,
    },
  },
  palette: {
    primary: {
      main: '#FF643B',
    },
    secondary: {
      main: '#9A63FB',
    },
    green: {
      main: '#2BB272',
    },
    gray: {
      main: '#FAFAFA',
      dark: '#A3A3A3',
    },
    blackBlue: {
      main: '#2F3046',
    },
    white: {
      main: '#fff',
    },
  },
});

export default theme;
