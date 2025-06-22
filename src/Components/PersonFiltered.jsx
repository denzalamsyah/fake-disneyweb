import React, { useEffect, useState } from "react";
import logo from "../assets/Images/anime.png";
import { useNavigate } from "react-router-dom";
import { fetchPersonListFiltered } from "../Services/peopleServices";

function PersonListFiltered() {
  const navigate = useNavigate();
  const [PersonPupular, setPersonPupular] = useState([]);
  console.log(PersonPupular);

  useEffect(() => {
    fetchPersonListFiltered().then(setPersonPupular);
  }, []);

  return (
    <main className="py-28 md:py-50">
      <section className="md:mx-5 md:p-5 grid md:grid-cols-4 gap-8 rounded-xl">
        <div className="md:rounded-xl h-fit border-b md:border">
          <h2 className="text-center bg-blue-400 text-white p-4 md:rounded-t-lg text-lg">
            Person List
          </h2>
          <div className="flex flex-wrap items-center justify-center md:grid md:grid-cols-1 gap-4 md:mt-4 p-4 md:p-2 px-5">
            <p>Populer Person</p>
          </div>
        </div>
        <div className="mx-5 md:mx-0 md:col-span-3 rounded-xl">
          <div className="grid grid-cols-1 gap-8 rounded-xl">
            {PersonPupular.length > 0 ? (
              PersonPupular.map((item) => {
                const handleCardClick = () => {
                  navigate(`/person/${item.id}`);
                };

                return (
                  <div
                    key={`${item.media_type}-${item.id}`}
                    className="flex cursor-pointer rounded-xl border hover:transition-transform hover:scale-102 ease-in-out shadow-white"
                    onClick={handleCardClick} // Navigasi saat div diklik
                  >
                    <>
                      <img
                        src={
                          item.profile_path
                            ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                            : logo
                        }
                        alt={item.original_name || item.name || "No Image"}
                        className="rounded-tl-xl rounded-bl-xl w-30 object-cover"
                      />
                      <div className="text-gray-50 p-4 md:p-10">
                        <h2 className="font-bold text-[14px] md:text-xl">
                          {item.name || "-"}
                        </h2>
                        <p className="font-semibold text-[10px] md:text-sm mb-5">
                          {item.original_name || "-"}
                        </p>
                        <p className="font-semibold text-[10px] md:text-sm mb-5">
                          {item.known_for_department || "-"}
                        </p>
                        <div className="flex text-[10px] md:text-sm gap-1 md:gap-2 flex-wrap">
                          <span className="text-justify md:border-3 md:rounded-sm md:p-2 md:border-green-700 text-green-400">
                            Popularity: {item.popularity}
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

export default PersonListFiltered;
