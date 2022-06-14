import axios from "axios";
// json-server --watch db.json --port 3004

export const getMovie = async () => {
  try {
    const res = await axios.get("http://localhost:3004/movies");
    return {
      movies: res.data
    }

  } catch (e) {
    throw e;
  }
};


export const getMovieById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3004/movies/${id}`);
    return {
      moviebyid: res.data
    }

  } catch (e) {
    throw e;
  }
};
