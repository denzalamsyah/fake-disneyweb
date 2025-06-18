import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] 
        border-gray-400 hover:scale-110 transition-all duration-100 ease-in cursor-pointer"
      />
    </>
  );
}

export default MovieCard;
