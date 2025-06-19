import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";

function AppRoutes() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<Home />} />
      {/* Halaman detail film */}
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default AppRoutes;
