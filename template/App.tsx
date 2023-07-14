import ApplicationNavigator from '@/Navigators/Application'
import store, { persistor } from '@/Store'
import React from 'react'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ApplicationNavigator />
      <Toast />
    </PersistGate>
  </Provider>
)

export default App
