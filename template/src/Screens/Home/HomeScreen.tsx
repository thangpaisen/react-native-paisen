import ButtonView from '@Components/ButtonView'
import TextView from '@Components/TextView'
import { useAppDispatch, useAppSelector } from '@Hooks'
import { getListMovie } from '@Services/Apis/movies'
import { APP_PADDING } from '@Utils/Utils'
import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
const { width } = Dimensions.get('screen')

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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextView fontSize={24}>Example Text bold</TextView>
        <TextView bold fontSize={24}>
          Example Text
        </TextView>
        <ButtonView
          label='Button'
          containerStyle={{
            width: '100%',
          }}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    gap: APP_PADDING,
  },
})
