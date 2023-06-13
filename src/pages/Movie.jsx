import { fetchMovieDetails } from "API/getSearchMovies";
import { useLocation, Link, Outlet , useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';

const Movie = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams()
    const location = useLocation()
    const backLinkHref = useRef(location.state?.from ?? "/movies");
    const baseUrl = "https://image.tmdb.org/t/p"
    const posterSize = "w300"

    useEffect(() => {
        const getMovieDetails = async () => {
        try {
            const movieDetails = await fetchMovieDetails(movieId);
            setMovie(movieDetails);
        } catch (error) {
            console.error(error);
        }};
        getMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button>
                <Link to={backLinkHref.current}>Back</Link>
            </button>
            <img src=
              {`${baseUrl}/${posterSize}${movie.poster_path}`}
              alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <ul>
                <li>
                    <Link to="cast">інформація про акторський склад</Link>
                </li>
                <li>
                    <Link to="reviews">інформація про огляди</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Movie