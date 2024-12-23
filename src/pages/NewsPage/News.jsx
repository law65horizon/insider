import { Flex, Box, Image, Text, VStack, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const News = ({post, isLoading}) => {
  console.log(post)
  return (
    <>

{!isLoading && 
  <>
   <Flex w={{sm: 'full', md: '31%',lg: '24%'}} key={post?.id} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
      <Image src={post?.image?.url} fallbackSrc='/../../../fallback-image.jpg' alt={post?.image?.alt} w={{base: "40%", md:'full'}} objectFit={'contain'} alignSelf={'flex-start'}/>
    <Box >
      <Text color={'#242a56'} m={0} textAlign={"start"} w={'full'}>{post?.category} </Text>
      <Text fontWeight={'bold'}> {post?.headerText} </Text>
    </Box>
  </Flex>
  </>
}
      </>
        
  )
}

export default News

//   <VStack key={idx} gap={4} alignItems={"flex-start"} w={{sm: 'full', md: '31%',lg: '24%'}} mb={10}>
//     <Skeleton w={"full"}>
//       <Box h={"300px"}>contents wrapped</Box>
//     </Skeleton>
//     <Skeleton height={"10px"} w={"200px"}/>
//     <Skeleton height={"40px"} w={"full"}/>
//   </VStack>
// ))}

// {!isLoading && 
//   <>
//    <Flex w={{sm: 'full', md: '31%',lg: '24%'}} key={post?.id} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
//       <Image src={post?.image?.url} fallbackSrc='/../../../fallback-image.jpg' alt={post?.image?.alt} w={{base: "40%", md:'full'}} objectFit={'contain'} alignSelf={'flex-start'}/>
//     <Box>
//       <Text color={'red'} m={0} textAlign={"start"} w={'full'}> {post?.category} </Text>
//       <Text fontWeight={'bold'}> {post?.headerText} 0 </Text>
//     </Box>
//   </Flex>
//   </>
// }

// {isLoading && [1].map((_,idx) => (
//   <VStack key={idx} gap={4} alignItems={"flex-start"} w={{sm: 'full', md: '31%',lg: '23%'}} mb={10}>
//     <Skeleton w={"full"}>
//       <Box h={"300px"}>contents wrapped</Box>
//     </Skeleton>
//     <Skeleton height={"10px"} w={"200px"}/>
//     <Skeleton height={"40px"} w={"full"}/>
//   </VStack>
// ))}
// {!isLoading && 
// <>
//  <Flex w={{sm: 'full', md: '31%',lg: '23.5%'}} key={id} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
//     <Link to='../cat/odj'><Image src={img} w={'full'} objectFit={'cover'} alignSelf={'flex-start'}/></Link>
//   <Box>
//     <Text color={'red'} m={0} textAlign={"start"} w={'full'}> {cat} </Text>
//     <Text fontWeight={'bold'}> {text} </Text>
//   </Box>
// </Flex>
//   </>
// } 