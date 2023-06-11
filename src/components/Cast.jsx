import { fetchMovieCredits } from 'API/getSearchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
    const [casts, setCast] = useState([]);
    const { movieId } = useParams()

    useEffect(() => {
        const getMovieCast = async () => {
        try {
            const movieCast = await fetchMovieCredits(movieId);
            setCast(movieCast.cast);
        } catch (error) {
            console.error(error);
        }};
        getMovieCast();
    }, [movieId]);

    return (
        <div>
            <ul>
                {casts && casts.map(cast => (
                    <li key={cast.id}>
                        character : {cast.character} name: {cast.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cast