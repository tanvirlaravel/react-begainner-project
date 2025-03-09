import { mockMovies } from './mockMovies';

import MovieList from './MovieList';
import SearchBox from './SearchBox';
import './style.css';

function AppMovieSearch() {
  return (
    <div>
      <h1>AppMovieSearch</h1>
      <SearchBox />
      <MovieList movies={mockMovies} />
     
    </div>
  );
}
export default AppMovieSearch;
