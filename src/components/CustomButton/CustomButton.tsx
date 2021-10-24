import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './CustomButton.style'

export type Props = {
  onClick: () => void;
  name: string
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.ButtonStyle} onPress={props.onClick}>
      <Text style={styles.ButtonText}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
