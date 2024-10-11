import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/Authenticate/userSlice";
import userInfoSliceReducer from "../features/userInfo/userInfoSlice";
import post from "../features/Posts/fetchPostData";

export const store = configureStore({
  reducer: {
    userAuthenticate: userDetail,
    post: post,
    user: userInfoSliceReducer,
  },
});
