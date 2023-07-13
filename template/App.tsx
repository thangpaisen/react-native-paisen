import ApplicationNavigator from '@/Navigators/Application'
import store from '@/Store'
import React from 'react'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
    <Toast />
  </Provider>
)

export default App
