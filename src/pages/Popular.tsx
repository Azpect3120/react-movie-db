import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import "../assets/main.css"

function Popular (): JSX.Element {
  return (
    <div className="bg-dark-background-main">
      <Navbar />

      <h1 className="w-5/6 text-4xl font-bold text-dark-text-base ml-auto p-12"> Popular Movies </h1>
      <MovieList url="popular" query="" />
    </div>
  );
}

export default Popular;
