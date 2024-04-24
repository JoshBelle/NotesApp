import { createSlice } from "@reduxjs/toolkit";



export const openSlice = createSlice({
    name: 'open',
    initialState: false,
    reducers: {
        setOpen: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const {setOpen} = openSlice.actions
export default openSlice.reducer