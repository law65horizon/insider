import { Box, Button, Container, Flex, Heading, Image, Link, Spinner, Text, VStack,  } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import useNavBar from '../../components/NavBar/useNavBar'
import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerIcon } from '@chakra-ui/icons'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'



const PageLayout = ({children}) => {
  const {horizontalNav, setHorizontalNav} = useNavBar()
  // const [isTabletDevice]  = useMediaQuery('(min-width- 1200px)')
  const isTabletDevice = useMediaQuery({ query: '(min-width: 910px)' })
  // const isTabletDevice = useMediaQuery({ minWidth: 1200 });
  const [showNav, setShowNav] = useState(true)
  const {pathname} = useLocation()
  const displayNav = pathname !== "/dashboard" && pathname !== '/auth'

  const items = [
    [
      ['news', '/news'],
      ['tech', '/cat/tech'],
      ['gaming', '../cat/gaming'],
      ['anime', '../cat/anime'],
      ['lifestyle', '../cat/lifestyle']
    ],
    [
      ['Entertainment', '/news'],
      ['Uk news,', '../cat/uk_news'],
      ['US news,', '../cat/us_news'],
      ['World news', '../cat/world_news'],
      ['Wierd news', '../cat/weird_news']
    ],
    [
      ['Category', '/news'],
      ['Uk news,', '../cat/uk_news'],
      ['US news,', '../cat/us_news'],
      ['World news', '../cat/world_news'],
      ['Wierd news', '../cat/weird_news']
    ]
  ]
  // items.map((id) => {
  //   // console.log(id[0])?=
  //   id.map((ix) => {
  //     ix.map((o) => {
  //       console.log(o)
  //     })
  //   })
  // })
  
  if(horizontalNav && !isTabletDevice) return (
    <Flex w={'full'} bg={'black'} justifyContent={'space-between'}>
      <Box w={'full'}>
        {/* <Flex flexDir={'column'} h={'100vh'} color={'white'} bg={'black'} p={3} w={'80%'} >
         <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/'} py={2}>Insider</Link>
         <Box>
          <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/news'} py={2}>News</Link>
         </Box>
         <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/tech'} py={2}>Tech</Link>
         <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/categories'} py={2}>Categories</Link>
        </Flex> */}
        <Flex flexDir={'column'} h={'100vh'} textTransform={'uppercase'} color={'white'} bg={'black'} p={3} w={'80%'} >
          <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/'} py={2}>
            <Heading>Insider</Heading>
          </Link>
          <Box pl={3} display={'flex'} flexDir={'column'} fontWeight={700} fontSize={'20'}>
            {items[0].map((item) => (
              <Link as={RouterLink} to={item[1]} onClick={() => setHorizontalNav(false)}> {item[0]} </Link>
            ))}
          </Box>
        </Flex>
      </Box>
      <Button fontWeight={800} bg={'transparent'} color={'white'} onClick={() => setHorizontalNav(false)}>X</Button>
    </Flex>
  )
  // console.log(isTabletDevice, 8)

  return (
    <Flex direction={'column'} h={'100vh'} position={'relative'}>

      
      {displayNav  ?(
        <Box w={'100%'} position={'sticky'} zIndex={100}>
          <Box backgroundColor={'black'}>
          {/* <Box backgroundColor={'black'} zIndex={100}> */}
           <Container maxW={'6xl'}>
            {isTabletDevice && showNav? (
              <Flex gap={{base: 4, sm: 10}} textTransform={'uppercase'} fontWeight={'bolder'} fontSize={'larger'} color={'white'}>
                <Flex justifyContent={"space-between"} w={'60%'}>
                  <Link as={RouterLink} to={'/'} py={2} fontWeight={'bold'} fontSize={'larger'} >Insider</Link>
                  <Link as={RouterLink} to={'/news'} py={2} fontWeight={'bolder'} fontSize={'larger'}>News</Link>
                  <Link as={RouterLink} to={'/tech'} py={2} fontWeight={'bolder'} fontSize={'larger'}>Tech</Link>
                  <Link w={'auto'} fontWeight={'bolder'} fontSize={'larger'} display={'flex'} py={0} px={0} bg={'transparent'} _hover={{bg: 'transparent'}} alignItems={'center'} onClick={() => setHorizontalNav(!horizontalNav)} > 
                    Categories { horizontalNav && isTabletDevice ?<RiArrowDropDownLine size={48} className='inverted-arrow'/> : <RiArrowDropDownLine size={48}/>}
                  </Link>
                </Flex>
                <Flex justifyContent={"flex-end"} w={'40%'}>
                  <Link as={RouterLink} to={'/forums'} p={2}>Forums</Link>
                  <Link as={RouterLink} to={'/newsletter'} p={2}>Newsletter</Link>
                </Flex>
              </Flex>
            ) 
            : (
              <Flex textTransform={'uppercase'} fontWeight={'bold'} color={'white'}>
                <Button cursor={'pointer'}  bg={'unset'} onClick={() => setHorizontalNav(true)}><RxHamburgerMenu color='white' size={30}/></Button> 
                <Link as={RouterLink} to={'/'} p={2}>Insider</Link>
                <Flex justifyContent={'flex-end'} w={'full'}>
                  <Link as={RouterLink} to={'/forums'} p={2}>Forums</Link>
                  <Link as={RouterLink} to={'/newsletter'} p={2}>Newsletter</Link>
                </Flex>
              </Flex>
            )} 
           </Container>
           {horizontalNav && isTabletDevice ?(
            // category dropdown
            <Box color={'white'} p={5}>
              <Flex justifyContent={'space-evenly'}>
                <VStack fontWeight={'bold'} fontSize={'large'}>
                  <Link fontWeight={'bolder'} fontSize={'30px'}>News</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)} >Gaming</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)} >Lifestyle</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)} >Tech</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)} >Anime</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)} >Tv shows</Link>
                </VStack>
                <VStack fontWeight={'bold'} fontSize={'large'}>
                  <Link fontWeight={'bolder'} fontSize={'30px'}>Entertainment</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)}  to={'/cat/gaming'}>Gaming</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)}  to={'/cat/lifestyle'}>Lifestyle</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)}  to={'/cat/tech'}>Tech</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)}  to={'/cat/anime'}>Anime</Link>
                  <Link as={RouterLink} onClick={() => setHorizontalNav(!horizontalNav)}  to={'/cat/news'}>News</Link>
                </VStack>
              </Flex>
            </Box>
           ) : null }
          {pathname !== '/' && (
            <Container maxW={'8xl'} >
              <Flex>
                <Image src='/news.webp' className='news-banner-img'/>
              </Flex>
            </Container>
          )}
          </Box>
        </Box>
      ) : null}
        
        
      <Box flex={1} w={{base: "calc(100%)", md: "calc(100%)"}}>
        {children}
      </Box>
        
        {/* footer */}
      {pathname !== "/dashboard" && pathname !== '/auth'  ?
        (
          <Box >
            <Footer/>
          </Box>
        ):null
      }
        
    </Flex>

  )
}

export default PageLayout

