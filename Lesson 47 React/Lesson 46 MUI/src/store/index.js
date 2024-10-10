import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import counterReducer from "../slices/productsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
});
