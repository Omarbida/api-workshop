import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPosts: [],
  isLoading: false,
  isSuccess: false,
  hasError: "",
};
const userPostsSlice = createSlice({
  name: "userPosts",
  initialState,
  reducers: {
    getUserPosts: (state, action) => {
      state.isLoading = true;
    },
    getUserPostsSuccess: (state, { payload }) => {
      state.userPosts = payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.hasError = "";
    },
    getUserPostsFail: (state, { payload }) => {
      state.userPosts = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.hasError = payload;
    },
  },
});
export const { getUserPosts, getUserPostsFail, getUserPostsSuccess } =
  userPostsSlice.actions;
export const userPostsReducer = userPostsSlice.reducer;

export const fetchUserPosts = (id) => {
  return async (dispatch, getState) => {
    dispatch(getUserPosts());
    try {
      const profilePosts = await fetch(
        import.meta.env.VITE_BASE_API_URL + `/posts?userId=${id}`
      );

      dispatch(getUserPostsSuccess(await profilePosts.json()));
    } catch (error) {
      dispatch(getUserPostsFail(error.message));
    }
  };
};
