import { createSlice } from "@reduxjs/toolkit";

const setCatagorySlice = createSlice({
  name: "setcategory",
  initialState: {
    catagory: "",
  },
  reducers: {
    setCatagory: (state, action) => {
      state.catagory = action.payload;
    },
  },
});

export const { setCatagory } = setCatagorySlice.actions;
export default setCatagorySlice;
