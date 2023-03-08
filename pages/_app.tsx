import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/theme';
import { Inter } from 'next/font/google';
import { trpc } from '@/utils/trpc';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <main
        className={inter.className}
        style={{
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: '100%',
        }}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default trpc.withTRPC(App);
