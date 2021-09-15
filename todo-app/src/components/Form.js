import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTodo } from '../redux/todos/todosSlice'

function Form() {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch(); //action göndereceğiz.

    const handleSubmit = (e) => {
        if (!title) return; //herhangi bir şey girilmemişse bitir fonksiyonu.

        e.preventDefault(); //sayfa yenilenmemesi için

        setTitle('');

        dispatch(
            addTodo(
                {
                    id: nanoid(), //random id üretiyor.
                    title, //title: title kendisi yapıyor. (ikinci title => state'imiz)
                    completed: false,
                }
            )
        );

        console.log('test');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus />
        </form>
    )
}

export default Form
