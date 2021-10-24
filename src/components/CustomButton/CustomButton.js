import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './CustomButton.style'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.ButtonStyle} onPress={props.onClick}>
      <Text style={styles.ButtonText}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
