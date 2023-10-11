import { useState, useEffect } from 'react';
import { Movie, Genre } from "../assets/model"
import MovieCard from './MovieCard';
import "../assets/main.css"

interface Props {
  url: string;
  query: string;
}

function MovieList (props: Props): JSX.Element {
  // Define state
  let [movies, setMovies] = useState<Movie[]>([]);
  let [page, setPage] = useState<number>(1);
  let [genres, setGenres] = useState<Genre[]>([]);
  // const initialLoad = useRef(true);


  const appendMovies = (newMovies: Movie[]) => setMovies(movies = [...movies, ...newMovies]);
  const defineGenres = (newGenres: Genre[]) => setGenres(genres = newGenres);
  const nextPage = () => setPage(page = page + 1);


  // Fetch new data when the 'page' changes
  useEffect(() => {
    // Skip initialLoad
    // if (initialLoad.current == true) {
    //   initialLoad.current = false;
    //   return
    // };

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const genreArray: Genre[] = data.genres;
        defineGenres(genreArray)
      })
      .catch(err => console.error(err));

    const url = props.url != "search" ?
      `https://api.themoviedb.org/3/movie/${props.url}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}` :
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${props.query}&page=${page}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const movieArray: Movie[] = data.results;

        movieArray.forEach(mov => {
          const matches: Genre[] = genres.filter(g => mov.genre_ids.includes(g.id));
          mov.genres = matches.map(match => match.name);
        });

        appendMovies(movieArray);
      })
      .catch(err => console.error(err));
  }, [page]);

  // Initialize dynamic scrolling
  useEffect(() => {
    const handleScroll = () => {
      // User has reached the bottom of the page
      if (window.innerHeight + Math.ceil(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 50) {
        nextPage()
      }
    };
  
    // Add listener while component is mounted
    window.addEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="ml-auto w-5/6 h-full flex flex-wrap justify-evenly">
      {movies.map(movie => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
