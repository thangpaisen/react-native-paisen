import { Colors } from '@Constants'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const LoadingCM = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.primary} />
    </View>
  )
}

export default LoadingCM

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000044',
  },
})
