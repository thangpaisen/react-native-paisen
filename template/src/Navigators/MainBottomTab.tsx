import { Colors, Texts } from '@Constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { HomeScreen, ProfileScreen } from './Stack'

const Tab = createBottomTabNavigator()

const MainBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Texts.HomeScreen}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: Colors.colorA3A9AC,
        },

        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => {
          let iconName = ''
          let focusedColor = focused ? Colors.blue : Colors.colorA3A9AC
          if (route.name === Texts.HomeScreen) {
            iconName = 'home'
          } else if (route.name === Texts.ProfileScreen) {
            iconName = 'person'
          }

          return <Icon name={iconName} size={22} color={focusedColor} />
        },
        // tabBarLabel: ({ focused, color }) => {
        //   return <Text>Hi</Text>
        // },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <Tab.Screen name={Texts.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={Texts.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainBottomTab
