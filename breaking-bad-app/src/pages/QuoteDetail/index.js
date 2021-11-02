import React from 'react'

import { useParams, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux'
import {
    statusSelector,
    errorSelector
} from '../../redux/quotes/quotesSlice'

import Error from '../../components/Error';
import Loading from '../../components/Loading';

function QuoteDetail() {
    // { quote_id } => bu şekilde yazdığın zaman bize gönderilen quote_id isimli parametreyi almak istiyorum diyorsun.
    const { quote_id } = useParams();

    const quote = useSelector(state =>
        state.quotes.items.find((item) => item.quote_id === Number(quote_id))
    );
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    console.log("quote =>", quote);

    if (quote === undefined) {
        return <Redirect to="/quotes" />
    }

    if (error) return <Error error={error} />

    return (
        <div>
            {
                status === 'loading' && <Loading />
            }
            {
                status === 'succeeded' &&
                <div>
                    <h1>Quote Detail</h1>
                    <pre>
                        {JSON.stringify(quote, null, 2)}
                    </pre>
                </div>
            }
        </div>
    )
}

export default QuoteDetail
