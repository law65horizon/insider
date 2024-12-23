import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} color={'gray.500'} fontWeight={'bold'}>
          Suggested for you
        </Text>
        <Text fontSize={12} _hover={{color: 'gray.400'}} fontWeight={'bold'} cursor={'pointer'}>
          See All
        </Text>
      </Flex>
      <SuggestedUser name="_asaprogrammer" followers={1392} avatar="/profilepic1.png"/>
      <SuggestedUser name="chris" followers={132} avatar="/profilepic1.png"/>
      <SuggestedUser name="roxxon" followers={92} avatar="/profilepic1.png"/>

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'flex-start'}>
      © 2024 Built By{' '} 
      <Link href="https://michaeldev.great-site.net"
            target="_blank"
            color={'blue.500'}
            fontSize={14}
      >
        michael
      </Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers