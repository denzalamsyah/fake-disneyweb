import React, { useEffect, useState } from "react";
import logo from "../assets/Images/anime.png";
import { fetchMoviesByGenre } from "../Services/movieServices";
import GenreList from "../Constant/Genre";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function MovieFiltered() {
  const navigate = useNavigate();
  const [movieListbyGenre, setMovieListbyGenre] = useState([]);
  const [Genre, setGenreId] = useState(28);
  useEffect(() => {
    fetchMoviesByGenre(Genre).then(setMovieListbyGenre);
  }, [Genre]);

  const [showAll, setShowAll] = useState(false);
  const visibleCount = 4;
  const visibleGenres = showAll ? GenreList : GenreList.slice(0, visibleCount);

  return (
    <main className="py-28 md:py-50">
      <section className="md:mx-5 md:p-5 grid md:grid-cols-4 gap-8 rounded-xl bg-gray-800">
        <div className="md:rounded-xl h-fit border-b md:border">
          <h2 className="text-center bg-blue-400 text-white p-4 md:rounded-t-lg text-lg">
            MOVIES
          </h2>
          <div className="bg-gray-800 flex flex-wrap items-center justify-center md:grid md:grid-cols-1 gap-4 p-4 md:p-2 md:py-5 px-5">
            {visibleGenres.map((g) => (
              <span
                key={g.id}
                className={`
              cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700
              ${Genre === g.id ? "font-bold bg-gray-700 text-white" : ""}
            `}
                onClick={() => setGenreId(g.id)}
              >
                {g.name}
              </span>
            ))}
          </div>

          <div className="flex justify-center bg-gray-800 md:rounded-xl">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-1 text-[10px] text-gray-300 hover:text-gray-200"
            >
              {showAll ? "Show Less" : "Show More"}
              {showAll ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        </div>
        <div className="mx-5 md:mx-0 md:col-span-3 rounded-xl">
          <div className="grid grid-cols-1 gap-8 rounded-xl">
            {movieListbyGenre.length > 0 ? (
              movieListbyGenre.map((item) => {
                const handleCardClick = () => {
                  navigate(`/movie/${item.id}`);
                };

                return (
                  <div
                    key={`${item.media_type}-${item.id}`}
                    className="flex cursor-pointer rounded-xl hover:transition-transform hover:scale-102 ease-in-out shadow-md shadow-gray-500 bg-gray-800"
                    onClick={handleCardClick} // Navigasi saat div diklik
                  >
                    <>
                      <img
                        src={
                          item.poster_path || item.backdrop_path
                            ? `https://image.tmdb.org/t/p/w200${
                                item.poster_path || item.backdrop_path
                              }`
                            : logo
                        }
                        alt={
                          item.original_title ||
                          item.title ||
                          item.name ||
                          "No Image"
                        }
                        className="rounded-tl-xl rounded-bl-xl w-30 md:w-50 md:max-h-[250px] object-cover"
                      />
                      <div className="text-gray-50 p-4 md:p-10">
                        <h2 className="font-bold text-[14px] md:text-xl">
                          {item.title || "-"}
                        </h2>
                        <p className="font-semibold text-[10px] md:text-sm mt-5 mb-10">
                          {item.release_date || "-"}
                        </p>
                        <div className="flex text-[10px] md:text-sm gap-1 md:gap-2 flex-wrap">
                          <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-green-700 text-green-400">
                            Popularity: {item.popularity}
                          </span>
                          <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-yellow-700 text-yellow-400">
                            Vote Average: {item.vote_average}
                          </span>
                          <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-red-700 text-red-400">
                            Vote Count: {item.vote_count}
                          </span>
                        </div>
                      </div>
                    </>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-xl text-gray-700 mb-4">🔎 Not found</p>
                <p className="text-sm text-gray-500">
                  Tidak ditemukan hasil untuk kategori ini
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieFiltered;
