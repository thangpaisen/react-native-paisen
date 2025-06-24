import React from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { ButtonCM, TextCM } from '@Components'
import { useToast } from '@Hooks'

const ToastExample: React.FC = () => {
  const { showToast } = useToast()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TextCM style={styles.title}>Toast Examples</TextCM>

        <View style={styles.buttonContainer}>
          <ButtonCM
            label='Success Toast'
            onPress={() => showToast('Successful Toast Sample', 'success')}
            backgroundColor='#10B981'
            containerStyle={styles.button}
          />

          <ButtonCM
            label='Warning Toast'
            onPress={() => showToast('Warning Toast Sample', 'success')}
            backgroundColor='#F59E0B'
            containerStyle={styles.button}
          />

          <ButtonCM
            label='Error Toast'
            onPress={() => showToast('Error Toast Sample', 'error')}
            backgroundColor='#EF4444'
            containerStyle={styles.button}
          />

          <ButtonCM
            label='Info Toast'
            onPress={() => showToast('Info Toast Sample', 'info')}
            backgroundColor='#3B82F6'
            containerStyle={styles.button}
          />

          <ButtonCM
            label='Quick Toast (1s)'
            onPress={() => showToast('Quick Toast - 1 second', 'success', 1000)}
            backgroundColor='#059669'
            containerStyle={styles.button}
          />

          <ButtonCM
            label='Long Toast (5s)'
            onPress={() => showToast('Long Toast - 5 seconds', 'warning', 5000)}
            backgroundColor='#D97706'
            containerStyle={styles.button}
          />

          <ButtonCM
            label='Very Long Toast (10s)'
            onPress={() => showToast('Very Long Toast - 10 seconds', 'info', 10000)}
            backgroundColor='#1D4ED8'
            containerStyle={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1F2937',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
  },
})

export default ToastExample
