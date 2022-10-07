import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Dynamic: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div>Page {id}</div>
    </>
  );
};

export default Dynamic;
