import React, { useEffect, useRef, useState } from "react";
import { fetchTrendingMovies } from "../Services/movieServices";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    fetchTrendingMovies().then(setMovieList);
  }, []);

  const sliderRight = (element) => {
    // element.scrollLeft += 800;
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    // element.scrollLeft -= 800;
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <section className="pt-15 pb-3 md:pb-0 md:pt-30">
      <HiChevronLeft
        className="text-black rounded-full text-3xl md:text-5xl absolute mx-4 md:mx-8 mt-[200px] md:mt-[190px] cursor-pointer z-10 bg-gray-500 opacity-70 left-0"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-black rounded-full text-3xl md:text-5xl absolute mx-4 md:mx-8 mt-[200px] md:mt-[190px] cursor-pointer z-10 bg-gray-500 opacity-70 right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto scrollbar-hide w-full px-16 py-15 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <div
            key={index}
            className=" min-w-full h-[400px] md:h-[320px] rounded-2xl mr-5"
          >
            {/* Untuk layar kecil (mobile) */}
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
              className="block md:hidden object-cover object-left-top mr-5 rounded-2xl hover:border-4
              border-gray-400 transition-all duration-100 ease-in hover:scale-105"
            />
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title}
              className="hidden md:block min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-2xl hover:border-4
          border-gray-400 transition-all duration-100 ease-in hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
