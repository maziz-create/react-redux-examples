import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import Loading from '../../components/Loading'

import axios from 'axios'

function Detail() {
    const { char_id } = useParams();

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
            .then(res => res.data)
            .then(data => setChar(data[0]))
            .finally(() => setLoading(false));
    }, [char_id])

    return (
        <div style={{ textAlign: 'center' }}>
            {
                loading && <Loading />
            }
            {
                char && (
                    <div>
                        <h2>{char.name}</h2>
                        <img src={char.img} alt={char.name} style={{ width: '50%' }} />
                    </div>
                )
            }
            {
                char && <pre>{JSON.stringify(char, null, 2)}</pre>
            }
        </div>
    )
}

export default Detail
