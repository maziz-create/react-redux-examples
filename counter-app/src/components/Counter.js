import React from 'react'

import { useSelector } from 'react-redux'; //state içerisindeki veriye erişmek için.

function Counter() {
    const countValue = useSelector((state) => state.counter.value);//state verisini aldık.

    console.log(countValue);

    return (
        <div>
            <h1>{countValue}</h1>
        </div>
    )
}

export default Counter
