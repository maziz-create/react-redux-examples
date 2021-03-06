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
                id: 4,
                title: 'Matematik tekrarı',
                color: 'green',
            },
        ],
        filterText: '',
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                // console.log("gelen action payload => ", action.payload);
                state.items.push(action.payload);
                // console.log("gelen note id => ", action.payload.id);s
            }
        },
        changeFilterText: (state, action) => {
            const filterText = action.payload.toLocaleLowerCase();
            state.filterText = filterText;
        }
    }
})

export const { addNote, changeFilterText } = notesSlice.actions;
export default notesSlice.reducer;