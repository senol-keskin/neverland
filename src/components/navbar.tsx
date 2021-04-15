import { Flex, Switch, useColorMode } from '@chakra-ui/react'

const NavBar: React.FC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex>
      <Switch onChange={toggleColorMode} />
    </Flex>
  )
}

export default NavBar
