import { fetchMovieCredits } from 'API/getSearchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams()

    useEffect(() => {
        const getMovieCast = async () => {
        try {
            const movieCast = await fetchMovieCredits(movieId);
            setCast(movieCast);
            console.log(cast)
        } catch (error) {
            console.error(error);
        }};
        getMovieCast();
    }, []);

    return (
        <div>
            <p>інформація про акторський склад</p>
        </div>
    )
}

export default Cast