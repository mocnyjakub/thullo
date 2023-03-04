import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="h-screen bg-gray-50">
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(App);
