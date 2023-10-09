import { Movie } from "../assets/model"
import "../assets/main.css"

interface Props {
  movie: Movie
}

const IMAGE_URL_PREFIX = "https://image.tmdb.org/t/p/w200"

function MovieCard (props: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center mb-4 w-[220px]">
      <p className="absolute bg-dark-primary text-white w-10 py-0.5 rounded-lg text-center"> {props.movie.vote_average} </p>
      <img src={IMAGE_URL_PREFIX + props.movie.poster_path} alt="Movie poster" className="mt-2.5 rounded-md" />
      <h1 className="w-full px-[12.5px] py-2 text-md text-dark-text-base"> { props.movie.title } </h1>
      <p className="w-full px-[12.5px] text-sm text-dark-text-secondary"> {props.movie.genres.join(", ")} </p>
      <p className="w-full px-[12.5px] text-xs py-1 text-dark-text-secondary"> {props.movie.release_date} </p>
    </div>
  );
}

export default MovieCard;
