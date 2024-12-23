import { Box, Button, Container, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useNavBar from './useNavBar'


  const NavBar = () => {

  const [showNav, setShowNav] = useState(true)
  const {horizontalNav, setHorizontalNav} = useNavBar()
  const handleNav = () => {

  }
  
  const isTabletDevice = useMediaQuery({ query: '(min-device-width: 700px)' });
  

  return (<>
    {/* <Box backgroundColor={'black'} position={'fixed'} top={0} left={0} right={0} zIndex={100}> */}
    <Box backgroundColor={'black'} zIndex={100}>
      <Container maxW={'7xl'}>
      {isTabletDevice && showNav? (
        <Flex gap={{base: 4, sm: 10}} textTransform={'uppercase'} fontWeight={'bold'} p={3} color={'white'}>
        <Flex justifyContent={"space-between"} w={'60%'}>
         <Link as={RouterLink} to={'/'} py={2}>Insider</Link>
         <Link as={RouterLink} to={'/news'} py={2}>News</Link>
         <Link as={RouterLink} to={'/tech'} py={2}>Tech</Link>
         <Link as={RouterLink} to={'/categories'} py={2}>Categories</Link>
        </Flex>
        <Flex justifyContent={"flex-end"} w={'40%'}>
         <Link as={RouterLink} to={'/forums'} p={2}>Forums</Link>
         <Link as={RouterLink} to={'/newsletter'} p={2}>Newsletter</Link>
        </Flex>
       </Flex>
      ) : (
        <Flex textTransform={'uppercase'} fontWeight={'bold'} color={'white'}>
          <Button cursor={'pointer'} bg={'unset'} onClick={() => setHorizontalNav(true)}>nb</Button>
          <Flex justifyContent={'flex-end'} w={'full'}>
            <Link as={RouterLink} to={'/forums'} p={2}>Forums</Link>
            <Link as={RouterLink} to={'/newsletter'} p={2}>Newsletter</Link>
          </Flex>
        </Flex>
      )}     
      </Container>
    </Box>
    {/* {horizontalNav} */}
    </>
  )
}

export default NavBar