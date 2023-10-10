import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import "../assets/main.css"

function SearchResults (): JSX.Element {
  const searchParams: URLSearchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get("query") || "";



  return (
    <div className="bg-dark-background-main">
      <Navbar />

      <h1 className="w-5/6 text-4xl font-bold text-dark-text-base ml-auto p-12"> Search Results </h1>
      <MovieList url="search" query={query} key={query} />
    </div>
  );
}

export default SearchResults;
