import type { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: ({ colorMode }) => {
    console.log('current color mode ise, ', colorMode)
    return {
      body: {
        fontFamily: 'body',
      },
    }
  },
}

export default styles
