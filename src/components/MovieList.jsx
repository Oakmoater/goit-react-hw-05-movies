import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation()
  const baseUrl = "https://image.tmdb.org/t/p"
  const posterSize = "w200"

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img src=
              {`${baseUrl}/${posterSize}${movie.poster_path}`}
              alt="" />
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
