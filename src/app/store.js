import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
