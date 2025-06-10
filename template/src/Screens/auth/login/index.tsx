import { ButtonCM, TextCM, InputCM } from '@Components'
import { useAppDispatch } from '@Hooks'
import { UserModel } from '@Models/UserModel'
import { setToken, updateUser } from '@Redux/Slices/userSlice'
import { UserServices } from '@Services'
import { APP_PADDING } from '@Utils/Utils'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    UserServices.login({
      username: username || 'emilys',
      password: password || 'emilyspass',
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
      <ScrollView>
        <View style={styles.ctn}>
          <TextCM style={styles.title}>Demo InputCM Component</TextCM>

          <InputCM
            label='Nhập tên đăng nhập'
            value={username}
            onChangeText={setUsername}
            containerStyle={styles.inputContainer}
          />
          <InputCM
            label='Nhập email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            containerStyle={styles.inputContainer}
            showError={!!email && !email.includes('@')}
            errorMessage='Email không hợp lệ'
          />
          <InputCM
            label='Nhập mật khẩu'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            containerStyle={styles.inputContainer}
          />
          <ButtonCM label='Login' containerStyle={styles.loginButton} onPress={handleLogin} />
        </View>
      </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  loginButton: {
    marginTop: 20,
  },
})
