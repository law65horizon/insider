import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

const useShowToast = () => {
  const toast = useToast()
  //useCallback is used to prevent infinite loops by catching the function
  const showToast = useCallback((title, description, status) => {
    let colorSheme;
    if(status === 'success') {
      colorSheme === 'green'
    } else if (status === 'error') {
      colorSheme === 'red'
    }
    toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
        colorScheme: colorSheme
    })
  }, [toast])

  return (
    showToast
  )
}

export default useShowToast