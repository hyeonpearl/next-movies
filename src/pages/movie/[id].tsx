import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <>
      <Seo title={'Detail'} />
      <main>
        <h1>Detail</h1>
      </main>
    </>
  );
};

export default Detail;
