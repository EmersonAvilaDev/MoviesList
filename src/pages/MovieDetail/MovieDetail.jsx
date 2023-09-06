import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movieService } from "../../api/movieService";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await movieService.getMoviesDetails(id);
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <div className="movie-detail">
      <div className="movie-detail__container">
        <div className="movie-detail__col">
          <h1 className="movie-detail__title">{movie.title}</h1>
          <div className="movie-detail__image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="movie-detail__col">
          <div className="movie-detail__details">
            <div className="movie-detail__detail">
              <span>Budget:</span> {movie.budget}
            </div>
            <div className="movie-detail__detail">
              <span>Original Language:</span> {movie.original_language}
            </div>
            <div className="movie-detail__detail">
              <span>Popularity:</span> {movie.popularity}
            </div>
            <div className="movie-detail__detail">
              <span>Overview:</span> {movie.overview}
            </div>
          </div>
          <Link to={"/"} className="movie-detail__button">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
