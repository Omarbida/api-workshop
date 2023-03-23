import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {},
  isLoading: false,
  isSuccess: false,
  hasError: "",
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, { payload }) => {
      state.post = payload[0];
      state.isLoading = false;
      state.isSuccess = true;
      state.hasError = "";
    },
    getPostFail: (state, { payload }) => {
      state.post = {};
      state.isLoading = false;
      state.isSuccess = false;
      state.hasError = payload;
    },
  },
});
export const { getPost, getPostFail, getPostSuccess } = postSlice.actions;
export const postReducer = postSlice.reducer;

export const fetchPost = (id) => {
  return async (dispatch, getState) => {
    dispatch(getPost());
    try {
      const post = await fetch(
        import.meta.env.VITE_BASE_API_URL + `/posts?id=${id}`
      );
      dispatch(getPostSuccess(await post.json()));
    } catch (error) {
      dispatch(getPostFail(error.message));
    }
  };
};
