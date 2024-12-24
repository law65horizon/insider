import React, { createElement, useEffect, useState } from 'react'
import usePostStore from '../../store/postStore'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from '../../FireBase/FireBase'
import { useParams } from 'react-router-dom'
import { Box, Flex, Image, Link, Skeleton, Text, VStack } from '@chakra-ui/react'
import useShowToast from '../../hooks/useShowToast'
import NewsList from '../../components/FeedPosts/NewsList'

const SinglePost = () => {
  const {uid} = useParams()
  const postId = uid.split(':')
  const {posts, isLoading} = useGetSinglePost(postId[1])
  console.log(posts[0]?.headerText)
  const le = posts.length === 0

  
  return (
    <Flex>
      <Box w={{base: 'full', md: '70%'}} px={{base:1, md: 6}} mt={2}>
        <Text p={2} wordBreak={'break-word'} fontWeight={'bolder'} id='ono' fontSize={'x-large'}> {posts[0]?.headerText} </Text>
        <Text p={2} wordBreak={'break-word'}>New research has revealed that 63% of men have limite or no knowledge about the virus</Text>

        {/* post content */}

        {!isLoading && posts[0]?.content.map((element) => (
          <Box>
            {Object.keys(element)[0] === 'img' 
              ? <Image src={element.img.url} p={2} objectFit={'cover'} borderRadius={'13px'} w={'full'} /> 
              // : <Text p={2}> {element.text} </Text>
              :<Box>
                {element.text.split('\n').map((paragraph) => (
                  <Text p={2}>
                    {
                      paragraph.split(/[\[\]]+/).map((so) => (
                        // console.log(so)
                        <span>
                          {so.slice(0,1) === '-'
                          ? <Link href={so.replace(/-/g, '').split(':')[0]} color={'red'} target='_blank'> {so.replace(/-/g, '').split(':')[1]} </Link>
                          : <span>{so}</span>
                         }
                        </span>
                      ))
                    }
                  </Text>
                ))}
              </Box>
            }
          </Box>
        ))}
        {isLoading || le?
          <VStack>
            <Skeleton w={"full"}>
              <Box h={"800px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        : null
        }



      </Box>
      <Box py={3} gap={3} w={'30%'} display={{base: 'none', lg: 'block'}} >      
            <VStack backgroundColor={'#d9e5f391'} w={'full'}>
                <Box backgroundColor={'#242a56'} color={'white'} w={'96%'} px={3} mt={5} fontWeight={'800'} >Relevant Stories</Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
            
         </Box>
    </Flex>
  )
}

export default SinglePost

function useGetSinglePost(headerText) {
  const [isLoading, setIsLoading] = useState(true)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
  let hText = headerText.replace(/%20/g, ' ')
  useEffect(() => {
    const getPosts = async() => {
        setIsLoading(true)
        setPosts([])
        try {
            const q = query(collection(firestore, 'posts'), where('headerText', '==', hText))
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            setPosts(posts)
        } catch (error) {
            showToast('Error', error.message,'error')
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()
  },  [setPosts, showToast])
  return {isLoading, posts}
}