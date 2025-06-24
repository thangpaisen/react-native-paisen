import { IconSvgCM, TextCM } from '@Components'
import { Fonts } from '@Constants'
import React, { useEffect } from 'react'
import { Animated, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './icons'
import { hideToast } from '@Redux/Slices/toastSlice'
import { RootState } from '@Redux/store'

const Toast = () => {
  const dispatch = useDispatch()
  const { isVisible, message, type, duration } = useSelector((state: RootState) => state.toast)
  const animatedValue = React.useRef(new Animated.Value(0)).current
  const panY = React.useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isVisible) {
      // Reset pan value
      panY.setValue(0)

      // Show animation
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()

      // Auto hide after specified duration
      const timer = setTimeout(() => {
        handleHide()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleHide = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      dispatch(hideToast())
    })
  }

  const onGestureEvent = Animated.event([{ nativeEvent: { translationY: panY } }], {
    useNativeDriver: true,
  })

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const { translationY, velocityY } = event.nativeEvent

      // If swiped up significantly or with high velocity, hide toast
      if (translationY < -50 || velocityY < -500) {
        Animated.parallel([
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(panY, {
            toValue: -200,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start(() => {
          dispatch(hideToast())
          panY.setValue(0)
        })
      } else {
        // Snap back to original position
        Animated.spring(panY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 100,
          friction: 8,
        }).start()
      }
    }
  }

  if (!isVisible) {
    return null
  }

  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return styles.successToast
      case 'warning':
        return styles.warningToast
      case 'error':
        return styles.errorToast
      case 'info':
        return styles.infoToast
      default:
        return styles.infoToast
    }
  }

  const getMessageStyle = () => {
    switch (type) {
      case 'success':
        return { color: '#10B981' }
      case 'warning':
        return { color: '#F59E0B' }
      case 'error':
        return { color: '#EF4444' }
      case 'info':
        return { color: '#3B82F6' }
      default:
        return { color: '#3B82F6' }
    }
  }

  const getIconContainerStyle = () => {
    switch (type) {
      case 'success':
        return styles.successIconContainer
      case 'warning':
        return styles.warningIconContainer
      case 'error':
        return styles.errorIconContainer
      case 'info':
        return styles.infoIconContainer
      default:
        return styles.infoIconContainer
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <IconSvgCM source={SuccessIcon} size={16} />
      case 'warning':
        return <IconSvgCM source={WarningIcon} size={16} />
      case 'error':
        return <IconSvgCM source={ErrorIcon} size={16} />
      case 'info':
        return <IconSvgCM source={InfoIcon} size={16} />
      default:
        return <IconSvgCM source={InfoIcon} size={16} />
    }
  }

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  })

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  const combinedTranslateY = Animated.add(translateY, panY)

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: combinedTranslateY }],
            opacity,
          },
        ]}
      >
        <View style={[styles.toast, getToastStyle()]}>
          <View style={[styles.iconContainer, getIconContainerStyle()]}>{getIcon()}</View>
          <TextCM style={[styles.message, getMessageStyle()]}>{message}</TextCM>
          <TouchableOpacity onPress={handleHide} style={styles.closeButton}>
            <IconSvgCM source={CloseIcon} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 10,
    left: 16,
    right: 16,
    zIndex: 9999,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  message: {
    flex: 1,
    fontFamily: Fonts.BeVietnamProMedium,
  },
  closeButton: {
    padding: 4,
    marginLeft: 8,
  },
  successToast: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  warningToast: {
    borderColor: '#F59E0B',
    backgroundColor: '#FFFBEB',
  },
  errorToast: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  infoToast: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  successIconContainer: {
    backgroundColor: '#10B981',
  },
  warningIconContainer: {
    backgroundColor: '#F59E0B',
  },
  errorIconContainer: {
    backgroundColor: '#EF4444',
  },
  infoIconContainer: {
    backgroundColor: '#3B82F6',
  },
})

export default Toast
