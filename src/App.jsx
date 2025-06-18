// import { useState } from "react";
import "./App.css";
import GenreMovieList from "./Components/GenreMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
