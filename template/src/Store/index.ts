import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@/Services/reducers'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { HOST } from '@/Services/endpoints'
import get from 'lodash/get'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: HOST,
  responseType: 'json',
  // params: { api_key: '1270f8b48ea8fdfeb112071f737ab3bb' }
})

const apiMiddleware = {
  interceptors: {
    request: [
      {
        success: function (store: any, req: any) {
          //merge header from client and we pass manual
          const headers = Object.assign(
            {},
            get(req, 'headers.common'),
            get(req, 'reduxSourceAction.payload.request.headers')
          )
          if (get(store.getState(), 'user.token')) {
            headers.Authorization = `Token ${get(store.getState(), 'user.token')}`
          }
          return {
            ...req,
            headers: {
              common: headers,
            },
          }
        },
      },
    ],
    response: [
      {
        success: function (store: any, res: any) {
          return Promise.resolve(res.data)
        },
        error: function (store: any, error: any) {
          return Promise.reject(error)
        },
      },
    ],
  },
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: ['user'], // only navigation will be persisted
  //   blacklist: ['navigation'] // navigation will not be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, axiosMiddleware(client, apiMiddleware)],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
