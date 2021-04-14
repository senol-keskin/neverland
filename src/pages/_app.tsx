import { ChakraProvider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import theme from '@themes/index'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
