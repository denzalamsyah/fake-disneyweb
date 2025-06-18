import GenreList from "../Constant/Genre";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="pt-5">
      {GenreList.map(
        (item, index) =>
          index <= 4 && (
            <div key={index} className="p-2 md:px-13">
              <h2
                className="text-[20px] px-3 text-white 
                font-bold"
              >
                {item.name}
              </h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
