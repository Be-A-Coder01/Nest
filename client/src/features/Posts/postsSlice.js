import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addPost = createAsyncThunk("addPost", async (data) => {
  let response = await fetch("http://localhost:7000/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Authorization: JSON.parse(localStorage.getItem("userToken")),
    },
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const addPostImage = createAsyncThunk(
  "addPostImage",
  async (data, rejectwithvalue) => {
    console.log(data, "ji");
    const result = await axios.post("http://localhost:7000/postsImage", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    });

    try {
      return result;
    } catch (error) {
      rejectwithvalue(error);
    }
  }
);

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
    builder.addCase(addPostImage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addPostImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postContent = action.payload;
    });
    builder.addCase(addPostImage.rejected, (state, action) => {
      state.postContent = action.payload;
    });
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

export default postsSlice.reducer;
