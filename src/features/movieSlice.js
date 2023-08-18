import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
  },
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    resetMovie: (state) => {
      state.movie = null;
    },
  },
});

export const { setMovie, resetMovie } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;
