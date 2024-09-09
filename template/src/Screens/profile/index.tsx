import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import HeaderCM from '@Components/Header'
import { useTranslation } from 'react-i18next'

const ProfileScreen = () => {
  const { t: lang } = useTranslation()

  return (
    <SafeAreaView style={styles.ctnContainer}>
      <HeaderCM label={lang('common.profile')} isShowIconLeft={false} />
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
