import { Colors, Fonts } from '@Constants'
import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

type Props = {
  fontSize?: number
  style?: TextStyle | Array<TextStyle | undefined>
  bold?: boolean
  color?: string
  children?: ReactNode
  numberOfLines?: number
}

const TextCM = ({ fontSize, style, bold, color, children, numberOfLines, ...props }: Props) => {
  return (
    <Text
      style={[
        {
          ...styles.txtText,
          fontSize,
          color,
          fontFamily: bold ? Fonts.BeVietnamProSemiBold : Fonts.BeVietnamProRegular,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  )
}

export default TextCM

const styles = StyleSheet.create({
  txtText: {
    color: Colors.black,
    includeFontPadding: false,
  },
})
