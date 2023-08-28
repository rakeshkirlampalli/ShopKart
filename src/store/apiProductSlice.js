import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import statusCode from "../utils/statusCode";
const apiFetchSlice = createSlice({
  name: "Products",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state ) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = statusCode.ERROR;
      });
  },
});
export const { fetchData } = apiFetchSlice.actions;
export default apiFetchSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const apiData = await axios.get("https://fakestoreapi.com/products");
  return apiData.data;
});
