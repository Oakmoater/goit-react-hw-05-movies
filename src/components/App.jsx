import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
const Home = lazy(() => import("pages/Home"));
const Search = lazy(() => import("pages/Search"));
const Movie = lazy(() => import("pages/Movie"));
const Cast = lazy(() => import("./Cast"));
const Revievs = lazy(() => import("./Reviews"));

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
