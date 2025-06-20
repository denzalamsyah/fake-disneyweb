// pages/Home.jsx
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMovieList from "../Components/GenreMovieList";
import TVList from "../Components/TVList";

function Home() {
  return (
    <>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <TVList />
    </>
  );
}

export default Home;
