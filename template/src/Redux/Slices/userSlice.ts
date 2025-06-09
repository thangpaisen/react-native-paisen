import { LoginResponse, UserModel } from '@Models/UserModel'
import { fetchUserInfo, loginUser } from '@Redux/Thunks'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setAccessToken } from 'src/Services/httpClient'

export interface UserState {
  accessToken: string
  refreshToken: string
  user: UserModel | null
  isLoading: boolean
  language: string
}

export const initialState: UserState = {
  accessToken: '',
  refreshToken: '',
  user: null,
  isLoading: false,
  language: 'vi',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    updateUser: (state, action: PayloadAction<UserModel | null>) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
      state.accessToken = ''
      state.refreshToken = ''
    },
    setToken: (
      state,
      action: PayloadAction<{
        accessToken: string
        refreshToken?: string
      }>
    ) => {
      const { accessToken, refreshToken } = action.payload || {}
      state.accessToken = accessToken
      setAccessToken(accessToken)
      if (refreshToken) {
        state.refreshToken = refreshToken
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.user = new UserModel(action.payload)
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken || ''
      state.isLoading = false
    })
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<UserModel>) => {
      state.user = new UserModel(action.payload)
    })
  },
})

export const { setLanguage, updateUser, logoutUser, setToken, setLoading } = userSlice.actions

export default userSlice.reducer
