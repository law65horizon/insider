import { Container, Flex, Box } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPosts/FeedPosts"

const HomePage = () => {
  return (
    <Box position={'relative'}>
        <FeedPosts/>
    </Box>
  )
}

export default HomePage