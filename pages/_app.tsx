import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/theme';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <main
        className={inter.className}
        style={{
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: '100vh',
        }}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
