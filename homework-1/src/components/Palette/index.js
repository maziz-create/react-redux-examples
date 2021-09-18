import React from 'react'

// import styles from './styles.module.css'
import './style.css'

import { Button, Flex } from '@chakra-ui/react'

function Palette() {
    return (
        <Flex>
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




            <Button
                paddingLeft="35"
                paddingRight="35"
                height="30"
                marginLeft="50"

                colorScheme="pink"
                borderRadius="3xl"
            >
                Add
            </Button>
        </Flex>
    )
}

export default Palette
