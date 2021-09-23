import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'

const char_limit = 10;

export const fetchCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (page) => {
        const res = await axios(`
        ${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&&offset=${char_limit * page}`);

        return res.data;
    }
);

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            console.log("action.load =>", action.load);
            state.items = [...state.items, ...action.payload];
            state.isLoading = false;
            state.page += 1;
            if (action.payload.length < 10) {
                state.hasNextPage = false;
            }
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        }
    }
});

export default charactersSlice.reducer;