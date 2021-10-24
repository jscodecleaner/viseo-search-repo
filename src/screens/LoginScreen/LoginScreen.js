import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './../../redux/authSlice'
import styles from './LoginScreen.style'

/* Import Custom Components */
import CustomInput from './../../components/CustomInput/CustomInput'
import CustomButton from './../../components/CustomButton/CustomButton'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValidation, setEmailValidation] = useState(true)
  const [passwordValidation, setPasswordValidation] = useState(true)
  const authCheck = useSelector((state) => state.auth.authCheck)
  const dispatch = useDispatch()

  const handleEmail = (value) => {
    setEmail(value)
    setEmailValidation(true)
  }

  const handlePassword = (value) => {
    setPassword(value)
    setPasswordValidation(true)
  }

  const handleLogin = () => {
    /* Email validation check */
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    } else {
      setEmailValidation(false)
      return
    }

    /* Password validation check */
    if (!password.length) {
      setPasswordValidation(false)
      return
    }

    dispatch(authActions.loginRequest(email, password))
    if (authCheck) navigation.navigate('ListScreen')
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.LoginTitle}>Welcome to Viseo</Text>
      <CustomInput
        value={email}
        placeholder="Email..."
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
    </View>
  )
}

export default LoginScreen
