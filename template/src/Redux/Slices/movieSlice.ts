import { MovieItem } from '@Models/MovieModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MovieState {
  isLoading: boolean
  data: MovieItem[]
}

const initialState: MovieState = {
  isLoading: false,
  data: [],
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setMovies: (state, action: PayloadAction<MovieItem[]>) => {
      state.data = action.payload
    },
    resetData: (state) => {
      state.data = []
    },
  },
})

export const { setLoading, setMovies, resetData } = movieSlice.actions
export default movieSlice.reducer
