import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import Seo from '@/components/Seo';

interface Params {
  params: {
    params: [title: string, id: string];
  };
}

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export async function getServerSideProps({ params: { params } }: Params) {
  return {
    props: { params },
  };
}
