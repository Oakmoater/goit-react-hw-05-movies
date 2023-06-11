import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODBjYWExOTNmYThjNjdkM2IzNjAxNTU5ZjI3ZjVjOCIsInN1YiI6IjY0MzZmYjNkOTQ2MzE4MDA5YTJlNWJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPu6W8tbG8flf6ruZ_S92c8XdiohS5SHkBe3jEgG81I';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Запит на отримання загальних трендів
export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );
    // console.log(response.data) // в консоль результат
    return (response.data);
  } catch (error) {
    console.error(error);
  }
};

// Запит на пошук фільмів за запитом
export const searchMovies = async (query) => {
  try {
    const formattedQuery = encodeURIComponent(query);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${formattedQuery}&include_adult=false&language=en-US&page=1`,
      options
    );
    // console.log(response.data); // в консоль результат
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Запит на отримання деталей конкретного фільму
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    // console.log(response.data) // в консоль результат
    return (response.data);
  } catch (error) {
    console.error(error);
  }
};

// Запит на отримання акторського складу фільму
export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    console.log(response.data) // в консоль результат
    return (response.data);
  } catch (error) {
    console.error(error);
  }
};

// Запит на отримання відгуків про фільм
export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    console.log(response.data) // в консоль результат
    return (response.data);
  } catch (error) {
    console.error(error);
  }
};