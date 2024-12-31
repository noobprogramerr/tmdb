import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movietype: "",
  page: 1,
};

export const movieReducer = createSlice({
  name: "tmdbMovies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    getMtype: (state, action) => {
      state.movietype = action.payload;
    },
    changePage: (state, action) => {
      state.page += action.payload;
    },
  },
});

export const { addMovies, getMtype,changePage } = movieReducer.actions;
export default movieReducer.reducer;