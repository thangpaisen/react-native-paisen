import * as Endpoints from '@Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export const getListMovie = (): any => ({
  type: 'GET_DATA',
  payload: {
    request: {
      method: 'GET',
      url: 'https://reactnative.dev/movies.json',
    } as AxiosRequestConfig,
  },
})
