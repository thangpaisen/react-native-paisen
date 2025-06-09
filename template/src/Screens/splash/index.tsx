import Icons from '@Assets/Icons'
import { IconSvgCM } from '@Components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <IconSvgCM source={Icons.Logo} size={140} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
})

export default SplashScreen
