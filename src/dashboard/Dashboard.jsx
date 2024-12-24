import React, { useState } from 'react'
import { Link as RouterLink, } from 'react-router-dom';
import {Container,Link} from "@chakra-ui/react"; 

const Dashboard = () => {
  return (<>
    <Container maxW={'7xl'} py={3}>
     <Link p={2} bg={'black'} as={RouterLink} to={'editpost'}>Create Post</Link>
	</Container>
  </>)
}

export default Dashboard