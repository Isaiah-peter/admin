import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, actions) => {
      state.isFetching = false;
      state.products = actions.payload;
    },
    getProductFail: (state) => {
      state.error = true;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFail } =
  productSlice.actions;
export default productSlice.reducer;
