// content = [
//     {'text': 'dodooeome'},
//     {'img': 'ooenoee'},
//     {'img': 'odojioe3o'},
//     {'text': 'jdo099dj'}
// ]
export const data = [
    {
        id: 1,
        cat: 'tech',
        uid: 'did',
        img: './resize.webp',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.',
        createdAt: '19, April 2019',
        commentsNum: '06',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae'
    },
    {
        id: 2,
        cat: 'news',
        uid: '20204',
        img: './resize.webp',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.',
        createdAt: '19, April 2019',
        commentsNum: '06',
        desc: 'Sed repudiandae voluptatum fugiat quisquam voluptatem possimus sequi adipisci,'
    },
    {
        id: 3,
        cat: 'sports',
        uid: '30300',
        img: './resize.webp',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.',
        createdAt: '19, April 2019',
        commentsNum: '06',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  nemo aut voluptas.'
    },
    // {
    //     id: 4,
    //     cat: 'news',
    //     uid: 'w0w0e3994',
    //     img: './resize.webp',
    //     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sit impedit illum vel eum nihil, nulla accusantium, commodi modi tenetur aut dolorem reiciendis. Sequi nisi asperiores sint at architecto corrupti',
    //     desc: 'fugiat quisquam voluptatem sit amet consectetur adipisicing elit'
    // }
    
]


// import { Box, Card, CardBody, Divider, Flex, Image, Text, VStack, useDisclosure } from '@chakra-ui/react'
// import { Link, useNavigate } from 'react-router-dom'
// import React from 'react'
// import FeedPost from './FeedPost'
// import LatestNews from './LatestNews'
// import TvFeeds from './TvFeeds'
// import { data } from '../../data'
// import NewsList from './NewsList'

// const FeedPosts = () => {
//   return (
//     <>
//     <Box py={4} w={'full'}>
//         <Divider my={2} py={'2px'} backgroundColor={'black'}/>
//         <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'}>must read</Text>
//         <Text paddingBottom={3} fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur.</Text>
//         <Flex py={3} gap={1} w={'full'} wrap={'wrap'} >
            
//             {data.map((post) => (
//                <FeedPost img={post.img} desc={post.desc} uid={post.uid} key={post} cat={post.cat} />
//             ))}
//         </Flex>
//     </Box>

//     {/* <Box w={'full'} py={4}>
//         <Flex gap={5}>
//             <Box w={'65%'}>
//                 <Image src={data[0].img} objectFit={'cover'} w={'full'} pb={2}/>
//                 <Text color={'red'} textTransform={'uppercase'} p={2}> {data[0].cat} </Text>
//                 <Text fontWeight={'bold'} p={2} fontSize={'large'}> {data[0].desc} </Text>
//             </Box>
//             <Box w={'35%'}>
//                 <Divider my={2} py={'2px'} backgroundColor={'black'}/>
//                 <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'}>must read</Text>
//                 <Flex py={1} gap={4} w={'full'} wrap={'wrap'} direction={{md: 'row', xl: 'column'}} >
//                     {data.map((post) => (
//                         <FeedPost img={post.img} desc={post.desc} uid={post.uid} key={post} cat={post.cat} />
//                     ))}
//                 </Flex>
//             </Box>
//         </Flex>
//     </Box> */}

//     <LatestNews />

//     {/* Top of the shows */}
//     <Box py={4} w={'full'}>
//         <Divider my={2} py={'2px'} backgroundColor={'black'}/>
//         <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'}>Top of the Shows</Text>
//         <Text paddingBottom={3} fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur.</Text>
//         <Flex py={3} gap={2} w={'full'} wrap={'wrap'} >
//             <FeedPost img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <FeedPost img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <FeedPost img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <FeedPost img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//         </Flex>
//     </Box>

//     {/* Tv Shows */}
//     <Box py={3} w={'full'}>
//         <Divider my={2} py={'2px'} backgroundColor={'black'}/>
//         <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'}>Top Tv</Text>
//         <Text paddingBottom={3} fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur.</Text>
//         <Flex py={3} gap={1} w={'70%'} wrap={'wrap'} >
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//         </Flex>
//         <Flex py={3} gap={3} w={'full'} wrap={'wrap'} justifyContent={{base: 'center', sm: 'normal'}}>
//             <VStack backgroundColor={'black'} w={{base: 'full', sm: 'full', md: '48%', lg: '32.5%'}}>
//                 <Box backgroundColor={'yellow'} h={'5px'} w={'full'}></Box>
//                 <NewsList />
//                 <NewsList />
//                 <NewsList />
//                 <NewsList />
//             </VStack>
//             <VStack backgroundColor={'black'} w={{base: 'full', sm: 'full', md: '48%', lg: '32.5%'}}>
//                 <Box backgroundColor={'green'} h={'5px'} w={'full'}></Box>
//                 <NewsList />
//                 <NewsList />
//                 <NewsList />
//                 <NewsList />
//             </VStack>
//             <VStack backgroundColor={'black'} w={{base: 'full', sm: 'full', md: '48%', lg: '32.5%'}}>
//                 <Box backgroundColor={'green'} h={'5px'} w={'full'}></Box>
//                 <NewsList />
//                 <NewsList />
//                 <NewsList />
//                 <NewsList />
//             </VStack>
//         </Flex>
//     </Box>

//     {/* Movies */}
//     <Box py={3} w={'full'}>
//     <Divider my={2} py={'2px'} backgroundColor={'black'}/>
//         <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'}>Movies</Text>
//         <Text paddingBottom={3} fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur.</Text>
//         <Flex py={3} gap={1} w={'70%'} wrap={'wrap'} >
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//             <TvFeeds img="./img1.png" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti molestiae"/>
//         </Flex>
//     </Box>
//     </>
//   )
// }

// export default FeedPosts