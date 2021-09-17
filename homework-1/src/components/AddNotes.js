import React from 'react'

import { Textarea, Button } from '@chakra-ui/react'

function AddNotes() {
    return (
        <div>
            <Textarea
                placeholder="Enter your note here..."
                backgroundColor="#fff"
                size="md"
                resize="none"
                height="150"

                marginBottom="3"
                focusBorderColor="red.200"
            />

            <Button
                position="absolute"
                bottom="25"
                right="33%"

                paddingLeft="35"
                paddingRight="35"
                height="30"

                colorScheme="pink"
                borderRadius="3xl"

            >
                Add
            </Button>
        </div>
    )
}

export default AddNotes
