import { createSlice } from "@reduxjs/toolkit";



export const removeSlice = createSlice({
    name: 'remove',
    initialState: null,
    reducers: {
        setRemove: (state, action) => {
            return action.payload
        }
    }
})

export const {setRemove} = removeSlice.actions
export default removeSlice.reducer

