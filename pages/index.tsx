import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

import { Card } from '@components/Card';
import { Banner } from '@components/Banner';

import coffeeStores from '../data/coffee-stores.json';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      coffeeStores,
    },
  };
};

const Home: NextPage = ({ coffeeStores }: any) => {
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
        <div className={styles.cardLayout}>
          {coffeeStores.map((store: any) => {
            return (
              <Card
                key={store.id}
                href={`/coffee-store/${store.id}`}
                title={store.name}
                className={styles.card}
                imgUrl={store.imgUrl}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
