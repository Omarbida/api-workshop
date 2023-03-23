import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  isLoading: false,
  isSuccess: false,
  hasError: "",
};
const userProfileSlice = createSlice({
  name: "userProfileSlice",
  initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.isLoading = true;
    },
    getUserProfileSuccess: (state, { payload }) => {
      state.userProfile = payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.hasError = "";
    },
    getUserProfileFail: (state, { payload }) => {
      state.userProfile = {};
      state.isLoading = false;
      state.isSuccess = false;
      state.hasError = payload;
    },
  },
});
export const { getUserProfile, getUserProfileSuccess, getUserProfileFail } =
  userProfileSlice.actions;
export const userProfileReducer = userProfileSlice.reducer;

export const fetchUserProfile = (id) => {
  return async (dispatch, getState) => {
    dispatch(getUserProfile());
    try {
      const userProfile = await fetch(
        import.meta.env.VITE_BASE_API_URL + `/users/${id}`
      );
      dispatch(getUserProfileSuccess(await userProfile.json()));
    } catch (error) {
      dispatch(getUserProfileFail(error.message));
    }
  };
};
