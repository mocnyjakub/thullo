import LoginForm from '@/components/organisms/LoginForm';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Thullo - Log in</title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default Home;
