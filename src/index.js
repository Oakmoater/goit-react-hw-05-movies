import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";

// import { fetchTrending, searchMovies, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews } from 'API/getSearchMovies';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// // '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// console.log(fetchTrending());
// fetchTrending()

// // '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// searchMovies('batman');

// // '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// fetchMovieDetails(1003579);

// // /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// fetchMovieCredits(1003579);

// // /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
// fetchMovieReviews(1003579);