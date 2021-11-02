import { useState, useEffect } from 'react'

import { Input, Text } from '@chakra-ui/react'

import { changeFilterText } from '../../redux/notes/notesSlice'

import { useDispatch } from 'react-redux'

function SearchInput() {
    const [filterTextFromInput, FilterTextFromInput] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeFilterText(filterTextFromInput))
    }, [filterTextFromInput])

    return (
        <div>
            <Text
                fontSize="22px"
                textAlign="center"
                fontWeight="bold"
                color="#808080"
                marginTop="3"
                marginBottom="3"
            >
                NotesApp</Text>

            <Input
                backgroundColor="#fff"
                placeholder="Search..."
                marginLeft="100"
                marginBottom="3"
                borderRadius="3xl"
                width="60%"

                value={filterTextFromInput}
                onChange={(e) => FilterTextFromInput(e.target.value)}

                focusBorderColor="red.200"
            />
        </div>
    )
}

export default SearchInput
