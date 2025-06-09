export class UserModel {
  id!: number
  name: string = ''
  email: string = ''
  firstName: string = ''
  lastName: string = ''
  username: string = ''
  phone?: string
  role?: string
  constructor(dict: any) {
    if (dict === undefined || dict === null) {
      return
    }
    this.id = dict.id
    this.name = dict.name
    this.email = dict.email
    this.firstName = dict.firstName
    this.lastName = dict.lastName
    this.username = dict.username
    this.phone = dict.phone
    this.role = dict.role
  }
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}
