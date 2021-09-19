import React from 'react'

import { Box, Grid, Text } from '@chakra-ui/react'

function ListNotes() {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="2">
            <Box bg="pink" w="100%" h="100px" overflow="auto" textAlign="center" fontSize="13px">
                <Text fontSize="18px" bg="red.300">Note 1</Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quidem quia obcaecati veritatis, vel maiores.
            </Box>
        </Grid>
    )
}

export default ListNotes
