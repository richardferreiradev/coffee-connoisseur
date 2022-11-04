import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import coffeeStoreData from '../../data/coffee-stores.json';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      coffeeStore: coffeeStoreData.find(
        (coffeeStore) => `${coffeeStore.id}` === params!.id,
      ),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = coffeeStoreData.map((store) => {
    return { params: { id: `${store.id}` } };
  });
  return {
    paths,
    fallback: false,
  };
};

const CoffeeStorePage: NextPage = ({ coffeeStore }: any) => {
  const router = useRouter();
  const { name, address, neighborhood } = coffeeStore;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>{name}</h1>
      <h3>{address}</h3>
      <p>{neighborhood}</p>
      <Link href={'/'}>
        <a>Click here to go back to home</a>
      </Link>
    </>
  );
};

export default CoffeeStorePage;
