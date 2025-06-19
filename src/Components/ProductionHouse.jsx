import React from "react";
// gambar
import marvel from "../assets/Images/marvel.png";
import nationIG from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import disney from "../assets/Images/disney.png";
import starwar from "../assets/Images/starwar.png";

// video
import disneyV from "../assets/Video/disney.mp4";
import marvelV from "../assets/Video/marvel.mp4";
import pixarV from "../assets/Video/pixar.mp4";
import starwarsV from "../assets/Video/star-wars.mp4";
import nationalgeographicV from "../assets/Video/national-geographic.mp4";
function ProductionHouse() {
  const content = [
    {
      id: 1,
      gambar: marvel,
      video: marvelV,
    },
    {
      id: 2,
      gambar: disney,
      video: disneyV,
    },
    {
      id: 3,
      gambar: pixar,
      video: pixarV,
    },
    {
      id: 4,
      gambar: starwar,
      video: starwarsV,
    },
    {
      id: 5,
      gambar: nationIG,
      video: nationalgeographicV,
    },
  ];
  return (
    <section className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {content.map((item, index) => (
        <div
          key={index}
          className="border-[2px] border-gray-50 rounded-md hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-md md:shadow-lg shadow-gray-600"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
          ></video>
          <img src={item.gambar} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </section>
  );
}

export default ProductionHouse;
