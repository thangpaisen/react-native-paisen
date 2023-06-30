import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SplashScreen, LoginScreen } from '@/Navigators/Stack'
import { navigationRef } from './utils'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Texts } from '@/Constants'
import MainBottomTab from './MainBottomTab'
import DetailScreen from '../Containers/DetailScreen'

const Stack = createSharedElementStackNavigator()

const ApplicationNavigator = () => {
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
