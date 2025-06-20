import { Colors } from '@Constants'
import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewStyle, Modal, TouchableOpacity, Dimensions } from 'react-native'
import { TextCM, ButtonCM } from '@Components'

const { width: screenWidth } = Dimensions.get('window')

interface PopupProps {
  visible: boolean
  onClose: () => void
  icon?: ReactNode
  title: string
  content: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryPress?: () => void
  onSecondaryPress?: () => void
  containerStyle?: ViewStyle
  primaryButtonColor?: string
  secondaryButtonColor?: string
  closeOnBackdropPress?: boolean
}

const PopupCM = ({
  visible,
  onClose,
  icon,
  title,
  content,
  primaryButtonText = 'OK',
  secondaryButtonText,
  onPrimaryPress,
  onSecondaryPress,
  containerStyle,
  primaryButtonColor = Colors.primary,
  secondaryButtonColor = Colors.colorA3A9AC,
  closeOnBackdropPress = true,
}: PopupProps) => {
  const handlePrimaryPress = () => {
    onPrimaryPress?.()
    onClose()
  }

  const handleSecondaryPress = () => {
    onSecondaryPress?.()
    onClose()
  }

  const handleBackdropPress = () => {
    if (closeOnBackdropPress) {
      onClose()
    }
  }

  return (
    <Modal visible={visible} transparent animationType='fade' onRequestClose={onClose}>
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={handleBackdropPress}>
        <TouchableOpacity
          style={[styles.container, containerStyle]}
          activeOpacity={1}
          onPress={() => {}}
        >
          {!!icon && <View style={styles.iconContainer}>{icon}</View>}

          <TextCM bold style={styles.title}>
            {title}
          </TextCM>

          <TextCM style={styles.content}>{content}</TextCM>

          <View style={styles.buttonContainer}>
            <ButtonCM
              label={primaryButtonText}
              onPress={handlePrimaryPress}
              backgroundColor={primaryButtonColor}
              labelColor={Colors.backgroundColor}
              containerStyle={styles.primaryButton}
              bold
            />

            {!!secondaryButtonText && (
              <ButtonCM
                label={secondaryButtonText}
                onPress={handleSecondaryPress}
                backgroundColor={secondaryButtonColor}
                labelColor={Colors.backgroundColor}
                containerStyle={styles.secondaryButton}
                bold
              />
            )}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  )
}

export default PopupCM

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  container: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
    width: screenWidth - 80,
    maxWidth: 350,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 28,
  },
  content: {
    fontSize: 14,
    color: Colors.colorA3A9AC,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
  },
})
