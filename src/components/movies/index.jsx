import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMovie } from "../../store/action";
import "./style.css";
import React from "react";

function Movie() {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <div className="main-body-movie" >
      <div className="recommend">
        <h5 className="movie-type">Recommended For You</h5>
        <div className="movies-body">
          {movie.movies &&
            movie.movies
              .filter((person) => person.type === "recommend")
              .map((movie) => (
                <div className="movie-img-card" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img src={movie.cardImg} alt="" className="card-img" />
                  </Link>
                </div>
              ))}
        </div>
      </div>

      <div className="recommend top">
        <h5 className="movie-type">Trending</h5>
        <div className="movies-body">
          {movie.movies &&
            movie.movies
              .filter((person) => person.type === "trending")
              .map((movie) => (
                <div className="movie-img-card" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img src={movie.cardImg} alt="" className="card-img" />
                  </Link>
                </div>
              ))}
        </div>
      </div>

      <div className="recommend top">
        <h5 className="movie-type">Original</h5>
        <div className="movies-body">
          {movie.movies &&
            movie.movies
              .filter((person) => person.type === "original")
              .map((movie) => (
                <div className="movie-img-card" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img src={movie.cardImg} alt="" className="card-img" />
                  </Link>
                </div>
              ))}
        </div>
      </div>

      <div className="recommend top">
        <h5 className="movie-type">New</h5>
        <div className="movies-body">
          {movie.movies &&
            movie.movies
              .filter((person) => person.type === "new")
              .map((movie) => (
                <div className="movie-img-card" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img src={movie.cardImg} alt="" className="card-img" />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Movie);
