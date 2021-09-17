import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
//bir event gönderecek olursak slice'ı da import etmeliyiz.
import {
    selectFilteredTodos,
    getTodosAsync,
    toggleTodoAsync,
    removeTodoAsync,
} from '../redux/todos/todosSlice'

import Loading from './Loading'
import Error from './Error'

function TodoList() {
    const filteredTodos = useSelector(selectFilteredTodos);
    const isLoading = useSelector(state => state.todos.isLoading);
    const error = useSelector(state => state.todos.error);
    const dispatch = useDispatch(); //store'a bir şey göndermek istediğimizde kullanmak zorundayız.

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    const handleDestroy = async (item_id) => {
        if (window.confirm('Are you sure?')) {
            await dispatch(removeTodoAsync(item_id));
        }
    }

    const handleToggle = async (item_id, completed) => {
        await dispatch(toggleTodoAsync({ id: item_id, data: { completed } }))
    }

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    console.log(filteredTodos);

    return (
        <ul className="todo-list">
            {
                filteredTodos.map((item) => (
                    <li key={item.id} className={item.completed ? 'completed' : ''}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleToggle(item.id, !item.completed)}
                            />
                            <label>{item.title}</label>
                            <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default TodoList
