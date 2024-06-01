import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const addReview = createAsyncThunk(
  "addreview",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/review",
        {
          productId: data.productId,
          userId : data.userId,
          rating : data.rating,
          text: data.text,
        },{
          headers: {
              "Content-Type": "application/json"
          }
      }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    loading: true,
    review: "",
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addReview.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

  },
});

export { addReview };
export default reviewSlice;
