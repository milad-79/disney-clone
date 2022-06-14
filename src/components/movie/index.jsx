import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMovieById } from "../../store/action";
import MainNav from "../navbar/main-nav";
import React from "react";

function MovieById() {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);


  return (
    <>
      <MainNav/>
      {movie.moviebyid ? (
        <div className="movie-by-id-body" style={{
          backgroundImage: `url(${movie.moviebyid.backgroundImg})`,
          backgroundPosition: 'center'
        }}>
          <div className="movie-by-id-inf">
            <img
              src={movie.moviebyid.titleImg}
              alt=""
              className="img-title-movie-inf"
            />
            <div className="movie-inf-buttond-body">
              <button className="movie-inf-btn-type1 button-withe">
                <img src="/images/play-icon-black.png" alt=""  className="play-icon"/>
                <p>PLAY</p>
              </button>

              <button className="movie-inf-btn-type1 button-black">
                <img src="/images/play-icon-white.png" alt=""  className="play-icon"/>
                <p>TRALER</p>
              </button>
              
              <button className="move-inf-btn-type2 button-black">
                <img src="/images/group-icon.png" alt="" className="group-icon" />
              </button>
            </div>

            <p className="subtitle">
                {movie.moviebyid.subTitle}
            </p>

            <p className="discription">
                {movie.moviebyid.description}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default React.memo(MovieById);
