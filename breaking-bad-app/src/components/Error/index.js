import React from 'react'

function Error({ error }) {
    return (
        <div style={{
            padding: 5,
            color: '#fff',
            background: '#000'
        }}>
            Error: {error.message}
        </div>
    )
}

export default Error
