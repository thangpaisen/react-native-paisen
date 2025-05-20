import { Colors } from '@Constants'
import React from 'react'
import { StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'

interface Props {
  title?: string
  checkedIcon?: string
  uncheckedIcon?: string
  checked?: boolean
  onPress?: () => void
  containerStyle?: object
  textStyle?: object
  radio?: boolean
  iconRight?: boolean
}

const CheckBoxCM = ({
  title,
  checkedIcon,
  uncheckedIcon,
  checked,
  onPress,
  containerStyle,
  textStyle,
  radio = false,
  iconRight = false,
}: Props) => {
  return (
    <CheckBox
      center
      title={title}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      checked={checked}
      onPress={onPress}
      containerStyle={{
        ...styles.container,
        ...containerStyle,
      }}
      textStyle={{ ...styles.text, ...textStyle }}
      iconRight={iconRight}
      {...(radio && { checkedIcon: 'dot-circle-o', uncheckedIcon: 'circle-o' })}
    />
  )
}

export default CheckBoxCM

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    gap: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '400',
    marginLeft: 6,
  },
})
