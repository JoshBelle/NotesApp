import { createSlice } from "@reduxjs/toolkit";



export const openSlice = createSlice({
    name: 'open',
    initialState: null,
    reducers: {
        setOpen: (state, action) => {
            state = action.payload
            return action.payload
        }
    }
})

export const {setOpen} = openSlice.actions
export default openSlice.reducer