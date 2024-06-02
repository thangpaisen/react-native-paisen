import * as Endpoints from '@Services/endpoints'
import { AxiosRequestConfig } from 'axios'
import {
  GET_LIST_MOVIE_ERROR,
  GET_LIST_MOVIE_REQUEST,
  GET_LIST_MOVIE_SUCCESS,
} from '../Actions/Movie'

export const getListMovie = (): any => ({
  types: [GET_LIST_MOVIE_REQUEST, GET_LIST_MOVIE_SUCCESS, GET_LIST_MOVIE_ERROR],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.home,
    } as AxiosRequestConfig,
  },
})
