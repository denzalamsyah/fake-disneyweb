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
      <section className="md:mx-5 md:p-5 grid md:grid-cols-4 gap-8 rounded-xl bg-gray-800">
        <div className="md:rounded-xl h-fit border-b md:border">
          <h2 className="text-center bg-gray-600 text-white p-4 md:rounded-t-lg text-lg">
            "Meet Your Favorite Stars"
          </h2>

          <p className="text-justify p-5">
            The world of entertainment wouldn't be the same without the iconic
            actors and actresses who captivate audiences with their talent and
            charisma. Below is a lineup of today’s most popular cast
            members—recognized for their unforgettable roles, outstanding
            performances, and powerful presence in the film and television
            industry. Discover the familiar faces behind your favorite
            characters and see why they continue to inspire millions around the
            globe.
          </p>
        </div>
        <div className="mx-5 md:mx-0 md:col-span-3 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl">
            {PersonPupular.length > 0 ? (
              PersonPupular.map((item) => {
                const handleCardClick = () => {
                  navigate(`/person/${item.id}`);
                };

                return (
                  <div
                    key={`${item.media_type}-${item.id}`}
                    className="flex cursor-pointer rounded-xl hover:transition-transform hover:scale-102 ease-in-out shadow-md shadow-gray-500"
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
                        className="rounded-tl-xl rounded-bl-xl w-30 md:w-50 md:max-h-[250px] object-cover"
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
