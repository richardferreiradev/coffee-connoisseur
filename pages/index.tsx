import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
        <div className={styles.heroImage}>
          <Image
            alt="hero-image"
            src="/static/hero-image.png"
            width={700}
            height={400}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
