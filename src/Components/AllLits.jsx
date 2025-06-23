import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchMultiSearch } from "../Services/allservices";
import logo from "../assets/Images/anime.png";

function AllList() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query") || "";
  const [results, setResults] = useState([]);
  const [mediaType, setMediaType] = useState("movie");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  // request hasil pencarian
  useEffect(() => {
    if (!query) return setResults([]);
    (async () => {
      const res = await fetchMultiSearch(query);
      setResults(res);
    })();
  }, [query]);

  // 🎯 Apply filter saat results atau filter berubah
  useEffect(() => {
    if (mediaType === "all") {
      setFilteredResults(results);
    } else {
      setFilteredResults(
        results.filter((item) => item.media_type === mediaType)
      );
    }
  }, [results, mediaType]);

  return (
    <main className="py-28 md:py-50">
      <section className="md:mx-5 md:p-5 grid md:grid-cols-4 gap-8 rounded-xl bg-gray-800">
        <div className="md:rounded-xl h-fit border-b md:border">
          <h2 className="text-center bg-blue-400 text-white p-4 md:rounded-t-lg text-lg">
            Search Result
          </h2>
          <div className="flex flex-wrap items-center justify-center md:grid md:grid-cols-1 gap-4 md:mt-4 p-4 md:p-2 px-5">
            <span
              className={`flex gap-2 md:justify-between cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700 ${
                mediaType === "movie" ? "font-bold bg-gray-600" : ""
              }`}
              onClick={() => setMediaType("movie")}
            >
              <p>Movies</p>
              <div className="bg-blue-400 px-1 rounded-sm">
                <p>2500</p>
              </div>
            </span>
            <span
              className={`flex gap-2 md:justify-between cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700 ${
                mediaType === "tv" ? "font-bold bg-gray-600" : ""
              }`}
              onClick={() => setMediaType("tv")}
            >
              <p>TV Shows</p>
              <div className="bg-blue-400 px-1 rounded-sm">
                <p>3000</p>
              </div>
            </span>
            <span
              className={`flex gap-2 md:justify-between cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700 ${
                mediaType === "person" ? "font-bold bg-gray-600" : ""
              }`}
              onClick={() => setMediaType("person")}
            >
              <p>Person</p>
              <div className="bg-blue-400 px-1 rounded-sm">
                <p>5000</p>
              </div>
            </span>
            {/* <span
              className={`cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700  ${
                mediaType === "company" ? "font-bold" : ""
              }`}
              onClick={() => setMediaType("company")}
            >
              Rating
            </span>
            <span
              className={`cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700  ${
                mediaType === "company" ? "font-bold" : ""
              }`}
              onClick={() => setMediaType("company")}
            >
              Rating
            </span>
            <span
              className={`cursor-pointer border text-[12px] p-2 md:text-sm rounded-lg hover:bg-gray-700 md:mb-5 ${
                mediaType === "company" ? "font-bold" : ""
              }`}
              onClick={() => setMediaType("company")}
            >
              Rating
            </span> */}
          </div>
        </div>
        <div className="mx-5 md:mx-0 md:col-span-3 rounded-xl">
          <div className="grid grid-cols-1 gap-8 rounded-xl">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => {
                const handleCardClick = () => {
                  navigate(`/${item.media_type}/${item.id}`);
                };

                return (
                  <div
                    key={`${item.media_type}-${item.id}`}
                    className="flex cursor-pointer rounded-xl hover:transition-transform hover:scale-102 ease-in-out shadow-md shadow-gray-500"
                    onClick={handleCardClick} // Navigasi saat div diklik
                  >
                    {item.media_type == "movie" && (
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
                          className="rounded-tl-xl rounded-bl-xl w-30 max-h-[150px] md:w-50 md:max-h-[250px] object-cover"
                        />
                        <div className="text-gray-50 p-4 md:p-10">
                          <h2 className="font-bold text-[14px] md:text-xl">
                            {item.title || "-"}
                          </h2>
                          <p className="font-semibold text-[10px] md:text-sm my-5 md:mt-3 md:mb-10">
                            Realise: {item.release_date || "-"}
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
                    )}
                    {item.media_type == "person" && (
                      <>
                        <img
                          src={
                            item.profile_path || item.backdrop_path
                              ? `https://image.tmdb.org/t/p/w200${
                                  item.profile_path || item.backdrop_path
                                }`
                              : logo
                          }
                          alt={
                            item.original_name ||
                            item.title ||
                            item.name ||
                            "No Image"
                          }
                          className="rounded-tl-xl rounded-bl-xl w-30 max-h-[150px] md:w-50 md:max-h-[250px] object-cover"
                        />
                        <div className="text-gray-50 p-4 md:p-10">
                          <h2 className="font-bold text-[14px] md:text-xl">
                            Name : {item.name || "-"}
                          </h2>
                          <p className="font-semibold text-[10px] mb-4 md:text-sm md:mb-5">
                            Departement : {item.known_for_department || "-"}
                          </p>
                          <div className="flex text-[10px] md:text-sm gap-1 md:gap-2 flex-wrap">
                            <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-yellow-700 text-yellow-400">
                              Original Name: {item.original_name}
                            </span>
                            <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-green-700 text-green-400">
                              Popularity: {item.popularity}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                    {item.media_type == "tv" && (
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
                            item.original_name ||
                            item.title ||
                            item.name ||
                            "No Image"
                          }
                          className="rounded-tl-xl rounded-bl-xl w-30 max-h-[150px] md:w-50 md:max-h-[250px] object-cover"
                        />
                        <div className="text-gray-50 p-4 md:p-10">
                          <h2 className="font-bold text-[14px] md:text-xl">
                            Name : {item.name || "-"}
                          </h2>
                          <p className="font-semibold text-[10px] my-5 md:text-sm md:mb-10">
                            First Air Date : {item.first_air_date || "-"}
                          </p>
                          <div className="flex text-[10px] md:text-sm gap-1 md:gap-2 flex-wrap">
                            <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-yellow-700 text-yellow-400">
                              Original Name: {item.original_name}
                            </span>
                            <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-green-700 text-green-400">
                              Popularity: {item.popularity}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-xl text-gray-700 mb-4">🔎 Not found</p>
                <p className="text-sm text-gray-500">
                  Tidak ditemukan hasil untuk kategori "{mediaType}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AllList;
