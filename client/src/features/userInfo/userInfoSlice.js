import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfileDetails: null,
    isLoading: false,
    error: false,
  },

  reducers: {
    addDetails: (state, action) => {
      console.log(action.payload, "inslice");
      state.userProfileDetails = action.payload;
    },
  },
});

export const addDetails = userInfoSlice.actions;

export default userInfoSlice.reducer;
