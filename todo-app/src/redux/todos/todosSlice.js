import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: '1',
                title: 'Learn React',
                completed: true,
            },
            {
                id: '2',
                title: 'Read a book',
                completed: false,
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            //datayı klonlamadan iş yapma! burada react-toolkit arka planda klonlayıp da ekliyor.
            state.items.push(action.payload); //gönderilen actionun içeriğini pushla.
        },
        //toggle : aktifse deaktif et, deaktifse aktif et demekmiş.
        toggle: (state, action) => {
            const { id } = action.payload; //bize action ile id gönderilecek. Obje olarak yollandığı için obje olarak alıyoruz.

            const item = state.items.find((item) => item.id === id);

            item.completed = !item.completed;
        },
        destroy: (state, action) => {
            const id = action.payload; //bize action ile id gönderilecek.
            
            const filtered = state.items.filter((item) => item.id !== id); //o id harici elemanları yeni bir diziye at.

            state.items = filtered; 
        }
    },
});

export const { addTodo, toggle, destroy } = todosSlice.actions;
export default todosSlice.reducer; //dışarıdan isterlerse xxxx olarak alsınlar, ben bunu gönderiyorum.