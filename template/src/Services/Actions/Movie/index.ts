import { MovieResponse } from '@Type/Movie/index'
import { createAction } from '@reduxjs/toolkit'

// Định nghĩa các actions với payload
export const GET_LIST_MOVIE_REQUEST = createAction('GET_LIST_MOVIE_REQUEST')
export const GET_LIST_MOVIE_SUCCESS = createAction<MovieResponse>('GET_LIST_MOVIE_SUCCESS')
export const GET_LIST_MOVIE_ERROR = createAction('GET_LIST_MOVIE_ERROR')
