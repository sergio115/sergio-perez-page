import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { ThemeUiProvider } from '../context/theme-ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeUiProvider>
      <Component {...pageProps} />
    </ThemeUiProvider>
  );
}

export default MyApp;
