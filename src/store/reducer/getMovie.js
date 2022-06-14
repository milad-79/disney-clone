import { GET_MOVIE, GET_MOVIE_BY_ID } from "../type";

export default function getMovie(state = {}, action) {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, ...action.payload };
    case GET_MOVIE_BY_ID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
