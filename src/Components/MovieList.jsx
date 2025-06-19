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
    <section className="relative pb-30">
      <HiChevronLeft
        className={`hidden md:block text-white text-4xl absolute z-[10] cursor-pointer left-0 ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        }`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-4xl absolute z-[10] cursor-pointer right-0 ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-3
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
