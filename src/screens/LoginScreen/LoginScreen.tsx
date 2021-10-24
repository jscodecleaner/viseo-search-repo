import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../redux/authSlice'
import styles from './LoginScreen.style'

/* Import Custom Components */
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomLoading from '../../components/CustomLoading/CustomLoading'

export type Props = {
  navigation: any
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [emailValidation, setEmailValidation] = useState<boolean>(true)
  const [passwordValidation, setPasswordValidation] = useState<boolean>(true)
  const authCheck = useSelector((state: any) => state.auth.authCheck)
  const dispatch = useDispatch()

  const handleEmail = (value: string) => {
    setEmail(value)
    setEmailValidation(true)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    setPasswordValidation(true)
  }

  const handleLogin = () => {
    setLoading(true)
    /* Email validation check */
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    } else {
      setEmailValidation(false)
      setLoading(false)
      return
    }

    /* Password validation check */
    if (!password.length) {
      setPasswordValidation(false)
      setLoading(false)
      return
    }

    dispatch(authActions.loginRequest({email, password}))
    setLoading(false)
    if (authCheck) navigation.navigate('ListScreen')
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.LoginTitle}>Welcome to Viseo</Text>
      <CustomInput
        value={email}
        placeholder="Email..."
        security={false}
        onChange={(text) => handleEmail(text)}
      />
      {!emailValidation && (
        <Text style={styles.ValidationText}>Enter valid email.</Text>
      )}
      <CustomInput
        value={password}
        placeholder="Password..."
        onChange={(text) => handlePassword(text)}
        security={true}
      />
      {!passwordValidation && (
        <Text style={{ ...styles.ValidationText, marginLeft: -150 }}>
          Enter password.
        </Text>
      )}
      <CustomButton name="Login" onClick={handleLogin} />
      {loading && <CustomLoading />}
    </View>
  )
}

export default LoginScreen
