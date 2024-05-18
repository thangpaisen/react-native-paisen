import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SplashScreen, LoginScreen } from '@/Navigators/Stack'
import { navigationRef } from './utils'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Texts } from '@/Constants'
import MainBottomTab from './MainBottomTab'
import DetailScreen from '../Containers/DetailScreen'
import { useAppSelector } from '@/Hooks'
import i18n from '@/I18n'

const Stack = createSharedElementStackNavigator()

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }: any) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    }
  },
}

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
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Texts.Splash}>
          <Stack.Screen name={Texts.Splash} component={SplashScreen} />
          <Stack.Screen name={Texts.Login} component={LoginScreen} />
          <Stack.Screen name={Texts.MainBottomTab} component={MainBottomTab} />
          <Stack.Screen
            name={Texts.DetailScreen}
            component={DetailScreen}
            options={() => options}
          />
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
