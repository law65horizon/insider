import React, { useEffect, useState } from 'react'
import News from './News'
import { Box, Container, Flex, Image, Skeleton, VStack } from '@chakra-ui/react'
import Pagination from '../../components/Pagination/Pagination'
import useGetPagePosts from '../../hooks/useGetPagePosts'
import useGetAllPosts from '../../hooks/useGetPosts'
import { useLocation, useParams } from 'react-router-dom'
import { count, doc, getDoc } from 'firebase/firestore'
import { firestore } from '../../FireBase/FireBase'
import FeedPost from '../../components/FeedPosts/FeedPost'

const NewsPage = () => {
    const page = useLocation().pathname.split('/')
    const p = page[page.length-1]
    const pg = parseInt(p, 10)
    const [currentPage, setCurrentPage] = useState(pg || 1)
    const [postsPerPage, setPostsperPage] = useState(10)
    const [direction, setDirection] = useState()
    // let direct;
    const lastPostIndex = currentPage* postsPerPage
    const firstPostIndex = lastPostIndex-postsPerPage

    const {posts, isLoading, post_num} = useGetPagePosts(currentPage, firstPostIndex, lastPostIndex)
    useEffect(() => {
      setCurrentPage(parseInt(page[page.length-1], 10) || 1)
      console.log(firstPostIndex, lastPostIndex,currentPage)
    }, [page])
    // console.log(posts)
  return (<>
    <Container maxW={'9xl'} paddingTop={'30px'}>
        <Flex py={3} gap={4} w={'full'} wrap={'wrap'} >
            {/* {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((e) => (
             <News img="/resize.webp" id={e} text="Viewers praise 'intense' unscripted James McAvoy thriller that's just landed on Netflix" createdAt="3 hours ago" cat="News" />
            ))} */}

            {isLoading && [9,2,3,4].map((_,idx) => (
              <VStack key={idx} gap={4} alignItems={"flex-start"} width={{base: 'full', md: 'calc(50% - 0.7rem)', lg: 'calc(33.3% - 0.7rem)', xl: 'calc(25% - 0.75rem)'}}>
                <Skeleton w={"full"}>
                  <Box h={"300px"}>contents wrapped</Box>
                </Skeleton>
                <Skeleton height={"10px"} w={"200px"}/>
                <Skeleton height={"40px"} w={"full"}/>
              </VStack>
            ))}
            {!isLoading && posts.map((post) => (
            //  <News img="resize.webp" text="Viewers praise 'intense' unscripted James McAvoy thriller that's just landed on Netflix" createdAt="3 hours ago" cat="News" />
                // <News post={post} isLoading={isLoading} />
                <React.Fragment key={post?.id}>
                  <FeedPost post={post}  gap={{base: 3,md: 0}} dir={'column'} 
                   width={{base: 'full', md: 'calc(50% - 0.7rem)', lg: 'calc(33.3% - 0.7rem)', xl: 'calc(25% - 0.75rem)'}}
                  />
                </React.Fragment>
            ))}
        </Flex>
        <Pagination totalPosts={post_num} currentPage={currentPage} setCurrentPage={setCurrentPage} setDirection={setDirection} postsPerPage={postsPerPage} dir={'news'}/>
    </Container>
  </>
    )
}

export default NewsPage
