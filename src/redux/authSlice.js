import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    authCheck: false,
  },
  reducers: {
    loginRequest: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.authCheck = true
    },
    logoutRequest: (state) => {
      state.email = ''
      state.password = ''
      state.authCheck = false
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
