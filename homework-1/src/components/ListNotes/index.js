import { useEffect } from 'react'

import { Box, Grid, Text } from '@chakra-ui/react'

import { useSelector } from 'react-redux';

function ListNotes() {
    const notes = useSelector((state) => state.notes.items);

    useEffect(() => {
        localStorage.setItem('numberOfNotes', notes.length);
        // console.log('List Notes>notes didMount oldu ve numberOfNotes set edildi! =>',
        //     localStorage.getItem('numberOfNotes')
        // )
    }, [notes])

    const handleNoteColor = (note_color) => {
        switch (note_color) {
            case 'pink':
                return '#F06292';
            case 'purple':
                return '#BA68C8';
            case 'yellow':
                return '#FFD54F';
            case 'blue':
                return '#4FC3F7';
            case 'green':
                return '#A7CD7C';
            default:
                break;
        }
    }

    console.log(notes);

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="2">
            {
                notes.map((note) => (
                    <Box
                        key={note.id}
                        bg="gray.100"
                        w="100%"
                        h="100px"
                        overflow="auto"
                        textAlign="center"
                    >
                        <Text fontSize="18px" bg={handleNoteColor(note.color)}>Note {note.id}</Text>
                        <Text fontSize="13px">{note.title}</Text>
                    </Box>
                ))
            }
        </Grid>
    )
}

export default ListNotes
