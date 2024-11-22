import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import bookSlice from "./book/bookSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    bookA: bookSlice,
  },
});

export default store;
