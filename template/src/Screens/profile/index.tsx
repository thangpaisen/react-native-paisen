import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ButtonCM, HeaderCM } from '@Components'
import { Colors } from '@Constants'
import { APP_PADDING } from '@Utils/Utils'
import { useAppDispatch } from '@Hooks'
import { logoutUser } from '@Redux/Slices/userSlice'

const ProfileScreen = () => {
  const { t: lang } = useTranslation()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <SafeAreaView style={styles.ctnContainer}>
      <HeaderCM label={lang('common.profile')} isShowIconLeft={false} />
      <View style={styles.body}>
        <ButtonCM label='Logout' onPress={handleLogout} />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  ctnContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  body: {
    flex: 1,
    padding: APP_PADDING,
  },
})
