import React, { useRef, useState } from 'react'
import {
  Animated,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import Icons from '@Assets/Icons'
import { Colors, Fonts } from '@Constants'
import IconSvgCM from '../IconSvg'
import TextCM from '../Text'

interface InputCMProps extends TextInputProps {
  label: string
  containerStyle?: ViewStyle
  inputStyle?: TextStyle
  labelStyle?: TextStyle
  errorMessage?: string
  showError?: boolean
}

const InputCM = ({
  label,
  value,
  onChangeText,
  onFocus,
  onBlur,
  containerStyle,
  inputStyle,
  labelStyle,
  errorMessage,
  showError = false,
  placeholder,
  ...props
}: InputCMProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(!!value)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current
  const inputRef = useRef<TextInput>(null)

  const handleFocus = (e: any) => {
    setIsFocused(true)
    animateLabel(1)
    onFocus?.(e)
  }

  const handleBlur = (e: any) => {
    setIsFocused(false)
    if (!hasValue) {
      animateLabel(0)
    }
    onBlur?.(e)
  }

  const handleChangeText = (text: string) => {
    setHasValue(!!text)
    if (text) {
      animateLabel(1)
    } else if (!isFocused) {
      animateLabel(0)
    }
    onChangeText?.(text)
  }

  const animateLabel = (toValue: number) => {
    Animated.timing(animatedLabel, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const handleContainerPress = () => {
    if (!isFocused) {
      inputRef.current?.focus()
    }
  }

  const labelStyle_animated = {
    position: 'absolute' as const,
    left: 16,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 8],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.colorA3A9AC, isFocused ? Colors.black : Colors.black],
    }),
    backgroundColor: Colors.backgroundColor,
    fontFamily: isFocused ? Fonts.BeVietnamProMedium : Fonts.BeVietnamProRegular,
    zIndex: 1,
    includeFontPadding: false,
  }

  const containerBorderColor = showError
    ? '#FF4D4F'
    : isFocused
    ? Colors.primary
    : Colors.colorE5E5E5

  const showIconEye = () => {
    if (props.secureTextEntry) {
      return (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}
        >
          <IconSvgCM source={isPasswordVisible ? Icons.IcEye : Icons.IcEyeOff} />
        </TouchableOpacity>
      )
    }
    return null
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.inputContainer, { borderColor: containerBorderColor }]}
        onPress={handleContainerPress}
        activeOpacity={1}
      >
        <Animated.Text style={[labelStyle_animated, labelStyle]}>{label}</Animated.Text>
        <TextInput
          ref={inputRef}
          {...props}
          secureTextEntry={props.secureTextEntry && !isPasswordVisible}
          value={value}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[styles.input, inputStyle, props.secureTextEntry && { paddingRight: 50 }]}
          placeholder={isFocused ? placeholder || label : ''}
        />
        {showIconEye()}
      </TouchableOpacity>
      {showError && errorMessage && <TextCM style={styles.errorText}>{errorMessage}</TextCM>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.backgroundColor,
  },
  input: {
    height: 56,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
    fontSize: 16,
    fontFamily: Fonts.BeVietnamProRegular,
    color: Colors.black,
    includeFontPadding: false,
  },
  errorText: {
    color: '#FF4D4F',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default InputCM
