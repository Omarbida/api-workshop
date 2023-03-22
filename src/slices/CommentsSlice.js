import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments: [],
  isLoading: false,
  isSuccess: false,
  hasError: '',
}
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.isLoading = true
    },
    getCommentsSuccess: (state, { payload }) => {
      state.comments = payload
      state.isLoading = false
      state.isSuccess = true
      state.hasError = ''
    },
    getCommentsFail: (state, { payload }) => {
      state.comments = []
      state.isLoading = false
      state.isSuccess = false
      state.hasError = payload
    },
  },
})
export const {
  getComments,
  getCommentsFail,
  getCommentsSuccess,
} = commentsSlice.actions
export const commentsReducer = commentsSlice.reducer

export const fetchComments = (id) => {
  return async (dispatch, getState) => {
    dispatch(getComments())
    try {
      const comments = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      )
      dispatch(getCommentsSuccess(await comments.json()))
    } catch (error) {
      dispatch(getCommentsFail(error.message))
    }
  }
}
