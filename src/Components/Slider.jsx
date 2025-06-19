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
    <div className="pt-22 md:pt-30">
      <HiChevronLeft
        className="hidden md:block text-white text-4xl absolute mx-8 mt-[150px] cursor-pointer z-10 left-0"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-4xl absolute mx-8 mt-[150px] cursor-pointer z-10 right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto scrollbar-hide w-full px-16 py-4 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt={item.title}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-2xl hover:border-4 border-gray-400 transition-all duration-100 ease-in hover:scale-105
"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
