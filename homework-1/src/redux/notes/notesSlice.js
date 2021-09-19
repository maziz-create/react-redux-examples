import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: []
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                console.log(action.payload);
                // state.items.push(action.payload);
            }
        }
    }
})