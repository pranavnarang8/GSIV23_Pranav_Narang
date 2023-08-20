import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
    filter: null,
    hasMore: true,
  },
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    resetMovie: (state) => {
      state.movie = null;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = null;
    },
  },
});

export const { setMovie, resetMovie, setFilter, resetFilter } =
  movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;
export const selectFilter = (state) => state.movie.filter;

export default movieSlice.reducer;
