import { configureStore } from "@reduxjs/toolkit";
import apiFetchSlice from "./apiProductSlice";
const store = configureStore({
  reducer: {
    products: apiFetchSlice,
  },
});
export default store;
