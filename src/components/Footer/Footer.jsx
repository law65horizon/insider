import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg={'black'} p={5}>
      <Flex justifyContent={'center'}>
        <Divider height={'4px'} bg={'white'} w={'80%'}/>
      </Flex>
    </Box>
  )
}

export default Footer