import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Find your local coffee stores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          handleOnClick={() => console.log('this works!')}
          buttonText="View stores nearby"
        ></Banner>
      </main>
    </div>
  );
};

export default Home;
