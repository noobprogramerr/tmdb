import axios from "axios";
import { addMovies, addErrors } from "../Reducer/MovieReducer";

export const asyncGetMovies = () => async (dispatch, getState) => {
  try {
    const { movietype, page} = getState().movieReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movietype}?api_key=1f8d87e3dc07decab42d03f99a3ed7f3&language=en-US&page=${page}`
    );
    dispatch(addMovies(data.results));
  } catch (error) {
    console.log(error);;
  }
};
