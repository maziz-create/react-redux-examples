import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Error from '../../components/Error'
import Loading from '../../components/Loading'

import Item from './item'

import {
    fetchAllQuotes,
    quotesSelector,
    statusSelector,
    errorSelector
} from '../../redux/quotes/quotesSlice'

function Quotes() {
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes());
        }
    }, [dispatch]);

    if (error) return <Error error={error} />

    return (
        <div style={{ padding: '15px' }}>
            <h1>Quotes</h1>

            {status === 'loading' && <Loading />}

            {status === 'succeeded' && data.map((item, key) => <Item key={key} item={item} />)}

            {status === 'succeeded' && <div className="quotes_info">{data.length} quotes</div>}
        </div>
    )
}

export default Quotes
