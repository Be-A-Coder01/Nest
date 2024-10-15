import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetail = createAsyncThunk(
  "fetchUserDetail",
  async (data, rejectwithvalue) => {
    let response = await fetch("http://localhost:7000/userList", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    });
    try {
      let result = response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectwithvalue(error);
    }
  }
);

export const userInfoSlice = createSlice({
  name: "userProfile",
  initialState: {
    isLoading: false,
    userProfileDetails: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userProfileDetails = action.payload;
    });
    builder.addCase(fetchUserDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.userProfileDetails = action.payload;
    });
  },
});

export default userInfoSlice.reducer;
