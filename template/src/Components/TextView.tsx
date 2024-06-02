import { StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors, Fonts } from '@Constants'

type Props = {
  fontSize?: number
  style?: TextStyle | Array<TextStyle | undefined>
  bold?: boolean
  color?: string
  children?: ReactNode
  numberOfLines?: number
}

const TextView = ({ fontSize, style, bold, color, children, numberOfLines, ...props }: Props) => {
  return (
    <Text
      style={[
        {
          ...styles.txtText,
          fontSize,
          color,
          fontFamily: bold ? Fonts.BeVietnamProSemiBold : Fonts.BeVietnamProMedium,
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

export default TextView

const styles = StyleSheet.create({
  txtText: {
    color: Colors.black,
    includeFontPadding: false,
  },
})
