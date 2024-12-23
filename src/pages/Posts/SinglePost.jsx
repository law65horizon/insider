import React, { createElement, useEffect, useState } from 'react'
import usePostStore from '../../store/postStore'
// import useUserProfileStore from '../store/userProfileStore'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from '../../FireBase/FireBase'
import { useParams } from 'react-router-dom'
import { Box, Button, Container, Flex, Heading, Image, Link, Skeleton, Text, VStack } from '@chakra-ui/react'
import useShowToast from '../../hooks/useShowToast'
import NewsList from '../../components/FeedPosts/NewsList'
import { useMediaQuery } from 'react-responsive'
// import { useParams } from 'react-router-dom'

const SinglePost = () => {
  const {uid} = useParams()
  // console.log(uid)
  const postId = uid.split(':')
  const {posts, isLoading} = useGetSinglePost(postId[1])
  const le = posts.length === 0
  const post = { content :[
    {'heading': 'The good stuff'},
    {'img': '../news.webp'},
    {'text': 'Experts believe as many as 17,000 people in the UK who inject steroids are at risk of having \n a little [-anime.com:spoken about-] virus. You may not realise, but a lot more people around you take steroids then you think. Catch NHS sexual health consultant and Medical Director at Preventx Dr John White explaining how to test for the virus here:'},
    {'img': '../img4.png'},
    {'heading': 'Taylor Swift'},
    {'text': 'dod'},
    {'text': 'Experts believe as many as 17,000 people in the UK who [-h.com:inject steroids-] are at risk of having a \n little spoken about virus. You may not realise, but a lot more people around you take steroids then you think. Catch NHS sexual health consultant and Medical Director at Preventx Dr John White explaining how to test for the virus here:'},
    {'text': 'Whether it be an influencer you follow on social media, someone who goes to the same gym or even a friend, around 357,600 people in the UK are believed to inject steroids, new research provided exclusively to LADbible has revealed. \n And this could be the lower end of the estimation too, with UK Anti-Doping (UKAD) reporting that over one million people in the country are believed to be using steroids - usually for image and performance enhancing purposes in sport and fitness - categorising it as a \'serious public health issue\'.The dangers of steroid use have been publicly addressed by several gym-goers and bodybuilders, however, there\'s one virus which can be picked up by injecting steroids which isn\'t spoken about enough - Hepatitis C.'}
  ],
  'don':'consn'
}
const link =  'Experts believe as many as 17,000 people in the UK who [-h.com:inject steroids-] are at risk of having a \n little spoken about virus. You may not realise, but a lot more people around you take steroids then you think. Catch NHS sexual health consultant and Medical Director at Preventx Dr John White explaining how to test for the virus here:'

// const txt = '4-07-11T19:01:30.925Z]  @firebase/analytics: Failed to fetch this Firebase app\'s measurement ID from the server. Falling back to the measurement ID G-3D648EBL2D provided in the "measurementId" field in the local Firebase config. [Failed to fetc'
// const txt = '4-07-11T19:01:30.925Z]  @firebase/analytics: [-H.com:Failed -] to fetch this [-H.com:Firebase -] app\'s measurement ID from the server. Falling back to the measurement ID G-3D648EBL2D provided in the "measurementId" field in the local [-H.com:Firebase -] config. [[-H.com:Failed -] to fetc'
let txt = '[-H.com:Failed -] do osj osj [-H.com:Failed -]'
const sel = 'Failed'
let stl = `[-H.com:${sel} -]`
// console.log(stl)
// let regex = new RegExp(sel, 'g')
let regex = new RegExp(stl, '')
// const ho = txt.replace(stl, sel) 
// let ho = txt
while(txt.includes(stl)) {
  txt = txt.replace(stl, sel)
}
// console.log(txt)
// const paragrah = link.split('\n').map((txt) => {
//   const tt = txt.split(/[\[\]]+/).map((so) => {
//     console.log(so.replace(/-/g, ''))
//   })
// })


// const ri = link.replace(/\[-(.*?)-]/, (_, capt) => {
//   return <a>${capt}</a>
// })
// console.log(ri)
  // const oh = content.filter(key => Object.keys(key)[0] === "img")
  // const indexToDelete = content.findIndex(item => item.text === 'dod')

  // console.log(oh)
  // console.log(content.map(key => Object.keys(key)))
  // oh.map((ele) => {
  //   console.log(ele)
  // })
  // content.map((element) => {
  //   if(Object.keys(element)[0] === 'img') {
  //     // console.log(Object.keys(element)[0] === 'img')
  //     console.log(element.img)
  //   }else {
  //     element.text.split('\n').map((paragraph) => {
  //       console.log(paragraph)
  //     })
  //   }
  //   // console.log(Object.keys(element))
  // })
  // console.log(postId[1])

  
  return (
    <Flex>
      <Box w={{base: 'full', md: '70%'}} px={{base:1, md: 6}} mt={2}>
        <Text p={2} wordBreak={'break-word'} fontWeight={'bolder'} id='ono' fontSize={'x-large'}>Viewers praise 'intense' unscripted James McAvoy thriller that's just landed on Netflix</Text>
        <Text p={2} wordBreak={'break-word'}>New research has revealed that 63% of men have limite or no knowledge about the virus</Text>

        {/* post content */}

        {/* {!isLoading && posts[0]?.content.map((element) => (
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
                  // paragraph.
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
        } */}
        { post.content.map((element) => (
          <Box>
            
            {Object.keys(element)[0] === 'img' 
              ? <Image src={element.img} p={2} objectFit={'cover'} borderRadius={'13px'} w={'full'} /> 
              : <Box>
                {Object.keys(element)[0] === 'text' && element.text.split('\n').map((paragraph) => (
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
                  // paragraph.
                ))}
                {
                  Object.keys(element)[0] === 'heading' && <Heading p={2} textTransform={'capitalize'}> {element.heading} </Heading>
                }
              </Box>
            }
          </Box>
        ))}

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
//   const userProfile = useUserProfileStore((state) => state.userProfile)
console.log(posts)
  useEffect(() => {
    const getPosts = async() => {
        // if(!userProfile) return
        setIsLoading(true)
        setPosts([])
        try {
            const q = query(collection(firestore, 'posts'), where('headerText', '==', hText))
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)
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