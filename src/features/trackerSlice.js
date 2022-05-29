import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalAmount: 50000,
  totalBacker: 5000,
  plansLeft: {
    "Pledge with no reward": 0,
    "Bamboo Stand": 101,
    "Black Edition Stand": 64,
    "Mahogany Special Stand": 10,
  },
}

export const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    addAmount: (state, action) => {
      state.totalAmount += action.payload
    },
    addBacker: (state, action) => {
      state.totalBacker += 1
    },
    decreasePlanLeft: (state, action) => {
      console.log(state.plansLeft[[action.payload]])
      state.plansLeft[[action.payload]] -= 1
      console.log(state.plansLeft[[action.payload]])
    },
  },
})

// Exporting  auto generated actions from reducers
export const { addAmount, addBacker, decreasePlanLeft } = trackerSlice.actions

// Exporting pieces of state to be used in components with useSelector Hook
export const selectTotalAmount = (state) => state.tracker.totalAmount
export const selectTotalBacker = (state) => state.tracker.totalBacker
export const selectPlansLeft = (state) => state.tracker.plansLeft

// Reducer export
export default trackerSlice.reducer
