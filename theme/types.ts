export type Palette = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

export type Theme = {
  palette: {
    primary: Palette;
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
  };
  zIndex: {
    modal: 1300;
    backdrop: 1200;
    appBar: 1000;
  };
};
