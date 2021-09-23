import { useEffect } from 'react'

import Error from '../../components/Error'
import Loading from '../../components/Loading'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/characters/charactersSlice'

function Home() {
    const characters = useSelector(state => state.characters.items);
    const isLoading = useSelector(state => state.characters.isLoading);
    const error = useSelector(state => state.characters.error);
    const hasNextPage = useSelector(state => state.characters.hasNextPage);
    const dispatch = useDispatch();
    let page = useSelector(state => state.characters.page);

    const addPage = () => {
        console.log("Page ' nin eski hali => ", page);
        page += 1;
        console.log("Page ' nin yeni hali => ", page);
    }

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    if (error) {
        return <Error error={error} />
    }

    console.log(characters);
    return (
        <div>
            <h1>Characters</h1>
            {
                characters.map((character) => (
                    <div key={character.char_id} style={{
                        display: 'inline-block',
                        margin: 5,
                        border: '15px solid #d9d9d9'
                    }}>
                        <img
                            src={character.img}
                            alt={character.name}
                            width="200px"
                            height="280px"
                            style={{ objectFit: 'cover' }}
                        />
                        <h3 style={{
                            textAlign: 'center',
                            margin: '0',
                            background: '#545863',
                            color: '#fff'
                        }}>
                            {character.name}
                        </h3>
                    </div>
                )
                )
            }
            <div style={{ textAlign: 'center' }}>
                {
                    isLoading && <Loading />
                }
                {
                    hasNextPage && !isLoading && (
                        <button
                            style={{ padding: 10, marginTop: 1 }}
                            onClick={() => dispatch(fetchCharacters(page))}
                        >
                            Load More
                        </button>
                    )
                }
                {
                    !hasNextPage && <div>There is nothing to be shown</div>
                }

            </div>
        </div>
    )
}

export default Home
