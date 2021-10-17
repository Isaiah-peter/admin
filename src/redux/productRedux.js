import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    //Get All
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

    //Delete
    deleteProductStart: (state) => {
      state.isFetching = true;
    },
    deleteProductSuccess: (state, actions) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item.ID === actions.payload),
        1
      );
    },
    deleteProductFail: (state) => {
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFail,
  deleteProductFail,
  deleteProductStart,
  deleteProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
