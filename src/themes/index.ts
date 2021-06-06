import { extendTheme, ThemeConfig } from '@chakra-ui/react'

import styles from '@themes/styles'
import foundations from '@themes/foundations'

const config: ThemeConfig = {
  cssVarPrefix: 'sk',
  useSystemColorMode: true,
}

const overrides = {
  config,
  ...foundations,
  styles,
}

const theme = extendTheme(overrides)

export default theme
