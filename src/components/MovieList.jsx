import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation()
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
