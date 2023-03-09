import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/theme';
import { Inter } from 'next/font/google';
import { trpc } from '@/utils/trpc';
import { TourProvider } from '@reactour/tour';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <TourProvider
      steps={[]}
      styles={{
        popover: (base) => ({
          ...base,
          borderRadius: '8px',
          fontFamily: 'inter',
        }),
        highlightedArea: (base) => ({
          ...base,
          borderRadius: '8px',
          zIndex: 99,
        }),
      }}
    >
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
    </TourProvider>
  );
}

export default trpc.withTRPC(App);
