import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TextCM } from '@Components'

type Props = {
  label: string
  isShowIconLeft?: boolean
  labelStyle?: TextStyle
  containerStyle?: ViewStyle
  onPressBack?: () => void
}

const HeaderCM = ({
  label = 'Header',
  isShowIconLeft = true,
  labelStyle,
  containerStyle,
  onPressBack,
}: Props) => {
  const navigation = useNavigation()

  const handlePressBack = () => {
    if (onPressBack) {
      onPressBack()
    } else {
      navigation.goBack()
    }
  }

  return (
    <View style={{ ...styles.header, ...containerStyle }}>
      {isShowIconLeft ? (
        <TouchableOpacity onPress={handlePressBack}>
          <Icon name='arrow-back-outline' size={24} color={'#000'} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <TextCM
        fontSize={20}
        bold
        color='#000'
        style={{
          ...labelStyle,
        }}
      >
        {label}
      </TextCM>
      <View />
    </View>
  )
}

export default HeaderCM

const styles = StyleSheet.create({
  header: {
    padding: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
