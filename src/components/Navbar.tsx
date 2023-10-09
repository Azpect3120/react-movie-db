import "../assets/main.css"
import { Link } from "react-router-dom"

function Navbar (): JSX.Element {

  return (
    <nav className="bg-dark-background-nav w-1/6 h-screen fixed flex flex-col">
      <h1 className="w-full px-10 py-5 text-2xl text-dark-text-base bg-dark-primary font-bold">
        Movie DB
      </h1>
      <Link to="/popular" className="w-full px-10 py-5 text-xl text-dark-text-base hover:text-dark-primary hover:bg-dark-background-main transition-all duration-100">
          Popular
      </Link>
      <Link to="/top-rated" className="w-full px-10 py-5 text-xl text-dark-text-base hover:text-dark-primary hover:bg-dark-background-main transition-all duration-100">
        Top Rated
      </Link>
      <Link to="/upcoming" className="w-full px-10 py-5 text-xl text-dark-text-base hover:text-dark-primary hover:bg-dark-background-main transition-all duration-100">
        Upcoming
      </Link>
      <Link to="/now-playing" className="w-full px-10 py-5 text-xl text-dark-text-base hover:text-dark-primary hover:bg-dark-background-main transition-all duration-100">
        Now Playing
      </Link>
    </nav>
  );
}

export default Navbar;
