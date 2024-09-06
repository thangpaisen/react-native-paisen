import HeaderCM from '@Components/Header'
import { ButtonCM, TextCM } from '@Components/index'
import { useAppDispatch, useAppSelector } from '@Hooks'
import { getListMovie } from '@Services/Apis/movies'
import { APP_PADDING } from '@Utils/Utils'
import React, { useEffect } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const movie = useAppSelector((state) => state.movie.data)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    dispatch(getListMovie()).then((res: any) => {
      if (!res.payload) {
      }
    })
  }

  return (
    <SafeAreaView style={styles.ctnContainer}>
      <HeaderCM label={'Home Screen'} isShowIconLeft={false} />
      <View style={styles.container}>
        <TextCM fontSize={24}>Example Text bold</TextCM>
        <TextCM bold fontSize={24}>
          Example Text
        </TextCM>
        <ButtonCM
          label='Toast'
          containerStyle={{
            width: '100%',
          }}
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Hello' + Date.now(),
              text2: 'This is some something 👋',
              onPress: () => {
                Toast.hide()
              },
            })
          }}
        />

        <Icon name='home' size={20} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ctnContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    gap: APP_PADDING,
  },
})
