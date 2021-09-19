import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Fizik tekrarı',
                color: 'pink',
            },
            {
                id: 2,
                title: '5 gün sonra kız arkadaşımın doğum günü. O güne özel hazırlık yapmalıyım. Dışarı çıkıp eğlenmeliyiz.',
                color: 'purple',
            },
            {
                id: 3,
                title: 'En az 3 saat kod yaz.',
                color: 'yellow',
            },
            {
                id: 3,
                title: 'Matematik tekrarı',
                color: 'green',
            },
        ]
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

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;