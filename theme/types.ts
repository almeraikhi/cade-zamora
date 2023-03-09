export type Palette = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

export type Theme = {
  palette: {
    primary: Palette;
    warning: Palette;
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      default: string;
      paper: string;
    };
    gray: {
      '6': string;
    };
    error: {
      main: string;
      contrastText: string;
    };
  };
  zIndex: {
    modal: 1300;
    backdrop: 1200;
    appBar: 1000;
  };
};
