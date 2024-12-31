import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShows: [],
  tvType: "",
  page: 1,
};

export const tvReducer = createSlice({
  name: "tv", // Reducer name
  initialState,
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    setTvType: (state, action) => {
      state.tvType = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { addTvShows, setTvType, incrementPage } = tvReducer.actions;
export default tvReducer.reducer;
