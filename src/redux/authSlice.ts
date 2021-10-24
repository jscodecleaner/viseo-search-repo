import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  email: string,
  password: string,
  authCheck: boolean,
}

const initialState: AuthState = {
  email: '',
  password: '',
  authCheck: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<{ email: string, password: string }>) => {
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
