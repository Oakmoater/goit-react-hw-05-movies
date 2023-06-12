import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "API/getSearchMovies";
import MovieList from "components/MovieList";

function Search() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get("query") ?? "";

    useEffect(() => {
    if (queryValue === "") {
        setMovies([])
        return
    };

    async function fetchMovies() {
        try {
        const searchResults = await searchMovies(queryValue);
        setMovies(searchResults.results);
        } catch (error) {
        console.error(error);
        }
    }

    fetchMovies();
    }, [searchParams, queryValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newQueryValue = form.elements.query.value;
        setSearchParams({ query: newQueryValue });
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" defaultValue={queryValue} />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </main>
    );
}

export default Search;
