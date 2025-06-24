import ApplicationNavigator from '@Navigators/Application'
import { persistor, store } from '@Redux/store'
import { ToastCM } from '@Components'
import React from 'react'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ApplicationNavigator />
        <ToastCM />
      </PersistGate>
    </Provider>
  </GestureHandlerRootView>
)

export default App
