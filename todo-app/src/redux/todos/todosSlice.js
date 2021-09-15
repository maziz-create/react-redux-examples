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
        activeFilter: 'all',
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
        },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state, action) => {
            const filtered = state.items.filter((item) => !item.completed);

            state.items = filtered;
        }
    },
});

//alttakilere selector deniliyor.
export const selectTodos = state => state.todos.items; //bütün todoları gösterecek şeyi tek yerden gönderiyoruz.
export const selectFilteredTodos = (state) => { //todoları basılan butona göre listeleme işlemini tek yerden gönderiyoruz.
    if (state.todos.activeFilter === 'all') {
        return state.todos.items;
    }

    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === 'active'
            ? todo.completed === false //tamamlanmayanları istiyoruz.
            : todo.completed === true //tamamlananları istiyoruz.
    )
}

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer; //dışarıdan isterlerse xxxx olarak alsınlar, ben bunu gönderiyorum.