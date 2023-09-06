import { useEffect, useState } from "react";
import { movieService } from "../../api/movieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results },
    } = await movieService.getMovies();

    setMovies(results);
  };
  
  const getMoviesSearch = async (movieString) => {
    const {
      data: { results }
    } = await movieService.searchMovies(movieString);

    setMovies(results)
  }

  useEffect(() => {
    getMovies(); 
  }, []);

  useEffect(() => {
    if (searchValueProp) {
      getMoviesSearch(searchValueProp)
    }
    if (searchValueProp === "" ) {
      getMovies()
    }
  }, [searchValueProp]);


  return (
    <section className="home">
     {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movieProp={movie} />
        </div>
      ))}
    </section>
  );
};

export default Home;
