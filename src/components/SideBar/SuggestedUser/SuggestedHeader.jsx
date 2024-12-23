import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='michael' size={'lg'} src='/profilepic.png' w={'40px'} h={'40px'}/>
            <Text fontSize={12} fontWeight={'bold'}>
                Michael
            </Text>
        </Flex>
        <Link
          as={RouterLink}
          to={'/auth'}
          fontSize={14}
          fontWeight={'medium'}
          color={'blue.400'}
          cursor={'pointer'}
          style={{textDecoration: "none"}}
        >
            Log Out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader