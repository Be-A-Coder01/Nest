import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "fetchPost",
  async (data, rejectwithvalue) => {
    const response = await fetch("http://localhost:7000/postData");
    const result = await response.json();

    try {
      return result;
    } catch (error) {
      rejectwithvalue(error);
    }
  }
);

export const fetchPostSlice = createSlice({
  name: "fetchPostSlice",
  initialState: {
    isLoading: false,
    postContent: null,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postContent = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.postContent = action.payload;
    });
  },
});

export default fetchPostSlice.reducer;
