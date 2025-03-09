import { useEffect, useState } from 'react';
import { mockMovies, omdbApiMovies } from './mockMovies';
import { API_KEY, BASE_URL, keyword } from './CONST_VALUE';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import './style.css';

function AppMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalMovie, setTotalMovie] = useState(0);
  
  const [page, setPage] = useState(2);

  useEffect(() => {
    setIsLoading(true);
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

    // fetchData();

    setTimeout(() => {
      setTotalMovie(omdbApiMovies.totalResults);
      setMovies(omdbApiMovies.Search);
      setIsLoading(false);
    }, 1000);
  }, [keyword, page]);

  return (
    <div>
      <h1>AppMovieSearch</h1>

      <SearchBox />

     

      {isLoading && <h2>Loading...</h2>}

      {!isLoading && (
        <>
          <h2>
            Showing movies {movies.length} of total: {totalMovie}
          </h2>
          <MovieList movies={movies} />
        </>
      )}
    </div>
  );
}
export default AppMovieSearch;
