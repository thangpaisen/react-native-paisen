import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fonts } from '@Constants'

import { useTranslation } from 'react-i18next'
import HeaderCM from '@Components/Header'

const ProfileScreen = () => {
  const { t: lang } = useTranslation()

  return (
    <SafeAreaView style={styles.ctnContainer}>
      <HeaderCM label={'Home Screen'} isShowIconLeft={false} />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  ctnContainer: {
    flex: 1,
  },
  btn: {
    margin: 20,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'pink',
  },
})
