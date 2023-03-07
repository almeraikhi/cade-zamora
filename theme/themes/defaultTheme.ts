import { Theme } from '../types';

export const defaultTheme: Theme = {
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.87)',
      light: 'rgba(0, 0, 0, 0.87)',
      dark: 'rgba(0, 0, 0, 0.87)',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.60)',
    },
    background: {
      default: '#F8F8FA',
      paper: '#ffffff',
    },
    gray: {
      '6': '#000000',
    },
    error: {
      main: '#E81123',
      contrastText: '#fff',
    },
  },
  zIndex: {
    modal: 1300,
    backdrop: 1200,
    appBar: 1000,
  },
};
