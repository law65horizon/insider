import React from 'react'
import { VStack, Image, Text, Box, Flex, Button, Skeleton } from '@chakra-ui/react'
import {useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'


const FeedPosts01 = ({post, isLoading}) => {
  const navigate = useNavigate()
    return(<>
      {isLoading && 
          <VStack key={post.id} w={'full'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
            <Skeleton height={"10px"} w={"200px"}/>
            <Skeleton height={"40px"} w={"full"}/>
          </VStack>
      }
    
      {!isLoading && (
       <VStack key={post.id} w={'full'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2} >
        <Box position={'relative'}>
         <Image src={post.image.url} alt={post.image.alt} objectFit={'cover'} w={'full'} onClick={() => navigate(`posts:${post.id}`)}/>
         <Button background={'#242a56'} position={'absolute'} bottom={'0px'} p={1} borderRadius={'unset'} color={'white'} w={'160px'} as={RouterLink} to={'/news'} textTransform={'uppercase'}>{post.category}</Button>
        </Box>
        <Box w={'full'} onClick={() => navigate(`posts:${uid}`)}>
         <Text color={'black'}> {post.headerText} </Text>
         <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> {post.createdAt},  06 </Text>
        </Box>
       </VStack>
      )}
    </>)
  }

export default FeedPosts01