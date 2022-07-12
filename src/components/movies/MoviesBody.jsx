import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import MovieGener from "./MovieGener";

const fetchData = () =>{
  return axios.get('/db.json')
}

function MoviesBody() {

  const { data } = useQuery('disney-data',fetchData);

  return (
    <div className="main-body-movie" >
      <MovieGener data={data?.data.movies} gener={'recommend'} title={'Recommended For You'} top={false}/>
      <MovieGener data={data?.data.movies} gener={'trending'} title={'Trending'} top={true}/>
      <MovieGener data={data?.data.movies} gener={'original'} title={'Original'}  top={true}/>
      <MovieGener data={data?.data.movies} gener={'new'} title={'New'}  top={true}/>
    </div>
  );
}

export default React.memo(MoviesBody);
