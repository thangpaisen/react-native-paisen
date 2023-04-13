import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/Hooks'
import * as userActions from '@/Services/apis/users'
import { navigate, navigationRef } from '@/Navigators/utils'
import { data } from '@/Constants/data'
import { SharedElement } from 'react-navigation-shared-element'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('screen')

const ITEM_WIDTH = width * 0.9
const ITEM_HEIGHT = ITEM_WIDTH * 0.9

const LoginView = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  const user = useAppSelector(state => state.user)

  const getData = async () => {
    const data = await dispatch(userActions.getListMovie())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {data.map(item => (
            <View key={item.id}>
              <Pressable
                style={{ marginBottom: 14 }}
                onPress={() => {
                  // navigation.navigate('DetailScreen', { item })
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
                    resizeMode="cover"
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

export default LoginView

const styles = StyleSheet.create({})
