import { useEffect, useState } from 'react';
import { mockMovies } from './mockMovies';
import { API_KEY, BASE_URL, keyword, page } from './CONST_VALUE';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import './style.css';

function AppMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalMovie, setTotalMovie] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?apikey=${API_KEY}&s=${keyword}&page=${page}`
        );
        const data = await response.json();
        setTotalMovie(data.totalResults);
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [keyword, page]);

  if (movies) {
    console.log('movies', movies);
  }

  return (
    <div>
      <h1>AppMovieSearch</h1>
      <SearchBox />
      <h2>Showing movies {movies.length} of total: {totalMovie}</h2>
      <MovieList movies={movies} />
    </div>
  );
}
export default AppMovieSearch;
