import { Flex, Switch, useColorMode } from '@chakra-ui/react'

const NavBar: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex>
      <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} />
    </Flex>
  )
}

export default NavBar
