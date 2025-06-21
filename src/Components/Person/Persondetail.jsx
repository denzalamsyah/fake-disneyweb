import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { fetchPersonById } from "../../Services/peopleServices";
function Persondetail() {
  const { id } = useParams();
  const [PersonDetail, setPersonDetail] = useState(null);
  const [showFullOverview, setShowFullOverview] = useState(false);
  const maxOverviewLength = 300;

  // const [showFullOverview, setShowFullOverview] = useState(false);
  // const maxOverviewLength = 300;

  // request API
  useEffect(() => {
    fetchPersonById(id).then(setPersonDetail);
  }, [id]);

  // jika movie belum tersedia, tampilkan loading
  if (!PersonDetail)
    return (
      <div className="text-white text-center pt-50 text-2xl">Loading...</div>
    );

  return (
    <main className="text-white pt-15 md:pt-30 bg-black h-auto">
      <section
        className="px-4 md:px-15 w-full min-h-[450px] bg-cover bg-no-repeat bg-center py-10 border-none md:pt-50"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w500${PersonDetail.profile_path})`,
        }}
      ></section>
      <section className="min-h-[600px]">
        <div className="relative mt-[-350px] mx-10 md:mx-15">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Poster Image */}
            <div className="w-[70%] md:w-[200px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${PersonDetail.profile_path}`}
                alt={PersonDetail.title}
                className="w-[100%] md:w-[400px] object-cover rounded-xl cursor-pointer hover:shadow-lg hover:shadow-gray-500 hover:scale-100 transition-all duration-100 ease-in"
              />
            </div>
            {/* Detail */}
            <figcaption className="md:w-1/2 w-full">
              <h2 className="text-xl text-center md:text-left md:text-3xl font-bold mb-5 md:mb-8">
                {PersonDetail.name || "-"}
              </h2>
              <div className="flex gap-2 font-bold p-2 border-1 border-gray-50 text-white w-full">
                <span className="whitespace-nowrap w-fit">Birthday :</span>
                <p className="font-normal">{PersonDetail.birthday || "-"}</p>
              </div>
              <div className="flex gap-2 font-bold p-2 border-1 border-gray-50 text-white">
                <span className="whitespace-nowrap w-fit">
                  Place Of Birth :
                </span>
                <p className="font-normal">
                  {PersonDetail.place_of_birth || "-"}
                </p>
              </div>
              <div className="flex gap-2 font-bold p-2 border-1 border-gray-50 text-white">
                <span className="whitespace-nowrap w-fit">
                  Known for Departement :
                </span>
                <p className="font-normal">
                  {PersonDetail.known_for_department || "-"}
                </p>
              </div>
              <div className="flex gap-2 font-bold p-2 border-1 border-gray-50 text-green-600">
                <span className="whitespace-nowrap w-fit">Popularity :</span>
                <p className="font-normal">{PersonDetail.popularity || "-"}</p>
              </div>
            </figcaption>
          </div>
          <div className="py-10">
            <div className="text-justify text-gray-300 font-bold ">
              {showFullOverview
                ? PersonDetail.biography
                : PersonDetail.biography.slice(0, maxOverviewLength) +
                  (PersonDetail.biography.length > maxOverviewLength
                    ? "..."
                    : "")}
            </div>

            {PersonDetail.biography.length > maxOverviewLength && (
              <button
                className="text-blue-400 font-semibold hover:underline"
                onClick={() => setShowFullOverview(!showFullOverview)}
              >
                {showFullOverview ? "Hide" : "More"}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Persondetail;
