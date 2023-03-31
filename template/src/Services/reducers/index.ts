import { combineReducers } from '@reduxjs/toolkit'
import * as types from '../actions'
import user from './users'

export const appReducer = combineReducers({
  user
})

const rootReducer = (state: any, action: any) => {
  if (action.type === types.TOKEN_EXPIRED) {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
