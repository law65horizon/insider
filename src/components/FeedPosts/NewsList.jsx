import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const NewsList = () => {
  return (
    <Flex gap={4} px={3} py={2} w={'full'}>
        <Box position={'relative'} w={'50%'} _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left:0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: 0.7
        }}
        >
        
          <Image src='./img1.png' w={'full'} objectFit={'cover'} h={'full'}/>
          <Button background={'#242a56'} position={'absolute'} bottom={'0px'} borderRadius={'unset'} color={'white'} w={'80%'} textTransform={'uppercase'}>Lifestyle</Button>
        </Box>
        <Box w={'50%'}>
          <Text color={'black'} fontWeight={'bold'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laudantium!</Text>
          <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> April 6, 2044,  06 comments </Text>
          <Text fontWeight={'600'} fontSize={'small'} opacity={0.5} pt={4}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit qui optio laborum perspiciatis eveniet eos illum incidunt neque aliquid? </Text>
        </Box>
    </Flex>
  )
}

export default NewsList