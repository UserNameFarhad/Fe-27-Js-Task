import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../_common/slices/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})