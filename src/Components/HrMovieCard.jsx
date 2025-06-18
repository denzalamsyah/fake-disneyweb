import React from "react";

function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-100 ease-in cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] 
        border-gray-400 "
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
