import { Flex, VStack, Box,Text, Divider, Container, Skeleton, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import NewsList from './NewsList'

const LatestNews = () => {
  return (
      <Box py={4} w={'full'}>
        <Divider my={2} py={'2px'} backgroundColor={'black'}/>
        <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'} py={5}>Latest News</Text>
        <Text paddingBottom={3} fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur.</Text>
        <Flex py={3} gap={3} w={'full'} wrap={'wrap'} justifyContent={{base: 'center', sm: 'normal'}}>      
            <VStack backgroundColor={'black'} w={{base: 'full', sm: 'full', md: '48%', lg: '32.5%'}}>
                <Box backgroundColor={'yellow'} h={'5px'} w={'full'}></Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
            <VStack backgroundColor={'black'} w={{base: 'full', sm: 'full', md: '48%', lg: '32.5%'}}>
            <Box backgroundColor={'green'} h={'5px'} w={'full'}></Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
        </Flex>
      </Box>
  )
}

const LatestNews01 = ({img, text, createdAt, cat}) => {
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
    return (
      <>
        {isLoading && [1].map(() => (
          <VStack gap={3} alignItems={"flex-start"} w={{sm: 'full', md: '29%'}} mb={10}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
            <Skeleton height={"10px"} w={"200px"}/>
            <Skeleton height={"40px"} w={"full"}/>
          </VStack>
        ))}
  
        {!isLoading && 
          <>
           <Flex w={{sm: 'full', md: '29%'}} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
              <Image src={img} w={{base: "40%", md:'full'}} objectFit={'contain'} alignSelf={'flex-start'}/>
            <Box>
              <Text color={'red'} m={0} textAlign={"start"} w={'full'} fontWeight={'bold'} py={2}> {cat} </Text>
              <Text fontWeight={'800'}> {text} </Text>
            </Box>
          </Flex>
          </>
        }
      </>
    )
  }

export default LatestNews01; LatestNews