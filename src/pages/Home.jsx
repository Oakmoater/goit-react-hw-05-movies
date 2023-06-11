import { useState, useEffect } from "react";
import { fetchTrending } from "API/getSearchMovies";
import MovieList from "components/MovieList";

function Home () {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
    try {
        const trendingMovies = await fetchTrending();
        setMovies(trendingMovies.results);
        // return trendingMovies.results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

useEffect(() => {
    fetchMovies()
}, []);

    return (
        <>
            <MovieList movies={movies} />
        </>
    )
};

export default Home