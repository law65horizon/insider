import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Posts = () => {
  return (
    <Flex gap={4} px={3} py={2} w={'full'}>
        <Image src='./img1.png' w={{sm: "50%", md: '50%'}}/>
        <Text color={'white'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laudantium!</Text>
    </Flex>
  ) 
}

export default Posts