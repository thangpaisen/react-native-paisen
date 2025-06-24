import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ToastState {
  isVisible: boolean
  message: string
  type: 'success' | 'warning' | 'error' | 'info'
  duration: number
}

const initialState: ToastState = {
  isVisible: false,
  message: '',
  type: 'info',
  duration: 3000,
}

interface ShowToastPayload {
  message: string
  type: 'success' | 'warning' | 'error' | 'info'
  duration?: number
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ShowToastPayload>) => {
      state.isVisible = true
      state.message = action.payload.message
      state.type = action.payload.type
      state.duration = action.payload.duration || 3000
    },
    hideToast: (state) => {
      state.isVisible = false
      state.message = ''
    },
  },
})

export const { showToast, hideToast } = toastSlice.actions
export default toastSlice.reducer
