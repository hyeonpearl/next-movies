import Seo from '@/components/Seo';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie>();

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
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </main>
    </>
  );
}
