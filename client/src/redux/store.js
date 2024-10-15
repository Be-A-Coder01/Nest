import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/Authenticate/userSlice";
import friendList from "../features/userInfo/friendList";
import post from "../features/Posts/fetchPostData";

export const store = configureStore({
  reducer: {
    userAuthenticate: userDetail,
    post: post,
    userFriends: friendList,
  },
});
