import Icons from '@/Assets/Icons'
import IconView from '@/Components/IconView'
import { Texts } from '@/Constants'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

const SplashScreen = () => {
  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 2000)
    )
    navigateAndSimpleReset(Texts.MainBottomTab)
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={styles.container}>
      <IconView source={Icons.Logo} size={140} />
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
