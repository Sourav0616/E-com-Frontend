import { createSlice } from "@reduxjs/toolkit";

const setProductRenderSlice = createSlice({
  name: "setproductrender",
  initialState: {
    catagory: "",
  },
  reducers: {
    setRenderProductCatagory: (state, action) => {
      state.catagory = action.payload;
    },
  },
});

export const { setRenderProductCatagory } = setProductRenderSlice.actions;
export default setProductRenderSlice;