export class MovieItem {
  id!: string
  title!: string
  constructor(dict: any) {
    if (dict === undefined || dict === null) {
      return
    }
    this.id = dict.id
    this.title = dict.title
  }
}

export interface Movie {
  movies: Array<MovieItem>
  title: string
  description: string
}
