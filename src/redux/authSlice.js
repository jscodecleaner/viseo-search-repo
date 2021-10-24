import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    authCheck: 'false',
  },
  reducers: {
    loginRequest: (state, action) => {
      state.email = actions.payload.email
      state.password = acitons.payload.password
      state.authCheck = true
    },
    logoutRequest: (state, action) => {
      state.email = ''
      state.password = ''
      authCheck = false
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
