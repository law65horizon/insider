import { AspectRatio, Box, Button, Card, CardBody, CardFooter, Container,Flex, Heading, Image, ListItem, OrderedList, Skeleton, Stack, Text, VStack,} from '@chakra-ui/react'
import { data } from '../../data'
import React, { Component, useState } from 'react'
import LatestNews01 from '../../components/FeedPosts/LatestNews'
import FeedPosts01 from '../../components/FeedPosts/FeedPost01'
import NewsList from '../../components/FeedPosts/NewsList'
import { Link , useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import useGetBRNPosts from '../../hooks/useGetBRNPosts'
import useGetPosts from '../../hooks/useGetPosts'
import FeedPost from './FeedPost'
import useFormateDate from '../../hooks/useFormateDate'



const FeedPosts = () => {
  const {posts, isLoading} = useGetPosts(10)
  const {bRNews, error, isLoadingDoc} = useGetBRNPosts()
  const {formateDate} = useFormateDate()
  const le = bRNews <= 0
  console.log(bRNews)


  
  return (<>
      <Container maxW={'8xl'} color={'white'}>
        <Box w={'full'} py={4}>
        <Flex gap={5} w={'full'} flexDir={{base: 'column' , lg:'row'}}>
            {isLoadingDoc || error ? (
             <VStack gap={3} alignItems={"flex-start"} w={{md: 'full', xl: '69%'}} mb={10}>
              <Skeleton w={"full"}>
                <Box h={"500px"}>contents wrapped</Box>
              </Skeleton>
              <Skeleton height={"10px"} w={"200px"}/>
              <Skeleton height={"40px"} w={"full"}/>
             </VStack>
            )
            : (
              <Box w={{md: 'full', xl: '69%'}}  cursor={'pointer'} as={RouterLink}>
               <Box position={'relative'}> 
                <Link to={`/posts:${bRNews[0]?.headerText}`}>
                  <Image src={bRNews[0]?.image?.url} fallbackSrc='../../../fallback-image.jpg' alt={bRNews[0]?.image?.alt} 
                   objectFit={'cover'} w={'full'} pb={2} loading='lazy' decoding='async'
                  />
                </Link>
                <Link to={`/cat/${bRNews[0]?.category}`}>
                  <Button background={'#242a56'} position={'absolute'} bottom={'8px'} p={2} borderRadius={'unset'} color={'white'} w={'160px'} textTransform={'uppercase'}>{bRNews[0]?.category}</Button>
                </Link>
               </Box>
                <Text py={2} fontWeight={'bold'} fontSize={'large'} color={'#242a56'}>Breaking News</Text>
                {/* <Link to={`/posts:${bRNews[0]?.headerText}`}> */}
                  <Text fontWeight={'bold'} fontSize={'large'}> {bRNews[0]?.headerText} </Text>
                <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> {formateDate(bRNews[0]?.createdAt)}, {data[0].commentsNum} comments </Text>
            </Box>
            )}
            <Flex w={{sm: 'full', xl: '30%'}} flexWrap={'wrap'} flexDir={{md: 'row' ,lg: 'column'}} gap={{md: '3' ,lg: '0'}}>
              {isLoadingDoc || le? [0,1].map((_, index) => (
                <VStack key={index} alignItems={'flex-start'} w={'full'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"220px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"200px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
              )): null}
    
              {!isLoadingDoc && bRNews.slice(1,3).map((post) => (
               <VStack key={post?.id} w={{sm: 'full', md: '48%', lg: 'full'}} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2} >
                <Box position={'relative'}>
                 <Link to={`/posts:${post?.headerText}`}>
                    <Image src={post?.image?.url} alt={post?.image?.alt} objectFit={'cover'} w={'full'} loading='lazy'/>
                 </Link>
                 <Link to={`/cat/${post?.category}`}>
                    <Button background={'#242a56'} position={'absolute'} bottom={'0px'} p={1} borderRadius={'unset'} color={'white'} w={'160px'} textTransform={'uppercase'}>{post?.category}</Button>
                 </Link>
                </Box>
                <Box w={'full'}>
                  <Link to={`/posts:${post?.headerText}`}>
                    <Text> {post?.headerText} </Text>
                  </Link>
                 <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> {formateDate(post?.createdAt)},  06 </Text>
                </Box>
               </VStack>
              ))}
            </Flex>
        </Flex>
        </Box> 
     </Container>

     {/* latest news */}

        {/* <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'} py={5} textAlign={'center'}>Latest News</Text> */}
      <Box py={4} w={'full'}>
        <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'} py={5} textAlign={'center'}>Latest News</Text>
        
        <Container maxW={'7xl'}>     
          <Flex gap={3} w={'full'} overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
            scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}} pt={2} px={1}
          >

            {isLoading && [0,1,2,3].map((index) => (
              <Skeleton key={index} minW={'400px'}>
                <Box h={'300px'}>contents wrapped</Box>
              </Skeleton>
            ))}

           {!isLoading && posts?.slice(0,9).map((post) => (
            <Card key={post?.id} minW={{base: '300', sm: '400px'}} maxW={{base: '300px', sm: '400px'}} bg={'#1a1a1a'} p={0}>
            <CardBody p={2}>
              <Box as={RouterLink} to={`/posts:${post?.headerText}`}>
              <AspectRatio maxW={'full'} ratio={6/3} >
                <Image 
                  // src='/venice1.jpg'
                  src={post?.image?.url}
                  objectFit={'cover'}
                  w={'full'}
                  loading='lazy'
                  objectPosition={'center center'}
                />
              </AspectRatio>
              </Box>
              <Box w={'full'} mt={2} spacing={3} color={'white'}>
                <Text as={RouterLink} textTransform={'capitalize'} color={post?.category ? '#242a56' : 'unset'} 
                 to={post?.category ? `/cat/${post?.category}` : null}
                >
                  {post?.category || formateDate(post?.createdAt)} <br/>
                </Text>
                <Text>
                  <span style={{fontWeight: 700, fontSize: '26'}}> 
                   {post?.headerText.length > 40 ? post?.headerText 
                    : 'Driver left with bill costing thousands after expensive windscreen washer mistake'}
                  </span><br/>
                </Text>
              </Box>
            </CardBody>
           </Card>
           ))}
         </Flex>
        </Container>
        
        <Container maxW={'9xl'} py={4}>
          <Flex gap={3} w={'full'} py={4} marginTop={'30px'} wrap={'wrap'} justifyContent={'center'}>
            {isLoading && [0,1,2,3,4,5].map((ele) => (
                <VStack w={{sm: 'full', md: '29%'}} key={ele} alignItems={'flex-start'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"270px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"220px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
            ))} 
            {!isLoading && posts.slice(3,9).map((post) => (
              <React.Fragment key={post?.id}>
                <FeedPost post={post} width={{sm: 'full', md: 'calc(50% - 0.6rem)', lg: 'calc(33.33% - 0.6rem)', xl: 'calc(29% - 0.6rem)'}} height={'280'}  dir={'column'} />
              </React.Fragment>
            ))}
          </Flex>
        </Container>
      </Box>

      <Container maxW={'8xl'}>
        <Flex py={3} gap={3} w={'full'} wrap={'wrap'} justifyContent={{base: 'center', sm: 'normal'}}>      
            <VStack backgroundColor={'#d9e5f391'} w={{base: 'full', sm: 'full', md: '48%', lg: '34%'}}>
                <Box backgroundColor={'#242a56'} color={'white'} w={'96%'} px={3} mt={5} fontWeight={'800'} >Relevant Stories</Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
            <VStack backgroundColor={'#d9e5f391'} w={{base: 'full', sm: 'full', md: '48%', lg: '34%'}}>
            <Box backgroundColor={'#242a56'} color={'white'} w={'96%'} px={3} mt={5} fontWeight={'800'} >Editors Pick</Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
            <Box flexGrow={1} h={'auto'} display={{base: 'none', lg: 'flex'}} justifyContent={'center'} alignItems={'center'} bg={'gray'}>
              <Heading>Ads</Heading>
            </Box>
         </Flex>
      </Container>
  </>
  ) 
}

export default FeedPosts
