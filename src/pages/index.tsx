import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '@/components/Seo';

import styles from '@/styles/Home.module.scss';

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <>
      <Seo title={'Home'} />
      <main className={styles.container}>
        {results?.map((movie: Movie) => (
          <div key={movie.id} className={styles.movie}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt='thumbnail'
            />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
