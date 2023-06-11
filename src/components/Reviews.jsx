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
            setRevievs(movieRevievs.results);
        } catch (error) {
            console.error(error);
        }};
        getMovieRevievs();
    }, [movieId]);

    return (
        <div>
            <ul>
                {revievs && revievs.map(reviev => (
                    <li key={reviev.id}>
                        author : {reviev.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Revievs