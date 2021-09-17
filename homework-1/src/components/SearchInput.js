import React from 'react'

import { Input, Text } from '@chakra-ui/react'

function SearchInput() {
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
                width= "60%"
                
                focusBorderColor="red.200"
            />
        </div>
    )
}

export default SearchInput
