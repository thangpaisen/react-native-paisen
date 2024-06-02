export default class UserModel {
  id: number = Date.now()
  name: string = ''
  constructor(dict: any) {
    if (dict === undefined || dict === null) {
      return
    }
    this.id = dict.id
    this.name = dict.name
  }
}
