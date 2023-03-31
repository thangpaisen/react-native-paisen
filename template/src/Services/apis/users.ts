import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export type LoginData = {
  username: string
  password: string
  request_token: string
}

export const getRequestToken = (): any => ({
  type: Actions.FETCHING_REQUEST_TOKEN,
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.requestToken,
    } as AxiosRequestConfig,
  },
})

export const getListMovie = (): any => ({
  type: 'GET_DATA',
  payload: {
    request: {
      method: 'GET',
      url: 'https://reactnative.dev/movies.json',
    } as AxiosRequestConfig,
  },
})
