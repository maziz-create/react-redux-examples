import React from 'react'

import './style.css'

function item({ item }) {
    return (
        <div className="quote_item">
            <q>
                {item.quote}
            </q>
            <strong>
                {item.author}
            </strong>
        </div>
    )
}

export default item
