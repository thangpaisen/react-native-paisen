import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserServices } from '@Services'

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await UserServices.login(credentials)
      return response
    } catch (error: any) {
      return rejectWithValue(error.response)
    }
  }
)

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserServices.getInfo()
      return response
    } catch (error: any) {
      return rejectWithValue(error.response)
    }
  }
)
