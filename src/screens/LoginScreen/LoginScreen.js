import React from 'react'
import { View, Text } from 'react-native'
import styles from './LoginScreen.style'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.LoginTitle}>Welcome to Viseo</Text>
    </View>
  )
}

export default LoginScreen
