import { ProviderAuth } from 'hooks/useAuth';
import MainLayaout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayaout>
          <Component {...pageProps} />
        </MainLayaout>
      </ProviderAuth>
      
    </>
  );
}

export default MyApp;
