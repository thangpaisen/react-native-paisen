import { createSlice } from '@reduxjs/toolkit'
import { LOGIN_SUCCESS } from '@Services/Actions/User'
import { GET_LIST_MOVIE_SUCCESS } from '@Services/Actions/Movie'
import { Movie } from '@Type/Movie/index'

export interface MovieState {
  isLoading: boolean
  data: Array<Movie>
}

export const initialState: MovieState = {
  isLoading: false,
  data: [],
}

const movieSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetData: (state, action) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GET_LIST_MOVIE_SUCCESS, (state, action) => {
      state.isLoading = false
      state.data = action.payload.movies
    })
  },
})

export const { resetData } = movieSlice.actions

export default movieSlice.reducer
