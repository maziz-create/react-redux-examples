import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

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