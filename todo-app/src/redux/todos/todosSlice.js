import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

//MiddlewareThunk ile api call yapıyoruz. Todoları artık apimizden alacağız. Bunu tanımladıktan sonra state'e extraReducers tanımladık.
export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync', //action name
    async () => {
        const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);

        return res.data; //burası getTodoAsync.fulfilled kısmının action.payload ' ına düşüyor.
    }
)

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync', //action name
    async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);

        return res.data; //burası getTodoAsync.fulfilled kısmının action.payload ' ına düşüyor.
    }
)

export const toggleTodoAsync = createAsyncThunk(
    'todos/toggleTodoAsync', //toggle: açmak kapamak, açık olanı kapalı, kapalı olanı açık yapmak.
    async ({ id, data }) => { //data: completed durumu
        const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, data);

        return res.data;
    }
)

export const removeTodoAsync = createAsyncThunk(
    'todos/removeTodoAsync',
    async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`);

        return id;
    }
)

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: true,
        error: null,
        activeFilter: 'all',
        addNewTodo: {
            isLoading: false,
            error: null,
        }
    },
    reducers: {
        //ARTIK BACKENDTE DE EKLEYECEĞİZ, SADECE CLIENT'A DEĞİL. 
        // addTodo: {
        //     reducer: (state, action) => {
        //         //datayı klonlamadan iş yapma! burada react-toolkit arka planda klonlayıp da ekliyor.
        //         state.items.push(action.payload); //gönderilen actionun içeriğini pushla.
        //     },
        //     /*
        //         Gelen action(ve altındaki payload) prepare alanına düşer. Gerekli işler yapılır.
        //         Sonra tam üstteki reducer alanının action kısmına düşer ve klasik işlemlere devam edilir.
        //         (Alttan üste giden actionun da altında payload var. Bu şu demek,
        //             componentten buraya gelen de actiondu, altındaki payload burada derlendi.
        //             Yeni bir action üretilip yukarı gönderildi. Sonra da haliyle altındaki payload
        //             gerekli işlemlerde kullanılacak...)
        //     */
        //     prepare: ({ title }) => {
        //         return {
        //             payload: {
        //                 id: nanoid(), //random id üretiyor.
        //                 completed: false,
        //                 title,
        //             }
        //         }
        //     }
        // },

        // ARTIK TOGGLE İŞLEMİNİ BACKENDTE DE YAPACAĞIZ. O YÜZDEN EXTRAREDUCERS KISMINA THUNK MIDDLEWARE İLE EKLİYORUZ. 
        //toggle : aktifse deaktif et, deaktifse aktif et demekmiş.
        // toggle: (state, action) => {
        //     const { id } = action.payload; //bize action ile id gönderilecek. Obje olarak yollandığı için obje olarak alıyoruz.

        //     const item = state.items.find((item) => item.id === id);

        //     item.completed = !item.completed;
        // },

        //ARTIK BACKENDTE DE SİLECEĞİZ.
        // destroy: (state, action) => {
        //     const id = action.payload; //bize action ile id gönderilecek.

        //     const filtered = state.items.filter((item) => item.id !== id); //o id harici elemanları yeni bir diziye at.

        //     state.items = filtered;
        // },

        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state, action) => {
            const filtered = state.items.filter((item) => !item.completed);

            state.items = filtered;
        }
    },
    extraReducers: {
        /*
        extraReducers alanında => getTodosAsync action' pending, fulfilled ve rejected anlarında
        state'i nasıl güncellenmesi gerektiğini belirtebiliyoruz.
        */

        /* action nereden geliyor ?
        buraya componentten gelen önce yukarıdaki örn: getTodoAsync fonkiye uğruyor. o fonki
        buraya actionu gönderiyor. onun return değeri action.payload oluyor yani.S
        */
        //get todos
        [getTodosAsync.pending]: (state, action) => {    //YÜKLEME DEVAM EDİYOR
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => {  //YÜKLEME TAMAMİYLE BİTTİ
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodosAsync.rejected]: (state, action) => {   //YÜKLEME HATA ÇIKARDI.
            state.error = action.error.message;
            state.isLoading = false;
        },

        //add todos
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodo.isLoading = true;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodo.isLoading = false;
        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodo.error = action.error.message;
            state.addNewTodo.isLoading = false;
        },

        //toggle todos
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);

            state.items[index].completed = completed;
            // console.log(action.payload);
        },

        //remove todos
        [removeTodoAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        },
    }
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

export const { /*addTodo, toggle, destroy,*/ changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer; //dışarıdan isterlerse xxxx olarak alsınlar, ben bunu gönderiyorum.