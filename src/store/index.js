import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../slices/UsersSlice";

const combinedReducers = combineReducers({
  users: usersReducer,
});
export const store = configureStore({
  reducer: combinedReducers,
});
