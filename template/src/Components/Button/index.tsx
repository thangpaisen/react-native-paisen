import { Colors, Fonts } from '@Constants'
import React from 'react'
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { TextCM } from '@Components'

interface ButtonCMProp {
  label?: string
  containerStyle?: ViewStyle
  labelStyle?: TextStyle
  backgroundColor?: string
  labelColor?: string
  bold?: boolean
  onPress?: () => void
  disabled?: boolean
}

const ButtonCM = ({
  onPress,
  label,
  containerStyle,
  backgroundColor = Colors.primary,
  labelColor,
  labelStyle,
  bold,
  disabled,
}: ButtonCMProp) => {
  const onPressButton = () => {
    onPress?.()
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressButton}
      style={{
        ...styles.container,
        backgroundColor,
        ...containerStyle,
      }}
    >
      <TextCM bold={bold} color={labelColor} style={[styles.txtLabel, labelStyle]}>
        {label}
      </TextCM>
    </TouchableOpacity>
  )
}

export default ButtonCM

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  txtLabel: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.BeVietnamProMedium,
  },
})
