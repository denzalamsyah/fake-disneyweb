import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";
import TvDetails from "../Pages/TvDetails";
import CastDetails from "../Pages/CastDetails";
import PersonDetails from "../Pages/PersonDetails";
import SearchPage from "../Pages/SearchPage";
import MovieListPages from "../Pages/MovieListPages";
import TVListPages from "../Pages/TVListPages";
import PersonListPage from "../Pages/PersonListPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<Home />} />
      {/* Halaman detail film */}

      <Route path="/movie" element={<MovieListPages />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv" element={<TVListPages />} />
      <Route path="/tv/:id" element={<TvDetails />} />
      <Route path="/cast/:id" element={<CastDetails />} />
      <Route path="/person" element={<PersonListPage />} />
      <Route path="/person/:id" element={<PersonDetails />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default AppRoutes;
