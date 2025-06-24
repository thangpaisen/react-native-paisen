import { showToast as showToastAction } from '@Redux/Slices/toastSlice'
import { useDispatch } from 'react-redux'

export const useToast = () => {
  const dispatch = useDispatch()

  const showToast = (
    message: string,
    type: 'success' | 'warning' | 'error' | 'info' = 'success',
    duration?: number
  ) => {
    dispatch(showToastAction({ message, type, duration }))
  }

  return {
    showToast,
  }
}
