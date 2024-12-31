import axios from "axios";
import { addTvShows } from "../Reducer/TvReducer";

export const asyncGetTvShows = () => async (dispatch, getState) => {
  try {
    const { tvType, page } = getState().tvReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvType}?api_key=YOUR_API_KEY&language=en-US&page=${page}`
    );
    dispatch(addTvShows(data.results));
  } catch (error) {
    console.log(error);
  }
};
