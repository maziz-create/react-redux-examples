import React from 'react'

import { useSelector, useDispatch } from 'react-redux'; //state içerisindeki veriye erişmek için.
import { increment, decrement } from '../redux/counter/counterSlice'

function Counter() {
    const countValue = useSelector((state) => state.counter.value);//state verisini aldık.

    const dispatch = useDispatch(); //state'i değiştirecek fonksiyona ulaşmak için

    console.log(countValue);

    return (
        <div>
            <h1>{countValue}</h1>

            <br /><br /><br /><br />

            <button onClick={() => dispatch(decrement())} >Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Counter
