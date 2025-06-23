import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineScreenShare } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import TVList from "./TVList";
import { fetchTVListById } from "../Services/tvServices";

function TvListDetail() {
  const { id } = useParams();
  const [TvDetail, setTvDetail] = useState(null);
  const [showFullOverview, setShowFullOverview] = useState(false);
  const maxOverviewLength = 300;

  // const elementRef = useRef();
  const [fav, setFav] = useState(false);

  // request API
  useEffect(() => {
    fetchTVListById(id).then(setTvDetail);
    window.scrollTo(0, 0);
  }, [id]);

  // jika movie belum tersedia, tampilkan loading
  if (!TvDetail)
    return (
      <div className="text-white text-center pt-50 text-2xl">Loading...</div>
    );

  // toggle favorite
  function toggleFav() {
    setFav(!fav);
  }
  return (
    <main className="text-white pb-10 pt-18 md:pt-30 bg-gray-900">
      <div
        className="px-4 mb-10 md:px-0 w-full bg-cover bg-no-repeat py-10 border-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/w500${TvDetail.backdrop_path})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 md:mb-20 md:justify-center">
          {/* Poster Image */}
          <div className="relative group w-[70%] md:w-[400px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${TvDetail.poster_path}`}
              alt={TvDetail.title}
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
            <h2 className="text-xl md:text-3xl font-bold mb-5 md:mb-8">
              {TvDetail.name}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 md:mb-8">
              <li className="flex gap-2 font-bold p-2 bg-gray-800 text-orange-400">
                <span className="whitespace-nowrap w-fit">Status :</span>
                <p className="font-normal">{TvDetail.status}</p>
              </li>
              <li className="flex gap-2 font-bold p-2 bg-gray-800 text-red-500">
                <span className="whitespace-nowrap w-fit">Vote Average :</span>
                <p className="font-normal">{TvDetail.vote_average}</p>
              </li>
              <li className="flex gap-2 font-bold p-2 bg-gray-800 text-green-600">
                <span className="whitespace-nowrap w-fit">Popularity :</span>
                <p className="font-normal">{TvDetail.popularity}</p>
              </li>
              <li className="flex gap-2 text-blue-400 font-bold p-2 bg-gray-800">
                <span className="whitespace-nowrap w-fit">Genres :</span>
                <p className="font-normal">
                  {TvDetail.genres.map((g) => g.name).join(", ")}
                </p>
              </li>
              <li className="flex gap-2 text-gray-300 font-bold col-span-full md:col-span-2 p-2 bg-gray-800">
                <span className="whitespace-nowrap w-fit">
                  Production Countries :
                </span>
                <p className="font-normal">
                  {TvDetail.production_countries.map((c) => c.name).join(", ")}
                </p>
              </li>
              <li className="flex gap-2 text-gray-300 font-bold col-span-full md:col-span-2 p-2 bg-gray-800">
                <span className="whitespace-nowrap w-fit">
                  Production Companies :
                </span>
                <p className="font-normal">
                  {TvDetail.production_companies.map((c) => c.name).join(", ")}
                </p>
              </li>
              <li className="flex gap-2 text-gray-300 font-bold col-span-full md:col-span-2 p-2 bg-gray-800">
                <span className="whitespace-nowrap w-fit">Language :</span>
                <p className="font-normal">
                  {TvDetail.spoken_languages
                    .map((l) => l.english_name)
                    .join(", ")}
                </p>
              </li>
              <div className="grid grid-cols-7 md:grid-cols-12 col-span-full">
                <button
                  className="flex items-center justify-center gap-2 text-gray-100 font-bold 
            hover:bg-green-600 hover:scale-102 transition-transform duration-300 text-center col-span-6 md:col-span-11 p-2 bg-green-500 rounded-lg"
                  onClick={() => {
                    if (TvDetail?.homepage) {
                      window.open(TvDetail.homepage, "_blank"); // buka di tab baru
                    }
                  }}
                >
                  <span className="text-xl">
                    <MdOutlineScreenShare />
                  </span>
                  <p>VISIT</p>
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
            <p className="mb-2 text-justify text-gray-300 font-bold">
              {showFullOverview
                ? TvDetail.overview
                : TvDetail.overview.slice(0, maxOverviewLength) +
                  (TvDetail.overview.length > maxOverviewLength ? "..." : "")}
            </p>

            {TvDetail.overview.length > maxOverviewLength && (
              <button
                className="text-blue-400 font-semibold hover:underline"
                onClick={() => setShowFullOverview(!showFullOverview)}
              >
                {showFullOverview ? "Hide" : "More"}
              </button>
            )}

            <p className="italic text-sm text-gray-400">"{TvDetail.tagline}"</p>
          </figcaption>
        </div>
      </div>
      <TVList />
    </main>
  );
}

export default TvListDetail;
