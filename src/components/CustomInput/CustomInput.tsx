import React from 'react'
import { TextInput } from 'react-native'
import styles from './CustomInput.style'

export type Props = {
  value: string;
  placeholder: string;
  security: boolean;
  onChange: (text: string) => void;
}

const CustomInput: React.FC<Props> = (props) => {
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
