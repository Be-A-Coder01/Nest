import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/Authenticate/userSlice";

export const store = configureStore({
  reducer: {
    userAuthenticate: userDetail,
  },
});
