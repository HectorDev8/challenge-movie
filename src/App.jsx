import { MovieForm } from "./components/MovieForm/Movieform"
import MovieList from "./components/MovieList/Movielist";
import { useState } from "react";
import Search from "./components/Search/Search"


function App() {
  const [movieList, setMovies] = useState([]);
  const addMovie = (newMovie) => {
    setMovies([...movieList, newMovie]);
  };
  return (
    <div>
      <MovieForm FuncAddMovie={addMovie} />
      <Search movieList={movieList}></Search>
      <MovieList movieList={movieList}/>
    </div>
  );
}

export default App
