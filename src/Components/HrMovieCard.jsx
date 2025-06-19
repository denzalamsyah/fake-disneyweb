import React from "react";
import { Link } from "react-router-dom";

function HrMovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="hover:scale-110 transition-all duration-100 ease-in cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 text-[12px] md:text-sm">
        {movie.title}
      </h2>
    </Link>
  );
}

export default HrMovieCard;
