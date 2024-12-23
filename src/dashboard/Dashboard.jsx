import React, { useState } from 'react'
import { Route, Link as RouterLink, Routes } from 'react-router-dom';
import {
	Box,
	Button,
	CloseButton,
	Container,
	Flex,
	Image,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	useDisclosure,
} from "@chakra-ui/react"; 
import { BsFillFileImageFill, BsFillImageFill } from 'react-icons/bs';
import CreatePost from './CreatePost';

const Dashboard = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
	const [caption, setCaption] = useState('')
  return (<>
    <Container maxW={'7xl'} py={3}>
     <Link p={2} bg={'black'} as={RouterLink} to={'editpost'}>Create Post</Link>
	</Container>
	{/* <Routes>
	  <Route path='editpost' element={<CreatePost/>}/>
	</Routes> */}
  </>)
}

export default Dashboard