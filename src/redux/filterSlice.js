import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            if (action.payload === 'all') {
                return '';
            }
            return action.payload;
        },
        setSearch: (state, action) => {
            return action.payload
        }
    },
});

export const { setFilter, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
