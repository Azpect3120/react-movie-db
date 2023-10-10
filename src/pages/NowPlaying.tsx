import "../assets/main.css"
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

function NowPlaying(): JSX.Element {
  return (
    <div className="bg-dark-background-main">
      <Navbar />

      <h1 className="w-5/6 text-4xl font-bold text-dark-text-base ml-auto p-12"> Movies Now Playing </h1>
      <MovieList url="now_playing" query="" />
    </div>
  );
}

export default NowPlaying;
