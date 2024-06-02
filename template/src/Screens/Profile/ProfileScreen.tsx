import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fonts } from '@Constants'
import Toast from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTranslation } from 'react-i18next'

type Props = {}

const ProfileScreen = (props: Props) => {
  const { t: lang } = useTranslation()
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: Fonts.BeVietnamProMedium,
          fontSize: 20,
        }}
      >
        {lang('common.profile')}
      </Text>
      <TouchableOpacity
        style={styles.btn}
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
      >
        <Text>Toast</Text>
      </TouchableOpacity>
      <Icon name='home' size={20} />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  btn: {
    margin: 20,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'pink',
  },
})
