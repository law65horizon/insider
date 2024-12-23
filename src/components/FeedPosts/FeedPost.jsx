import { VStack, Image, Text, Box, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink, Route, Routes, useNavigate } from 'react-router-dom'
import SinglePost from '../../pages/Posts/SinglePost'
import useFormateDate from '../../hooks/useFormateDate'

const FeedPost = ({post, width,height,gap, dir, boxShadow, borderRadius}) => {
  const {formateDate} = useFormateDate()
  return (<>
    {/* <VStack key={post} w={{base: 'full', sm: '48%', md: '23%'}} cursor={'pointer'} > */}
    <Flex key={post?.id} w={width || 'unset'} gap={gap || 0} cursor={'pointer'} boxShadow={boxShadow || 'unset'} direction={dir || 'row'} 
      borderRadius={borderRadius || 'unset'} px={{sm: 4, md: 'unset'}} position={'relative'}
    >
      <Box fontWeight={'bold'} position={'relative'} fontSize={'larger'} py={0} m={0} w={'full'} cursor={'pointer'}>
        <Box w={'full'} as={RouterLink} to={`/posts:${post?.headerText}`}>
          <Image src={post?.image?.url} alt={post?.image?.alt} loading='lazy' w={'full'} decoding='async' cursor={'pointer'} display={'block'}
            borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'} maxW={'100%'} h={'280px'} maxH={{base: 'unset', md: height || 'unset'}} objectFit={'cover'} 
          />
        </Box>
        <Box as={RouterLink} to={`/cat/${post?.category}`} position={'absolute'} left={'0'} zIndex={30} bottom={'0'}>
          <Button background={'#242a56'} p={1} borderRadius={'unset'} color={'white'} w={'160px'} textTransform={'uppercase'}>{post?.category || 'diosiso'}</Button>
        </Box>
      </Box>
      <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> {formateDate(post?.createdAt)} </Text>
      <Text py={0}> {post?.headerText}</Text>
    </Flex>

    {/* <Flex gap={4} w={'full'} key={key} py={2} px={1}>
        <Image src="/resize.webp" w={'50%'} h={"50%"} objectFit={'cover'}/>
        <Box h={'full'} w={'48%'} flex={1}>
          <Text textAlign={'start'} color={'red'} textTransform={'uppercase'} pb={2}> {cat} </Text>
          <Text fontWeight={'bold'} pb={2}> Hidden meaning behind black triangles you see in some planes</Text>
          <Text justifyContent={'end'}> 7 hours ago</Text>
        </Box>
    </Flex> */}
    {/* <Routes>
      <Route path={cat} element={<SinglePost/>}/>
    </Routes> */}
  </>
  )
}


export default FeedPost