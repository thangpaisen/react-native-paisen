import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'

type Props = {
  source: any
  size?: number
  color?: string
  width?: number
  height?: number
}

const IconView = ({ source, size = 20, color, width, height }: Props) => {
  return <SvgXml xml={source} height={height || size} width={width || size} color={color} />
}

export default IconView

const styles = StyleSheet.create({})
