import React from 'react'
import { View, Text } from 'react-native'
import styles from './ListScreen.style'

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.LoginTitle}>Welcome to ListScreen</Text>
    </View>
  )
}

export default ListScreen
