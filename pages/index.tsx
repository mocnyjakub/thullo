import LoginForm from '@/components/organisms/LoginForm';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'login',
        'common',
      ])),
    },
  };
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Thullo - log in </title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default Home;
