import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Button, Input, Container, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from '../hooks/useSignUpWithEmailAndPassword'
// import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
   })
   console.log(inputs)

   const [showPassword, setShowPassword] = useState(false)
   const {loading, error, signUp} = useSignUpWithEmailAndPassword()

  return (<Container maxW={'container.lg'} bg={'white'} h={'full'} position={'inherit'} pt={20} borderRadius={4}>
    <Input
        placeholder="email"
        fontSize={14}      
        fontWeight={'700'}   
        type='email'  
        value={inputs.email}
       my={3}
       color={'black'}
       className='input'
       border={'1px solid black'}
        onChange={(e) => setInputs({...inputs, email: e.target.value })}
    />
    <Input
        placeholder="username"
        fontSize={15}   
        fontWeight={'700'}   
        type='text'  
        value={inputs.username}
        className='input'
       my={3}
       color={'black'}
       border={'1px solid black'}
        onChange={(e) => setInputs({...inputs, username: e.target.value })}
    />
    <Input
        placeholder="fullname"
        fontSize={15}   
        fontWeight={'700'}   
        type='text'  
        value={inputs.fullname}
        className='input'
       my={3}
       color={'black'}
       border={'1px solid black'}
        onChange={(e) => setInputs({...inputs, fullname: e.target.value })}
    />
    <InputGroup>
     <Input
        placeholder="password"
        fontSize={15}   
        fontWeight={'700'}  
        className='input'   
        type={showPassword ? 'text' : 'password'}
        value={inputs.password}
       my={3}
       color={'black'}
       border={'1px solid black'}
        onChange={(e) => setInputs({...inputs, password: e.target.value})}
     />
     <InputRightElement h={'full'}>
        <Button variant={'ghost'} p={3} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon/>}
        </Button>
     </InputRightElement>
    </InputGroup>

    {error && (
      <Alert status='error' fontSize={13} p={2} borderRadius={4}>
        <AlertIcon fontSize={12}/>
        {error.message}
      </Alert>
    )}

    <Button w={"full"}  colorScheme='blue' size={'sm'} 
      fontSize={15} onClick={() => signUp(inputs)}
      isLoading={loading}
    >
        Sign up
    </Button>
  </Container>
  )
}

export default SignUp