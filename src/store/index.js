import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userPostsReducer } from "../slices/PostsSlice";
import { userProfileReducer } from "../slices/ProfileSlice";
import { usersReducer } from "../slices/UsersSlice";

const combinedReducers = combineReducers({
  users: usersReducer,
  userProfile: userProfileReducer,
  userPosts: userPostsReducer,
});
export const store = configureStore({
  reducer: combinedReducers,
});
