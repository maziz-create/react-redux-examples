// birbirinden farklı redux tanımlarını birleştirdiğimiz, configure ettiğimiz alandır store.
import { configureStore } from '@reduxjs/toolkit';

//store dışa aktarıldı.
export const store = configureStore({
    reducer: {},
});