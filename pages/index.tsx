import LoginForm from '@/components/organisms/LoginForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
}
