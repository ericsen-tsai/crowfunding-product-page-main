import { configureStore } from "@reduxjs/toolkit"
import trackerReducer from "../features/trackerSlice"

export const store = configureStore({
  reducer: {
    tracker: trackerReducer,
  },
})
