import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ListState {
  lists: any,
  repoData: any,
}

const initialState: ListState = {
  lists: [],
  repoData: [],
}


const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    replaceLists: (state, action: PayloadAction<any>) => {
      state.lists = action.payload.lists
    },
    upateRepo: (state, action: PayloadAction<any>) => {
      state.repoData = action.payload.repoData
    },
  },
})

export const listActions = listSlice.actions

export default listSlice
