import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk("addPost", async (data) => {
  let response = await fetch("http://localhost:7000/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const postsSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    postContent: null,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(addPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postContent = action.payload;
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.postContent = action.payload;
    });
  },
});

export default postsSlice.reducer;
