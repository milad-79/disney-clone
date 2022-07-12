import { Link } from "react-router-dom";
import "./style.css";


function MovieGener({data, gener, title ,top}) {

    const setMovieDataHandler = (data) =>{
        localStorage.setItem('movieDisney', JSON.stringify(data))
    }


    return ( 
        <div className={`recommend ${top ? 'top' : null}`}>
        <h5 className="movie-type">{title}</h5>
        <div className="movies-body">
          { data &&
            data
              .filter((person) => person.type === gener)
              .map((movie) => (
                <div className="movie-img-card" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img src={movie.cardImg} alt="" className="card-img" onClick={()=> setMovieDataHandler(movie)}/>
                  </Link>
                </div>
              ))}
        </div>
      </div>
     );
}

export default MovieGener;