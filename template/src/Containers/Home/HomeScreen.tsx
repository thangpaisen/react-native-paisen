import { Images } from '@/Assets'
import { data } from '@/Constants/data'
import { useAppDispatch, useAppSelector } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import * as userActions from '@/Services/apis/users'
import React, { useEffect } from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
const { width } = Dimensions.get('screen')

const ITEM_WIDTH = width * 0.9
const ITEM_HEIGHT = ITEM_WIDTH * 0.9

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)

  const getData = async () => {
    const data = await dispatch(userActions.getListMovie())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView indicatorStyle='white' contentContainerStyle={{ alignItems: 'center' }}>
          {data.map((item) => (
            <View key={item.id}>
              <Pressable
                style={{ marginBottom: 14 }}
                onPress={() => {
                  navigate({ name: 'DetailScreen', params: { item } })
                }}
              >
                <SharedElement id={`item.${item.id}.image_url`}>
                  <Image
                    style={{
                      borderRadius: 14,
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                    }}
                    source={{ uri: item.image_url }}
                    resizeMode='cover'
                  />
                </SharedElement>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
