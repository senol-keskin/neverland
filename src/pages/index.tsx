import type { NextPage } from 'next'
import { Box, Container, Heading, Link, Text } from '@chakra-ui/layout'

const Index: NextPage = () => {
  return (
    <Box pt={7}>
      <Container>
        <Heading mb={3} fontSize="2xl">
          A little about me.
        </Heading>
        <Text>
          Hello, I am Şenol (with <code>`sh`</code> sound), so it also is Shenol. You can call me
          Senol if it is hard to pronounce. 🙂
        </Text>
        <Text py={4}>
          I am a Front End Developer @{' '}
          <Link href="https://www.lidyateknoloji.com/" isExternal color="teal.500">
            Lidya Techonlogy
          </Link>
          .
        </Text>
        <Text>
          You may send me an e-mail if you want to say something to me. Please feel free to email me{' '}
          <Link href="mailto:msenolkeskin@gmail.com" color="teal.500">
            msenolkeskin @ gmail.com
          </Link>
        </Text>
      </Container>
    </Box>
  )
}

export default Index
