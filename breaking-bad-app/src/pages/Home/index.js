import { useEffect } from 'react'

import Error from '../../components/Error'
import Loading from '../../components/Loading'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/characters/charactersSlice'

function Home() {
    const characters = useSelector(state => state.characters.items);
    const isLoading = useSelector(state => state.characters.isLoading);
    const error = useSelector(state => state.characters.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

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
        </div>
    )
}

export default Home
