import { useState, useEffect } from 'react'

import './style.css'

import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../../redux/notes/notesSlice';

import { Button, Flex, Box } from '@chakra-ui/react'

function Palette({ noteTitle }) {
    // console.log("palette => ", noteTitle);
    const dispatch = useDispatch();
    const numberOfNotes = useSelector((state) => state.notes.numberOfNotes);

    // console.log("number of notes =>", numberOfNotes);

    const [noteColor, setNoteColor] = useState('');

    // useEffect(() => { //test
    //     console.log("şu anki noteColor => ", noteColor);
    // }, [noteColor])

    return (
        <Flex justify="space-between" style={{ marginTop: "5px" }} >
            <Flex >
                <label className="checkboxContainer">
                    <input
                        type="radio"
                        name="selectColor"
                        onChange={() => setNoteColor('pink')}
                        className="checkbox checkbox-pink"
                    />
                    <span className="checkmark checkmark-pink"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="radio"
                        name="selectColor"
                        onChange={() => setNoteColor('purple')}
                        className="checkbox checkbox-purple"
                    />
                    <span className="checkmark checkmark-purple"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="radio"
                        name="selectColor"
                        onChange={() => setNoteColor('yellow')}
                        className="checkbox checkbox-yellow"
                    />
                    <span className="checkmark checkmark-yellow"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="radio"
                        name="selectColor"
                        onChange={() => setNoteColor('blue')}
                        className="checkbox checkbox-blue"
                    />
                    <span className="checkmark checkmark-blue"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="radio"
                        name="selectColor"
                        onChange={() => setNoteColor('green')}
                        className="checkbox checkbox-green"
                    />
                    <span className="checkmark checkmark-green"></span>
                </label>
            </Flex>

            <Box>
                <Button
                    paddingLeft="35"
                    paddingRight="35"
                    height="27"
                    marginLeft="50"

                    onClick={() => dispatch(
                        addNote(
                            {
                                id: Number(numberOfNotes) + 1,
                                title: noteTitle,
                                color: noteColor,
                             }
                        )
                    )}

                    colorScheme="red"
                    borderRadius="3xl"
                >
                    Add
                </Button>
            </Box>
        </ Flex>
    )
}

export default Palette
