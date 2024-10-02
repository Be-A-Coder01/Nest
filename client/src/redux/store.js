import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/Authenticate/userSlice";
import post from "../features/Posts/postsSlice";
import userInfoSliceReducer from "../features/userInfo/userInfoSlice";

export const store = configureStore({
  reducer: {
    userAuthenticate: userDetail,
    post: post,
    user: userInfoSliceReducer,
  },
});
