import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import apiFetchSlice from "./apiProductSlice";
const store = configureStore({
  reducer: {
    
    cart: cartReducer,
    products: apiFetchSlice,
  },
});
export default store;
