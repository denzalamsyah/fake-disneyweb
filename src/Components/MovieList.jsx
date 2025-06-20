import { useEffect, useRef, useState } from "react";
import { fetchMoviesByGenre } from "../Services/movieServices";
import MovieCard from "./MovieCard";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import HrMovieCard from "./HrMovieCard";
// const screenWidth = window.innerWidth;

function MovieList({ genreId, index_ }) {
  const [movieListbyGenre, setMovieListbyGenre] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    fetchMoviesByGenre(genreId).then(setMovieListbyGenre);
  }, [genreId]);

  const sliderRight = (element) => {
    element.scrollLeft += 800;
    // element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
    // element.scrollLeft -= screenWidth - 110;
  };
  return (
    <section className="relative">
      <HiChevronLeft
        className={`text-black bg-gray-400 opacity-70 rounded-full text-lg md:text-4xl absolute z-[10] cursor-pointer left-0 ${
          index_ % 3 == 0 ? "mt-[40px] md:mt-[80px]" : "mt-[90px] md:mt-[150px]"
        }`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`text-black bg-gray-400 opacity-70 rounded-full text-lg md:text-4xl absolute z-[10] cursor-pointer right-0 ${
          index_ % 3 == 0 ? "mt-[40px] md:mt-[80px]" : "mt-[90px] md:mt-[150px]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
      >
        {movieListbyGenre.map((item) =>
          index_ % 3 === 0 ? (
            <HrMovieCard movie={item} key={item.id} />
          ) : (
            <MovieCard movie={item} key={item.id} />
          )
        )}
      </div>
    </section>
  );
}

export default MovieList;
