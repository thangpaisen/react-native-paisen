import { Colors } from '@Constants'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconSvgCM, TextCM } from '@Components'
import Icons from '@Assets/Icons'

interface Props {
  title?: string
  checked?: boolean
  onPress?: () => void
  containerStyle?: object
  textStyle?: object
  radio?: boolean
  iconRight?: boolean
}

const CheckBoxCM = ({
  title,
  checked,
  onPress,
  containerStyle,
  textStyle,
  radio = false,
  iconRight = false,
}: Props) => {
  const getIcon = () => {
    const iconProps = checked
      ? radio
        ? { source: Icons.IcRadioChecked, color: Colors.primary }
        : { source: Icons.IcCheckBoxCheck, color: Colors.primary }
      : radio
      ? { source: Icons.IcRadioUnchecked, color: Colors.black }
      : { source: Icons.IcCheckBoxUnchecked, color: Colors.black }

    return <IconSvgCM {...iconProps} />
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        iconRight ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' },
      ]}
      onPress={onPress}
    >
      {getIcon()}
      <TextCM style={[styles.text, textStyle]}>{title}</TextCM>
    </TouchableOpacity>
  )
}

export default CheckBoxCM

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 2,
  },
  text: {},
})
