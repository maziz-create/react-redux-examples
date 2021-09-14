import { createSlice } from '@reduxjs/toolkit'

//state tanımlamak gibi bir şey sanırım bu.
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {//state'i değiştirecek fonkiler
        //burada actionlarımız yer alır. state'i değiştirecek şeyler..
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload);
        }
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions; //state'i değiştirecek fonkileri dışarı aktarıyoruz.
export default counterSlice.reducer; //değiştirici fonkileri dışarı aktardık sanırım.