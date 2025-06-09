import { Movie } from '@Models/MovieModel'
import BaseServices from './BaseServices'

class MovieServices extends BaseServices {
  getAll() {
    return this.get<Movie>('https://reactnative.dev/movies.json')
  }
}

export default new MovieServices()
