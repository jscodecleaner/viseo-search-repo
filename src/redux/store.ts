import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import listSlice from './listSlice'

const store = configureStore({
  reducer: { auth: authSlice.reducer, list: listSlice.reducer },
})

export default store
