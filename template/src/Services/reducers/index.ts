import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './User'
import movieReducer from './Movie'

export const appReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}
export default rootReducer
