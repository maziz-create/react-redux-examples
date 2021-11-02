import { configureStore } from '@reduxjs/toolkit'

import charactersSlice from './characters/charactersSlice'
import quotesSlice from './quotes/quotesSlice';

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        quotes: quotesSlice,
    },
}); 