import { GET_MOVIE } from "../type";
import * as api from '../../api'

export const getMovie =()=>({
    type: GET_MOVIE,
    payload: api.getMovie()
})


export const getMovieById =(id)=>({
    type: GET_MOVIE,
    payload: api.getMovieById(id)
})