import { fetchMovieReviews } from 'API/getSearchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Revievs() {
    const [revievs, setRevievs] = useState(null);
    const { movieId } = useParams()

    useEffect(() => {
        const getMovieRevievs = async () => {
        try {
            const movieRevievs = await fetchMovieReviews(movieId);
            setRevievs(movieRevievs);
            console.log(revievs)
        } catch (error) {
            console.error(error);
        }};
        getMovieRevievs();
    }, [movieId]);

    return (
        <div>
            <p>інформація про огляди</p>
        </div>
    )
}

export default Revievs