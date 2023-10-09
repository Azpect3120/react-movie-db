import "../assets/main.css"
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

function TopRated (): JSX.Element {
  return (
    <div className="bg-dark-background-main">
      <Navbar />

      <h1 className="w-5/6 text-4xl font-bold text-dark-text-base ml-auto p-12"> Top Rated Movies </h1>
      <MovieList url="top_rated" />
    </div>
  );
}

export default TopRated;
