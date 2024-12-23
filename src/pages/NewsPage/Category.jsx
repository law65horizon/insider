import React, { useEffect, useState } from 'react'
import usePostStore from '../../store/postStore'
// import useUserProfileStore from '../store/userProfileStore'
import { collection, count, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore'
import { firestore } from '../../FireBase/FireBase'
import useShowToast from '../../hooks/useShowToast'
import { useLocation, useParams } from 'react-router-dom'
import { Box, Container, Flex, Heading, Image, Select, Skeleton, VStack } from '@chakra-ui/react'
import News from './News'
import Pagination from '../../components/Pagination/Pagination'
import FeedPost from '../../components/FeedPosts/FeedPost'

const Category = () => {
    const {cat} = useParams()
    const page = useLocation().pathname.split('/')
    const p = page[page.length-1]
    const pg = parseInt(p, 10)
    // console.log(cat)
    const [currentPage, setCurrentPage] = useState(pg || 1)
    const [postsPerPage, setPostsperPage] = useState(10)
    const [category, setCategory] = useState(cat)
    const lastPostIndex = currentPage* postsPerPage
    const [direction, setDirection] = useState()
    const firstPostIndex = lastPostIndex - postsPerPage
    const {posts, isLoading, post_num} = useGetPostByCategory(category, currentPage, firstPostIndex, lastPostIndex)
    console.log(firstPostIndex, lastPostIndex,currentPage)
    // console.log(cat, category)
    // console.log(isLoading)
   return (<>
    <Container maxW={'9xl'} paddingTop={'30px'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading textTransform={'capitalize'}> {category} </Heading>
            <Select bg={'#1a1a1a'} w={{base: 'max-content', md: '200px'}} value={category} fontSize={'small'} placeholder={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
            <option value='tech' style={{background: '#1a1a1a'}}>Tech</option>
            <option value='news' style={{background: '#1a1a1a'}}>News</option>
            {/* <option value='sold'>Sold</option> */}
            </Select>
        </Box>
        <Flex py={3} gap={4} w={'full'} wrap={'wrap'} >
            {/* {[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5].map(() => (
             <News img="/resize.webp" text="Viewers praise 'intense' unscripted James McAvoy thriller that's just landed on Netflix" createdAt="3 hours ago" cat="News" />
            ))} */}
            {isLoading && [9,2,1,3].map((_,idx) => (
              <VStack key={idx} gap={4} alignItems={"flex-start"} w={{base: 'full', md: 'calc(50% - 0.7rem)', lg: 'calc(33.3% - 0.7rem)', xl: 'calc(25% - 0.75rem)'}}>
                <Skeleton w={"full"}>
                  <Box h={"300px"}>contents wrapped</Box>
                </Skeleton>
                <Skeleton height={"10px"} w={"200px"}/>
                <Skeleton height={"40px"} w={"full"}/>
              </VStack>
            ))}
            {!isLoading && posts.map((post) => (
                // <News post={post} isLoading={isLoading} />
                <React.Fragment key={post?.id}>
                  <FeedPost post={post} width={{base: 'full', md: 'calc(50% - 0.7rem)', lg: 'calc(33.3% - 0.7rem)', xl: 'calc(25% - 0.75rem)'}} gap={{base: 3,md: 0}} dir={'column'} />
                </React.Fragment>
            ))}
        </Flex>
        <Pagination totalPosts={post_num} currentPage={currentPage} setCurrentPage={setCurrentPage} setDirection={setDirection} postsPerPage={postsPerPage} dir={'cat/' + cat}/>
    </Container>
  </>
  )
}

export default Category

function useGetPostByCategory(cat, currentPage, firstPostIndex, lastPostIndex) {
  const [isLoading, setIsLoading] = useState(true)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
  const location = useLocation()
  const [counter, setCounter] = useState()
  const [post_num, setPost_num] = useState()
console.log(counter)
//   useEffect(() => {
//     const getPosts = async() => {
//         if(!isLoading) return
//         setIsLoading(true)
//         setPosts([])
//         try {
//             let q = query(collection(firestore, 'posts'), orderBy('counter', 'desc'), where('category', '==', 'news'), )
//             const snapshot = await getCountFromServer(q)
//             const docCount = snapshot.data().count + 1
//             setCounter(snapshot.data().count)
//             console.log(counter, firstPostIndex)
//             if (currentPage > 1) {
//                 console.log('dido')
//                 let lastQ = query(collection(firestore, 'posts'), orderBy('counter', 'desc'), where('category', '==', 'news'), startAfter(12 - firstPostIndex), limit(10))
//                 q = query(q, startAfter(docCount - firstPostIndex), limit(10))
//             }else {
//                 q = query(q, limit(10))
//             }
//             const querySnapShot = await getDocs(q)
//             const posts = []
//             querySnapShot.forEach((doc) => {
//                 posts.push({...doc.data(), id:doc.id})
//             })
//             posts.sort((a,b) => b.createdAt - a.createdAt)
//             setPosts(posts)
//             setPost_num(counter)
//         } catch (error) {
//             console.log(error.message)
//             showToast('Error', error.message,'error')
//             setPosts([])
//         }finally {
//             setIsLoading(false)
//         }
//     }
//     getPosts()
//   },  [setPosts, showToast, currentPage])
  useEffect(() => {
    const getPosts = async() => {
        // if(isLoading) return
        setIsLoading(true)
        setPosts([])
        console.log('ciosi')
        try {
            console.log('ciosi')
            let q = query(collection(firestore, 'posts'), orderBy('counter', 'desc'), where('category', '==', cat), )
            const snapshot = await getCountFromServer(q)
            const docCount = snapshot.data().count + 1
            setCounter(snapshot.data().count)
            console.log(docCount, firstPostIndex)
            if (currentPage > 1) {
                // let lastQ = query(collection(firestore, 'posts'), orderBy('counter', 'desc'), where('category', '==', 'news'), startAfter(12 - firstPostIndex), limit(10))
                q = query(q, startAfter(docCount - firstPostIndex), limit(10))
            }else {
                q = query(q, limit(10))
            }
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)
            setPosts(posts)
            setPost_num(counter)
        } catch (error) {
            console.log(error.message)
            showToast('Error', error.message,'error')
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()

    // const getPosts = async() => {
    //   console.log('checking')
    // }
    // getPosts()
  }, [setPosts, showToast, currentPage, cat, location])
  return {isLoading, posts, post_num}
}
