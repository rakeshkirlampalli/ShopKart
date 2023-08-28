import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      existingItem
        ? existingItem.quantity++
        : state.cartItem.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.cartItem = updatedCartItems;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
   
    
  },
});

export const { addToCart, removeFromCart, decreaseCart, incrementCart } =
  cartSlice.actions;
export default cartSlice.reducer;
