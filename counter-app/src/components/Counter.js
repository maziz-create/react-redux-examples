import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'; //state içerisindeki veriye erişmek için.
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice'

function Counter() {
    const countValue = useSelector((state) => state.counter.value);//state verisini aldık.

    const dispatch = useDispatch(); //state'i değiştirecek fonksiyona ulaşmak için

    const [amount, setAmount] = useState(3);

    console.log(countValue);

    return (
        <div>
            <h1>{countValue}</h1>

            <br /><br /><br /><br />

            <button onClick={() => dispatch(decrement())} >Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <br /><br />

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
        </div>
    )
}

export default Counter
