import "../assets/main.css"
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

function Upcoming (): JSX.Element {
  return (
    <div className="bg-dark-background-main">
      <Navbar />

      <h1 className="w-5/6 text-4xl font-bold text-dark-text-base ml-auto p-12"> Upcoming Movies </h1>
      <MovieList url="upcoming" />
    </div>
  );
}

export default Upcoming;
