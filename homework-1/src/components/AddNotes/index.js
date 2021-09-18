import React from 'react'
import styles from '../styles.module.css'

import Palette from '../Palette'

import { Textarea, Box } from '@chakra-ui/react'

function AddNotes() {
    return (
        <Box>
            <Textarea
                className={styles.textarea}
                placeholder="Enter your note here..."
                backgroundColor="#fff"
                size="md"
                resize="none"
                height="150"

                // marginBottom="3"
                focusBorderColor="red.200"
            />

            <Palette />
        </Box>
    )
}

export default AddNotes
