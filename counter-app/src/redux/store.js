// birbirinden farklı redux tanımlarını birleştirdiğimiz, configure ettiğimiz alandır store.
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';

//store dışa aktarıldı.
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});