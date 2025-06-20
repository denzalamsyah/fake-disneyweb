import GenreList from "../Constant/Genre";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <main className="pt-5 mx-5 md:mx-0 pb-10">
      {GenreList.map(
        (item, index) =>
          index <= 4 && (
            <div key={index} className="p-2 md:px-13">
              <h2
                className="text-sm md:text-[20px] md:px-3 text-white 
                font-bold"
              >
                {item.name}
              </h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </main>
  );
}

export default GenreMovieList;
