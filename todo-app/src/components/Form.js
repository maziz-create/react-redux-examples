import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addTodoAsync } from '../redux/todos/services'
import Error from './Error';
import Loading from './Loading';

function Form() {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch(); //action göndereceğiz.

    const addNewTodoLoading = useSelector(state => state.todos.addNewTodoLoading);
    const addNewTodoError = useSelector(state => state.todos.addNewTodoError);

    if (addNewTodoLoading) {
        return <Loading />
    }

    if (addNewTodoError) {
        return <Error message={addNewTodoError} />
    }

    const handleSubmit = async (e) => {
        if (!title) return; //herhangi bir şey girilmemişse bitir fonksiyonu.

        e.preventDefault(); //sayfa yenilenmemesi için

        setTitle('');

        await dispatch(addTodoAsync({ title })
            //title: title kendisi yapıyor. (ikinci title => state'imiz)
            //sonradan => todosSlice'daki prepare'e uygun olarak refactor edildi.
            //en son => artık backend'e de eklediğimiz için addTodo gitti, await geldi çünkğ asenkron bir işlem.

        );
        // console.log('test');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={addNewTodoLoading}
                autoFocus />
        </form>
    )
}

export default Form
