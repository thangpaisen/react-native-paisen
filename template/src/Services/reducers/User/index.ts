import { createSlice } from '@reduxjs/toolkit'
import { User } from '@/Type'
import { LOGIN_SUCCESS } from '@/Services/Actions/User'

export interface UserState {
  token: string
  currentUser: User | null
  isLoading: boolean
  signing: boolean
  language: string
}

export const initialState: UserState = {
  token: '',
  currentUser: null,
  signing: false,
  isLoading: false,
  language: 'en',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOGIN_SUCCESS, (state, action) => {
      state.signing = false
      state.currentUser = action.payload
    })
  },
})

export const { setLanguage } = userSlice.actions

export default userSlice.reducer
