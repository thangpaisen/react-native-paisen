import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '@/Assets'
import { Fonts } from '@/Constants'

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: Fonts.BeVietnamProMedium,
        }}
      >
        ProfileScreen
      </Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
