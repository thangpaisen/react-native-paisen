import { createAction } from '@reduxjs/toolkit'
import { User } from '@Type/User'

// Định nghĩa các actions với payload
export const REQUEST_LOGIN = createAction('REQUEST_LOGIN')
export const LOGIN_SUCCESS = createAction<User>('LOGIN_SUCCESS')
export const LOGIN_ERROR = createAction('LOGIN_ERROR')
