import { ScreenName } from '@Constants'
import { useAppSelector } from '@Hooks'
import i18n from '@I18n'
import { LoginScreen, SplashScreen } from '@Navigators/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import MainBottomTab from './MainBottomTab'
import { navigationRef } from './utils'
import { isEmpty } from 'lodash'
import { setAccessToken } from 'src/Services/httpClient'
const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const { language, user, accessToken } = useAppSelector((state) => state.user)
  const [ready, setReady] = React.useState(false)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken)
    }
    setReady(true)
  }, [accessToken])

  const renderNavigator = () => {
    if (!ready) {
      return <SplashNavigator />
    } else if (!isEmpty(user)) {
      return <MainNavigator />
    } else {
      return <AuthNavigator />
    }
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} />
      {renderNavigator()}
    </NavigationContainer>
  )
}

const SplashNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenName.SplashScreen}
    >
      <Stack.Screen name={ScreenName.SplashScreen} component={SplashScreen} />
    </Stack.Navigator>
  )
}

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenName.LoginScreen}
    >
      <Stack.Screen name={ScreenName.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenName.MainBottomTab}
    >
      <Stack.Screen name={ScreenName.MainBottomTab} component={MainBottomTab} />
    </Stack.Navigator>
  )
}

export default ApplicationNavigator
