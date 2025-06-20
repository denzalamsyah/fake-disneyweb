import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";
import TvDetails from "../Pages/TvDetails";

function AppRoutes() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<Home />} />
      {/* Halaman detail film */}
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv/:id" element={<TvDetails />} />
    </Routes>
  );
}

export default AppRoutes;
