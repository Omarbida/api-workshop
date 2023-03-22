import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userPostsReducer } from '../slices/PostsSlice'
import { userProfileReducer } from '../slices/ProfileSlice'
import { usersReducer } from '../slices/UsersSlice'
import { postReducer } from '../slices/PostSlice'
import { commentsReducer } from '../slices/CommentsSlice'
const combinedReducers = combineReducers({
  users: usersReducer,
  userProfile: userProfileReducer,
  userPosts: userPostsReducer,
  post: postReducer,
  comments: commentsReducer,
})
export const store = configureStore({
  reducer: combinedReducers,
})
