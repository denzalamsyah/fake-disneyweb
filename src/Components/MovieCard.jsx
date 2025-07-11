import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => navigate(`/movie/${movie.id}`)}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] 
        border-gray-400 hover:scale-110 transition-all duration-100 ease-in cursor-pointer"
      />
    </>
  );
}

export default MovieCard;
