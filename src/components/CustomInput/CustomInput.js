import React from 'react'
import { TextInput } from 'react-native'
import styles from './CustomInput.style'

const CustomInput = (props) => {
  return (
    <TextInput
      style={styles.InputBox}
      onChangeText={(text) => props.onChange(text)}
      value={props.value}
      placeholder={props.placeholder}
      secureTextEntry={props.security}
      autoCapitalize="none"
    />
  )
}

export default CustomInput
