import * as Actions from '../actions'
import { User } from '@/Type'

export interface UserState {
  token: string
  currentUser: User | null
  isLoading: boolean
  signing: boolean
}

export const defaultState: UserState = {
  token: '',
  currentUser: null,
  signing: false,
  isLoading: false,
}

export const user = (state = defaultState, action: any): UserState => {
  switch (action.type) {
    case Actions.REQUEST_LOGIN:
      return { ...state, signing: true }

    case Actions.LOGIN_SUCCESS:
    case Actions.LOGIN_ERROR:
      return { ...state, signing: false }

    default:
      return state
  }
}

export default user
