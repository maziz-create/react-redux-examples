import React from 'react'

// import styles from './styles.module.css'
import './style.css'

import { Button, Flex, Box } from '@chakra-ui/react'

function Palette() {
    return (
        <Flex justify="space-between" style={{ marginTop: "5px" }} >
            <Flex >
                <label className="checkboxContainer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-pink"
                    />
                    <span className="checkmark checkmark-pink"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-purple"
                    />
                    <span className="checkmark checkmark-purple"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-yellow"
                    />
                    <span className="checkmark checkmark-yellow"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-blue"
                    />
                    <span className="checkmark checkmark-blue"></span>
                </label>

                <label className="checkboxContainer">
                    <input
                        type="checkbox"
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
