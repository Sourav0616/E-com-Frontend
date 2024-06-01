import { createSlice } from "@reduxjs/toolkit";

const setViewSlice = createSlice({
  name: "viewproduct",
  initialState: {
    product: {

    },
  },
  reducers: {
    setViewProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setViewProduct } = setViewSlice.actions;
export default setViewSlice;