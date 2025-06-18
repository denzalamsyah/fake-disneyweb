import { useEffect, useRef, useState } from "react";
import { fetchMoviesByGenre } from "../Services/movieServices";
import MovieCard from "./MovieCard";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
// const screenWidth = window.innerWidth;

function MovieList({ genreId }) {
  const [movieListbyGenre, setMovieListbyGenre] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    fetchMoviesByGenre(genreId).then(setMovieListbyGenre);
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += 800;
    // element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
    // element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-4xl absolute z-[10] mt-[150px] cursor-pointer left-0"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-4xl absolute z-[10] mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
      >
        {movieListbyGenre.map((item, index) => (
          <MovieCard movie={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
