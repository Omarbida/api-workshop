import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  hasError: "",
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.isLoading = true;
    },
    setUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.hasError = "";
    },
    setUsersFail: (state, { payload }) => {
      state.hasError = payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
});
export const { getUsers, setUsersSuccess, setUsersFail } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    dispatch(getUsers());
    try {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      dispatch(setUsersSuccess(await users.json()));
    } catch {
      dispatch(setUsersFail("error"));
    }
  };
};
