import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countValue: 0
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        handleIncressCountAction: (state, action) => {
            state.countValue += 1


        }
    }
})
  
export const { handleIncressCountAction } = counterSlice.actions

export default counterSlice.reducer