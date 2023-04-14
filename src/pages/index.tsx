import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie>();

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/movies`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <Seo title={'Home'} />
      <main>
        {!movies && <h4>Loading...</h4>}
        {movies?.map(movie => (
          <div
            key={movie.id}
            onClick={() => {
              router.push({
                pathname: 'movie/[id]',
                query: { id: movie.id },
              });
            }}
          >
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </main>
    </>
  );
}
