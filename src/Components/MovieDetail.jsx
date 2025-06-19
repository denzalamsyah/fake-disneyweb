import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Services/api";
import CastList from "./CastList";
import MovieList from "./MovieList";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await api.get(`/movie/${id}`);
      setMovie(res.data);
    };

    const fetchCast = async () => {
      const res = await api.get(`/movie/${id}/credits`);
      setCast(res.data.cast); //ambil 6 cast
    };
    fetchMovie();
    fetchCast();
    window.scrollTo(0, 0);
  }, [id]);

  const sliderRight = (element) => {
    element.scrollLeft += 800;
    // element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
    // element.scrollLeft -= screenWidth - 110;
  };
  if (!movie)
    return (
      <div className="text-white text-center pt-50 text-2xl">Loading...</div>
    );

  return (
    <div className="text-white px-4 md:px-10 py-10 pt-30 md:pt-40">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10 md:mb-20 md:justify-center">
        {/* Poster Image */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[100%] md:w-[400px] object-cover rounded-2xl cursor-pointer"
        />
        {/* Detail */}
        <figcaption className="md:w-1/2 w-full">
          <h2 className="text-xl md:text-5xl font-bold mb-5 md:mb-8">
            {movie.title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 md:mb-8">
            <li className="flex gap-2 font-bold p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">Release :</span>
              <p className="font-normal">{movie.release_date}</p>
            </li>
            <li className="flex gap-2 font-bold p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">Duration :</span>
              <p className="font-normal">{movie.runtime} min</p>
            </li>
            <li className="flex gap-2 font-bold p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">Popularity :</span>
              <p className="font-normal">{movie.popularity}</p>
            </li>
            <li className="flex gap-2 text-gray-300 font-bold p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">Genres :</span>
              <p className="font-normal">
                {movie.genres.map((g) => g.name).join(", ")}
              </p>
            </li>
            <li className="flex gap-2 text-gray-300 font-bold col-span-full md:col-span-2 p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">
                Production Countries :
              </span>
              <p className="font-normal">
                {movie.production_countries.map((c) => c.name).join(", ")}
              </p>
            </li>
            <li className="flex gap-2 text-gray-300 font-bold col-span-full md:col-span-2 p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">
                Production Companies :
              </span>
              <p className="font-normal">
                {movie.production_companies.map((c) => c.name).join(", ")}
              </p>
            </li>
            <li className="flex gap-2 text-gray-300 font-bold col-span-full md:col-span-2 p-2 bg-gray-800">
              <span className="whitespace-nowrap w-fit">Language :</span>
              <p className="font-normal">
                {movie.spoken_languages.map((l) => l.english_name).join(", ")}
              </p>
            </li>
          </ul>
          <p className="mb-6 text-justify text-gray-300 font-bold">
            {movie.overview}
          </p>
          <p className="italic text-sm text-gray-400">"{movie.tagline}"</p>
        </figcaption>
      </div>

      <h2 className="text-lg md:text-2xl text-center font-semibold mb-3">
        Top Cast
      </h2>
      <div className="relative bg-gray-900 rounded-lg mb-10 md:mb-20">
        <HiChevronLeft
          className={`hidden md:block mt-[330px] text-white text-4xl absolute z-[10] cursor-pointer left-0
               
              }`}
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className={`hidden md:block mt-[330px] text-white text-4xl absolute z-[10] cursor-pointer right-0
              }`}
          onClick={() => sliderRight(elementRef.current)}
        />
        <div
          ref={elementRef}
          className="grid md:grid-rows-2 grid-flow-col gap-8 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
        >
          {cast.map((item) => (
            <CastList person={item} key={item.id} />
          ))}
        </div>
      </div>

      <h2 className="text-lg md:text-2xl text-center font-semibold mb-3">
        Similar Movies
      </h2>
      <MovieList />
    </div>
  );
}

export default MovieDetail;
