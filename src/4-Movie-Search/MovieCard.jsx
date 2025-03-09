function MovieCard({ movie }) {
  
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Rating: {movie.imdbRating}</p>
      <button>Add to Favorites</button>
    </div>
  );
}
export default MovieCard;
