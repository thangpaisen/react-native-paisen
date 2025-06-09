import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { movieReducer, userReducer } from './Slices'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], // chỉ persist state movie, thêm slice khác nếu muốn
}

const rootReducer = {
  movie: movieReducer,
  user: userReducer,
  // Thêm các slice khác ở đây
}

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer))

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
