import { Colors } from '@Constants'
import React from 'react'
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import TextView from './TextView'
interface ButtonViewProp {
  label?: string
  containerStyle?: ViewStyle
  labelStyle?: TextStyle
  backgroundColor?: string
  labelColor?: string
  bold?: boolean
  onPress?: () => void
  disabled?: boolean
}

const ButtonView = ({
  onPress,
  label,
  containerStyle,
  backgroundColor = Colors.primary,
  labelColor,
  labelStyle,
  bold,
  disabled,
}: ButtonViewProp) => {
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
      <TextView bold={bold} color={labelColor} style={[styles.txtLabel, labelStyle]}>
        {label}
      </TextView>
    </TouchableOpacity>
  )
}

export default ButtonView

const styles = StyleSheet.create({
  container: {
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  txtLabel: {},
})
