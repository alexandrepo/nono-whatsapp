import { RootState } from '@/app/store.interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = { 
    filter: []
}

export const whatsAppSlice = createSlice({
  name: 'whatsapp',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<any>) { 
      state.filter = action.payload
    },
  },
})

export const { changeFilter } = whatsAppSlice.actions
export const whatsAppSelector = (state:RootState) => state.whatsapp
export const whatsAppFilterSelector = (state:RootState) => state.whatsapp.filter
export default whatsAppSlice.reducer