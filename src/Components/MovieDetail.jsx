import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Services/api";
import CastList from "./CastList";
import MovieList from "./MovieList";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { MdOutlineScreenShare } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const elementRef = useRef();
  const [fav, setFav] = useState(false);

  // request API
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

  // tombol slide
  const sliderRight = (element) => {
    element.scrollLeft += 800;
    // element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
    // element.scrollLeft -= screenWidth - 110;
  };

  // jika movie belum tersedia, tampilkan loading
  if (!movie)
    return (
      <div className="text-white text-center pt-50 text-2xl">Loading...</div>
    );

  // toggle favorite
  function toggleFav() {
    setFav(!fav);
  }
  return (
    <main className="text-white py-10 md:pt-30 bg-gray-900">
      <div
        className="px-4 md:px-0 w-full bg-cover bg-no-repeat py-10 border-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 md:mb-20 md:justify-center">
          {/* Poster Image */}
          <div className="relative group w-[70%] md:w-[400px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-[100%] md:w-[400px] object-cover border-2 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-gray-500 hover:scale-100 transition-all duration-100 ease-in"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 p-4 rounded-full">
                <FaPlay className="text-white text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
          {/* Detail */}
          <figcaption className="md:w-1/2 w-full">
            <h2 className="text-xl md:text-5xl font-bold mb-5 md:mb-8">
              {movie.title}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 md:mb-8">
              <li className="flex gap-2 font-bold p-2 bg-gray-800 text-orange-400">
                <span className="whitespace-nowrap w-fit">Release :</span>
                <p className="font-normal">{movie.release_date}</p>
              </li>
              <li className="flex gap-2 font-bold p-2 bg-gray-800 text-red-500">
                <span className="whitespace-nowrap w-fit">Duration :</span>
                <p className="font-normal">{movie.runtime} min</p>
              </li>
              <li className="flex gap-2 font-bold p-2 bg-gray-800 text-green-600">
                <span className="whitespace-nowrap w-fit">Popularity :</span>
                <p className="font-normal">{movie.popularity}</p>
              </li>
              <li className="flex gap-2 text-blue-400 font-bold p-2 bg-gray-800">
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
              <div className="grid grid-cols-7 md:grid-cols-12 col-span-full">
                <button
                  className="flex items-center justify-center gap-2 text-gray-100 font-bold 
            hover:bg-green-600 hover:scale-102 transition-transform duration-300 text-center col-span-6 md:col-span-11 p-2 bg-green-500 rounded-lg"
                >
                  <span className="text-xl">
                    <MdOutlineScreenShare />
                  </span>
                  <p>Watch Now</p>
                </button>
                <button onClick={() => toggleFav()}>
                  {!fav ? (
                    <FaBookmark className="text-4xl hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <FaBookmark className="text-4xl text-red-500 hover:scale-105 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </ul>
            <p className="mb-6 text-justify text-gray-300 font-bold">
              {movie.overview}
            </p>
            <p className="italic text-sm text-gray-400">"{movie.tagline}"</p>
          </figcaption>
        </div>
      </div>

      <h2 className="text-lg md:text-2xl text-center font-bold underline underline-offset-8 mb-10 mt-10">
        Top Cast
      </h2>

      <div className="relative bg-gray-900 rounded-lg mb-10 md:mb-20 md:mx-10">
        <HiChevronLeft
          className={`md:block bg-gray-500 rounded-full mt-[100px] md:mt-[400px] opacity-80 text-gray-900 text-lg md:text-4xl absolute z-[10] cursor-pointer left-0
               
              }`}
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className={`md:block bg-gray-500 rounded-full mt-[100px] md:mt-[400px] opacity-80 text-gray-900 text-lg md:text-4xl absolute z-[10] cursor-pointer right-0
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

      <h2 className="text-lg md:text-2xl text-center font-bold underline underline-offset-8 mb-10 ">
        Similar Movies
      </h2>

      <MovieList />
    </main>
  );
}

export default MovieDetail;
