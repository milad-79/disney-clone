import "./styles.css";
import MainNav from "../navbar/MainNav";
import React from "react";
import movieTrailer from "movie-trailer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieById() {
  const movie = JSON.parse(localStorage.getItem('movieDisney'))

  const getThrailer = async(name) =>{
    const url = await movieTrailer(name);
     if(url){
      window.open(url,'_blank');
     }else{
       toast("Sorry this Movie Have't Thrailer !!!",{
         position: "top-right",
         theme: "dark"
       })
     }
  }

  return (
    <>
      <MainNav/>
      {movie ? (
        <div className="movie-by-id-body" style={{
          backgroundImage: `url(${movie.backgroundImg})`,
          backgroundPosition: 'center'
        }}>
          <div className="movie-by-id-inf">
            <img
              src={movie.titleImg}
              alt=""
              className="img-title-movie-inf"
            />
            <div className="movie-inf-buttond-body">
              <button className="movie-inf-btn-type1 button-withe">
                <img src="/images/play-icon-black.png" alt=""  className="play-icon"/>
                <p>PLAY</p>
              </button>

              <button className="movie-inf-btn-type1 button-black" onClick={()=> getThrailer(movie.title)}>
                <img src="/images/play-icon-white.png" alt=""  className="play-icon"/>
                <p>TRALER</p>
              </button>
              
              <button className="move-inf-btn-type2 button-black">
                <img src="/images/group-icon.png" alt="" className="group-icon" />
              </button>
            </div>

            <p className="subtitle">
                {movie.subTitle}
            </p>

            <p className="discription">
                {movie.description}
            </p>
          </div>
          <ToastContainer/>
        </div>
      ) : null}
    </>
  );
}

export default React.memo(MovieById);
