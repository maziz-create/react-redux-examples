import { useState } from 'react'
import styles from '../styles.module.css'

import Palette from '../Palette'

import { Textarea, Box } from '@chakra-ui/react'


function AddNotes() {
    const [noteTitle, setNoteTitle] = useState('');

    return (
        <Box>
            <Textarea
                className={styles.textarea}
                placeholder="Enter your note here..."
                backgroundColor="#fff"
                size="md"
                resize="none"
                height="150"

                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}

                focusBorderColor="red.200"
            />

            <Palette noteTitle={noteTitle} />
        </Box>
    )
}

export default AddNotes
