import { createSlice } from '@reduxjs/toolkit'

//state tanımlamak gibi bir şey sanırım bu.
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {}, //state'i değiştirecek fonkiler
})

export default counterSlice.reducer; //değiştirici fonkileri dışarı aktardık sanırım.