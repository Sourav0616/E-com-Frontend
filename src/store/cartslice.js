import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addToCart = createAsyncThunk(
  "addtocart",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cart/addtocart",
        {
          productId: data.productId,
          userId: data.userId,
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to add product to cart");
    }
  }
);

const getAllCartItems = createAsyncThunk(
  "getallcartitems",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cart/getcartitems",
        {
          userId: data.userId,
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to add product to cart");
    }
  }
);

const Plus = createAsyncThunk("plus", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:8000/api/cart/plus", {
      userId: data.userId,
      productId: data.productId,
    });
    const result = response.data; // Correctly access the response data
    return result;
  } catch (error) {
    // Reject with the actual error
    return rejectWithValue(error.message || "Failed to add product to cart");
  }
});

const Minas = createAsyncThunk("minas", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:8000/api/cart/minus", {
      userId: data.userId,
      productId: data.productId,
    });
    const result = response.data; // Correctly access the response data
    return result;
  } catch (error) {
    // Reject with the actual error
    return rejectWithValue(error.message || "Failed to add product to cart");
  }
});

const removeToCart = createAsyncThunk(
  "remove",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cart/remove",
        {
          userId: data.userId,
          productId: data.productId,
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to add product to cart");
    }
  }
);

const cartSlice = createSlice({
  name: "setcart",
  initialState: {
    cartitems: [],
    addaress: {},
    massage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cartitems = action.payload;
    });

    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = true;
    });
    // Handling getAllCartItems actions
    builder
      .addCase(getAllCartItems.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state
      })
      .addCase(getAllCartItems.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload == "no") {
          state.cartitems = [];
        }
        state.cartitems = action.payload; // Update cart items in state
      })
      .addCase(getAllCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set error message in state
      });

    // Handling getAllCartItems actions
    builder.addCase(Plus.pending, (state, action) => {
      state.loading = true;
      state.massage = "";
      console.log(action.payload);
    });

    builder.addCase(Plus.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload === "Out of Stocks") {
        return (state.massage = action.payload);
      }
      state.cartitems = action.payload;
      console.log(action.payload);
    });

    builder.addCase(Plus.rejected, (state, action) => {
      state.loading = true;
      state.massage = "";
      console.log(action.payload);
    });

    // Handling getAllCartItems actions
    builder.addCase(Minas.pending, (state, action) => {
      state.loading = true;

      console.log(action.payload);
    });

    builder.addCase(Minas.fulfilled, (state, action) => {
      state.cartitems = action.payload;
      state.massage = "";
      console.log(action.payload);
    });

    builder.addCase(Minas.rejected, (state, action) => {
      state.loading = true;
      console.log(action.payload);
    });

    // Handling getAllCartItems actions
    builder.addCase(removeToCart.pending, (state, action) => {
      state.loading = true;

      console.log(action.payload);
    });

    builder.addCase(removeToCart.fulfilled, (state, action) => {
      state.cartitems = action.payload;
      state.massage = "";
      console.log(action.payload);
    });

    builder.addCase(removeToCart.rejected, (state, action) => {
      state.loading = true;
      console.log(action.payload);
    });
  },
  reducers : {
    deletAll : (state,action)=>{
      state.cartitems = [];
    }
  }
});
export const {deletAll} = cartSlice.actions
export { addToCart, getAllCartItems, Plus, Minas, removeToCart };
export default cartSlice;
