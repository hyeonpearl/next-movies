import Head from 'next/head';

interface SeoProps {
  title?: string;
}

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <meta name='description' content='Simple Movie App' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
