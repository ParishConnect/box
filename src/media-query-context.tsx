import { createContext } from 'react'

const {
  Consumer: MediaQueryConsumer,
  Provider: MediaQueryProvider
} = createContext([
  '@media(max-width: 1121px)',
  '@media(max-width: 921px)',
  '@media(max-width: 421px)'
])

export { MediaQueryConsumer, MediaQueryProvider }
