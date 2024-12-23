import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const TvFeeds = ({img, text}) => {
  return (
    <VStack w={{base: 'full', sm: '48%', md: '46%'}}>
        <Image src={img} objectFit={'cover'} w={'full'} p={2}/>
        <Text color={'black'} fontWeight={'bold'} fontSize={'large'} textAlign={'center'} p={2}>{text}</Text>
    </VStack>
  )
}

export default TvFeeds