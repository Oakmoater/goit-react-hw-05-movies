import { fetchMovieDetails } from "API/getSearchMovies";
import { useLocation, Link, Outlet , useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Movie = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams()
    const location = useLocation()
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
        const getMovieDetails = async () => {
        try {
            const movieDetails = await fetchMovieDetails(movieId);
            setMovie(movieDetails);
            // console.log(location) // lokation log
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
                <Link to={backLinkHref}>Back</Link>
            </button>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            {/* Додайте інші деталі фільму, які ви хочете відобразити */}
            <ul>
                <li>
                    <Link to={'cast'}>інформація про акторський склад</Link>
                </li>
                <li>
                    <Link to={'reviews'}>інформація про огляди</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Movie