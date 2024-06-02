import { Texts } from '@/Constants'
import { useAppSelector } from '@/Hooks'
import i18n from '@/I18n'
import { LoginScreen, SplashScreen } from '@/Navigators/Stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import MainBottomTab from './MainBottomTab'
import { navigationRef } from './utils'
import { ScreenName } from '@/Constants/Texts'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const language = useAppSelector((state) => state.user.language)

  useEffect(() => {
    getLanguage()
  }, [])

  const getLanguage = () => {
    i18n.changeLanguage(language)
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={ScreenName.SplashScreen}
        >
          <Stack.Screen name={ScreenName.SplashScreen} component={SplashScreen} />
          <Stack.Screen name={ScreenName.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={ScreenName.MainBottomTab} component={MainBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export default ApplicationNavigator
