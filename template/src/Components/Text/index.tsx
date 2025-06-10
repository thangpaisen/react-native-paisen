import { Colors, Fonts } from '@Constants'
import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

interface Props extends TextProps {
  fontSize?: number
  bold?: boolean
  color?: string
  children?: ReactNode
}

const TextCM = ({ fontSize, style, bold, color, children, ...props }: Props) => {
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
