import { createSlice } from '@reduxjs/toolkit'
import { LOGIN_SUCCESS } from '@Services/Actions/User'
import UserModel from 'src/Model/UserModel'

export interface UserState {
  token: string
  user: UserModel | null
  isLoading: boolean
  language: string
}

export const initialState: UserState = {
  token: '',
  user: null,
  isLoading: false,
  language: 'vi',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    updateUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOGIN_SUCCESS, (state, action: any) => {
      state.user = action.payload
    })
  },
})

export const { setLanguage, updateUser, logoutUser } = userSlice.actions

export default userSlice.reducer
