import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './Reducer/MovieReducer';
import TvshowReducer from './Reducer/TvReducer'

export const store = configureStore({
  reducer: {
    movieReducer,
    TvshowReducer
  },
})
