export interface MovieResponse {
  movies: Array<Movie>
  title: string
  description: string
}

export interface Movie {
  id: string
  title: string
}
