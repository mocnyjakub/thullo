import LoginForm from '@/components/organisms/LoginForm';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login', 'common'])),
    },
  };
};

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Thullo</title>
      </Head>
      <main>
        <LoginForm />
        <p>{t('common:email_address')}</p>
      </main>
    </>
  );
};

export default Home;
