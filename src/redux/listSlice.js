import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'list',
  initialState: {
    lists: [],
    repoData: [],
  },
  reducers: {
    replaceLists: (state, action) => {
      state.lists = action.payload.lists
    },
    upateRepo: (state, action) => {
      state.repoData = action.payload.repoData
    },
  },
})

export const listActions = listSlice.actions

export default listSlice
