import { useEffect, useRef, useState } from "react";
import { fetchMoviesByGenre } from "../Services/movieServices";
import MovieCard from "./MovieCard";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import HrMovieCard from "./HrMovieCard";
// const screenWidth = window.innerWidth;

function MovieList({ genreId }) {
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
    <main className="relative">
      <HiChevronLeft
        className="text-black bg-gray-400 opacity-70 rounded-full text-3xl mx-4 md:text-5xl absolute z-[10] cursor-pointer left-0 mt-[90px] md:mt-[150px]"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-black bg-gray-400 opacity-70 rounded-full text-3xl mx-4 md:text-5xl absolute z-[10] cursor-pointer right-0 mt-[90px] md:mt-[150px]"
        onClick={() => sliderRight(elementRef.current)}
      />
      <section
        ref={elementRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
      >
        {movieListbyGenre.map((item) => (
          <MovieCard movie={item} key={item.id} />
        ))}
      </section>
    </main>
  );
}

export default MovieList;
