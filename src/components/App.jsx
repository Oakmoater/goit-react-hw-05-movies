import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import Home from "pages/Home";
import Search from "pages/Search";
import Movie from "pages/Movie";
import Cast from "./Cast";
import Revievs from "./Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Search />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Revievs />} />
        </Route>
      </Route>
    </Routes>
  );
};
