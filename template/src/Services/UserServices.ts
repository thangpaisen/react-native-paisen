import { LoginResponse, UserModel } from '@Models/UserModel'
import BaseServices from './BaseServices'

class UserServices extends BaseServices {
  login({ username, password }: { username: string; password: string }) {
    return this.post<LoginResponse>('/auth/login', { username, password })
  }
  getInfo() {
    return this.get<UserModel>('/auth/me')
  }
  refreshToken(refreshToken: string) {
    return this.post<LoginResponse>('/auth/refresh', { refreshToken })
  }
}

export default new UserServices()
