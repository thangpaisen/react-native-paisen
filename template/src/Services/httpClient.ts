/* eslint-disable dot-notation */
import axios from 'axios'
import { store } from '@Redux/store'
import { logoutUser, setToken } from '@Redux/Slices/userSlice'
// import { navigate } from '../navigation/RootNavigation'; // nếu bạn dùng custom navigator
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const HOST = 'https://dummyjson.com'

const httpClient = axios.create({
  baseURL: HOST,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status

    if (status === 401) {
      // Session has expired, need to refresh token
      const UserServices = require('./UserServices').default
      try {
        const res = await UserServices.refreshToken(store.getState().user.refreshToken)
        store.dispatch(setToken(res))
        error.config.headers['Authorization'] = `Bearer ${res.accessToken}`
        return httpClient.request(error.config)
      } catch (refreshError) {
        store.dispatch(logoutUser())
        return Promise.reject(refreshError)
      }
    }

    if (status === 403) {
      console.warn('Forbidden - Redirecting...')
    }

    return Promise.reject(error)
  }
)

/**
 * Helper to set the Authorization header for all requests.
 * @param token - The access token to set, or null/undefined to remove it.
 */
export const setAccessToken = (token?: string | null) => {
  console.log('token: ', token)
  if (token) {
    httpClient.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete httpClient.defaults.headers.common.Authorization
  }
}

export default httpClient
