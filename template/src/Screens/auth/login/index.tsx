import { ButtonCM, TextCM } from '@Components'
import { useAppDispatch } from '@Hooks'
import { UserModel } from '@Models/UserModel'
import { setToken, updateUser } from '@Redux/Slices/userSlice'
import { UserServices } from '@Services'
import { APP_PADDING } from '@Utils/Utils'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

const LoginScreen = () => {
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    UserServices.login({
      username: 'emilys',
      password: 'emilyspass',
    })
      .then((res) => {
        dispatch(
          setToken({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          })
        )
        dispatch(updateUser(new UserModel(res)))
      })
      .catch((err) => {
        console.log('Login error:', err)
      })
  }

  return (
    <SafeAreaView style={styles.ctn}>
      <View style={styles.ctn}>
        <TextCM>Login Screen</TextCM>
        <ButtonCM label='Login' containerStyle={{ marginTop: 20 }} onPress={handleLogin} />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    backgroundColor: '#fff',
    padding: APP_PADDING,
  },
})
