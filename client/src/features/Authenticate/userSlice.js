import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, rejectwithvalue) => {
    console.log(typeof data);
    let response = await fetch("http://localhost:7000/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectwithvalue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, rejectwithvalue) => {
    let response = await fetch("http://localhost:7000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectwithvalue(err);
    }
  }
);

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    userData: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    // SIGNUP REDUCER

    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });

    // LOGIN REDUCER

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
  },
});

export default userDetails.reducer;
